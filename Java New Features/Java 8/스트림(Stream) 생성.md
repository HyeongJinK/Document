## 빈 스트림 생성
```java
Stream<String> em = Stream.empty();
```

## 컬렉션으로 부터 스트림 생성

```java
List<Integer> list = Arrays.asList(1,2,3);
Stream<Integer> is= list.stream();
```

## 배열로부터 스트림 생성

```java
Stream<String> ss= Stream.of("1", "2", "3");
```

## 특정 범위 스트림 생성

```java
IntStream is = IntStream.range(1, 3); // 1,2
IntStream is = IntStream.rangeClosed(1, 3); // 1,2,3
```

## 난수를 갖는 스트림

```java
IntStream it = new Random().ints();
it.limit(3).forEach(System.out::println);

it = new Random().ints(3);
it.forEach(System.out::println);
/*
-1091588953
207828833
368723646
1719863815
1209005146
-1323476456
*/

IntStream ints(int begin, int end) // 무한 스트림 
LongStream longs(long begin, long end)
DoubleStream doubles(double begin, double end)
IntStream ints(long streamSize, int begin, int end) // 유한 스트림 
LongStream longs(long streamSize, long begin, long end)
DoubleStream doubles(long streamSize, double begin, double end)
```


```
무한 스트림을 만드는 정적 메서드가 두 개가 있다. generate 메서드는 인자 없는 함수를 받는 다.
스트림 값이 필요할 때마다 지정한 함수를 호출하여 값을 만든 다.
상수 값의 스트림은 다음과 같이 얻는 다.
Stream.generate(() -> "test");
난수의 스트림
Stream.generate(Math::random);

iterate 메서는 '시드'값과 함수를 받아서 해당 함수를 이전 결과에 반복하여 적용한다.
Stream.iterate(BigInteger.ZERO, n->n.add(BigInteger.ONE));

```

```java
Stream<Integer> es = Stream.iterate(0, n->n+2); // 0,2,4,6, ...
Stream<Double> rs= Stream.generate(Math::random);
Stream<Integer> on = Stream.generate(()->1);
```