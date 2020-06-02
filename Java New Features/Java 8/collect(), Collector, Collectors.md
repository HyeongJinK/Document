# collect(), Collector, Collectors

## collect()는 Collector를 매개변수로 하는 스트림의 최종연산

```java
Object collect(Collector collector) // Collector를 구현한 클래스의 객체를 매개변수로
Object collect(Supplier supplier, BiConsumer accumulator, BiConsumer combiner)
```

## Collector는 collect에서 필요한 메서드를 정의해 놓은 인터페이스

```java
public interface Collector<T, A, R> { // T(요소)를 A에 누적한 다음, 결과를 R로 변환해서 반환
	Supplier<A> supplier(); // StringBuilder::new 누적할 곳
	BiConsumer<A, T> accumulator(); // (sb, s) -> sb.append(s) 누적방법
	BinaryOperator<A> combiner(); // (sb1, sb2) -> sb1.append(sb2) 결합방법(병렬)
	Function<A, R> finisher(); // sb -> sb.toString() 최종변환
	Set<Characteristics> characteristics(); // 컬렉터의 특성이 담긴 Set을 반환 ...
}
```

## Collectors클래스는 다양한 기능의 Collector를 구현한 클래스를 제공

* 변환 – mapping(), toList(), toSet(), toMap(), toCollection(), …
* 통계 – counting(), summingInt(), averagingInt(), maxBy(), minBy(), summarizingInt(), 
* 문자열 결합 – joining()
* 리듀싱 – reducing()
* 그룹화와 분할 – groupingBy(), partitioningBy(), collectingAndThen()


### ''스트림을 컬렉션으로 변환 – toList(), toSet(), toMap(), toCollection()''

```java
List<String> names = stuStream.map(Student::getName) // Stream<Student>→Stream<String>
	.collect(Collectors.toList()); // Stream<String>→List<String>
ArrayList<String> list = names.stream()
	.collect(Collectors.toCollection(ArrayList::new)); // Stream<String>→ArrayList<String>
Map<String,Person> map = personStream
	.collect(Collectors.toMap(p->p.getRegId(), p->p));// Stream<Person>→Map<String,Person>
```

### ''스트림의 통계정보를 제공 – counting(), summingInt(), maxBy(), minBy()...''

```java
stuStream.count();
stuStream.collect(counting()); // Collectors.counting()

stuStream.mapToInt(Student::getTotalScore).sum(); // IntStream의 sum()
stuStream.collect(summingInt(Student::getTotalScore));

OptionalInt topScore = studentStream.mapToInt(Student::getTotalScore).max();
Optional<Student> topStudent = stuStream
	.max(Comparator.comparingInt(Student::getTotalScore));
Optional<Student> topStudent = stuStream
	.collect(maxBy(Comparator.comparingInt(Student::getTotalScore)));

```

### ''스트림을 리듀싱 – reducing()''

```java
Collector reducing(BinaryOperator<T> op)
Collector reducing(T identity, BinaryOperator<T> op)
Collector reducing(U identity, Function<T,U> mapper, BinaryOperator<U> op) // map+reduce
```

```java
IntStream intStream = new Random().ints(1,46).distinct().limit(6);
OptionalInt max = intStream.reduce(Integer::max);  // 랜덤은 뽑은 수중 가장 큰 수
Optional<Integer> max = intStream.boxed().collect(reducing(Integer::max));

long sum = intStream.reduce(0, (a,b) -> a + b);
long sum = intStream.boxed().collect(reducing(0, (a,b)-> a + b));

int grandTotal = stuStream.map(Student::getTotalScore).reduce(0, Integer::sum);
int grandTotal = stuStream.collect(reducing(0, Student::getTotalScore, Integer::sum));
```

### ''문자열 스트림의 요소를 모두 연결 – joining ()''

```java
String studentNames = stuStream.map(Student::getName).collect(joining());
String studentNames = stuStream.map(Student::getName).collect(joining(",")); // 구분자
String studentNames = stuStream.map(Student::getName).collect(joining(",", "[", "]"));
String studentInfo = stuStream.collect(joining(",")); // Student의 toString()으로 결합
```


### ''스트림의 요소를 2분할 – partitioningBy()''

```java
Collector partitioningBy(Predicate predicate)
Collector partitioningBy(Predicate predicate, Collector downstream)
```
```java
Map<Boolean, List<Student>> maleBYfemale= stuStream
	.collect(partitioningBy(Student::isMale)); // 학생들을 성별로 분할
List<Student> maleStudent = maleBYfemale.get(true); // Map에서 남학생 목록을 얻는다.
List<Student> femaleStudent = maleBYfemale.get(false); // Map에서 여학생 목록을 얻는다.

stuStream	.collect(partitioningBy(Student::isMale, counting()));  // 남여를 구분하고 통계를 구한다.
```

### ''스트림의 요소를 그룹화 – groupingBy()''

```java
Collector groupingBy(Function classifier)
Collector groupingBy(Function classifier, Collector downstream)
Collector groupingBy(Function classifier, Supplier mapFactory, Collector downstream)
```

```java
Map<Integer, List<Student>> stuByBan = stuStream // 학생을 반별로 그룹화
	.collect(groupingBy(Student::getBan, toList())); // toList() 생략가능

Map<Integer, Map<Integer, List<Student>>> stuByHakAndBan = stuStream // 다중 그룹화
	.collect(groupingBy(Student::getHak, // 1. 학년별 그룹화
			groupingBy(Student::getBan) // 2. 반별 그룹화
));
```