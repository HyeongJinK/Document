| 메서드 | 설명 |
|-|-|
|>| 반복하면서 작업수행 |h
|forEach()|병렬스트림 시 순서가 보장되지 않음|
|forEachOrdered()|순서대로 실행된다.|
|>| 배열로 변환 |h
|toArray()|Object 타입의 배열로 리턴|
|toArray(IntFunction&lt;A[]> generator)|A타입의 배열로 리턴|
|>| 조건 검사 |h
|boolean allMatch(Predicate predicate)|모든 요소가 조건을 만족시키면 true|
|boolean anyMatch(Predicate predicate)|한 요소라도 조건을 만족시키면 true|
|boolean noneMatch(Predicate predicate)|모든 요소가 조건을 만족시키지 않으면 true|
|>| 조건에 일치하는 요소 찾기 |h
|Optional findFirst()|첫 번째 요소를 반환. 순차 스트림에 사용|
|Optional findAny()|아무거나 하나를 반환. 병렬 스트림에 사용|
|>| 통계 Stream&lt;T> |h
|long count()|갯수|
|Optional&lt;T> max(Comparator<? super T> comparator)|최대값|
|Optional&lt;T> min(Comparator<? super T> comparator)|최소값|
|>| 숫자형 스트림 통계 IntStream |h
|long count()|갯수|
|Int sum()|합계|
|OptionalDouble average()|평균|
|OptionalInt max()|최대값|
|OptionalInt min()|최소값|

### 반복하면서 작업수행

```java
Stream<Integer> i = Stream.of(1,2,3,4,5);
//i.forEach(System.out::print);  //=>12345
i.parallel().forEach(System.out::print);  //=>35241
```

### 배열로 변환

```java
Student[] stuNames = studentStream.toArray(Student[]::new); // 성공
Student[] stuNames = studentStream.toArray(); // 에러.
Object[] stuNames = studentStream.toArray(); // 성공
```

### 조건 검사

```java
boolean hasFailedStu = stuStream.anyMatch(s-> s.getScore()<=100);  //=> 100점보다 낮을 경우 true 리턴
```

### 조건에 맞는 요소 반환

```java
Optional result = stuStream.filter(s-> s.getScore() <= 100).findFirst(); //=> 조건에 맞는 요소 첫번째 리턴
Optional result = parallelStream.filter(s-> s.getScore() <= 100).findAny(); //=> 조건에 맞는 요소 아무거나 리턴
```