* parallelStream() : 병렬 스트림 생성
* parallel() : 병렬 스트림으로 변환
* sequential() : 순차 스트림으로 변환

## 병렬 스트림 생성

* parallelStream() 메서드로 생성할 수 있다.
* Stream클래스에서 parallel() 메서드를 호출해서 병렬스트림으로 변환 할 수 있다.
* sequential() 메서드를 호출해서 다시 순차스트림으로 변환 할 수 있으며 스트림 연산을 순차 혹은 병렬 등으로 따로 연산을 할 수 있다.

```java
List<Integer> stream = new ArrayList<Integer>();
stream.parallelStream(); //병렬스트림으로 생성
```

```java
stream.stream()
	.filter(s -> true)    // 순차스트림으로 filter연산
	.parallel()
	.map( s -> s+1 ); // 병렬스트림으로 map연산
```

## 병렬 스트림 속도

&nbsp;&nbsp;1부터 10,000,000까지 더하는 속도를 측정해보자.

* 병렬 스트림을 만들 때 박싱, 언박싱을 고려해야 한다.
* 작은 연산 일 경우에는 병렬 연산 시 작업을 나누고 합치는 연산이 더 걸릴 수 있다.

### 전통적인 for문

* for 자체가 저수준으로 최적화를 수행하기 때문에 빠른 속도로 연산된다.

```java
public static long forSum(long n) {
	return Stream.iterate(1L, i -> i + 1).limit(n).reduce(Long::sum).get();
}

=> for 속도 - 0번째: 10ms 1번째: 5ms 2번째: 7ms 3번째: 6ms 4번째: 6ms 
```

## 순차스트림

* 범용적인  Stream을 사용하면 long, Long 사이의 박싱, 언박싱 연산이 속도를 느리게 한다.

```java
public static long sequentialSum(long n) {
	return Stream.iterate(1L, i -> i + 1).limit(n).reduce(Long::sum).get();
}

=> 순차 스트림 - 속도 0번째: 165ms 1번째: 143ms 2번째: 121ms 3번째: 120ms 4번째: 104ms
```

## 병렬 스트림

* iterate 메서드는 병렬처리 시 작업을 나누는 연산을 어렵게 한다.

```java
public static long parallelSum(long n) {
	return Stream.iterate(1L, i -> i + 1).limit(n).parallel().reduce(Long::sum).get();
}

=> 병렬 스트림 속도 - 0번째: 1857ms 1번째: 1406ms 2번째: 1348ms 3번째: 289ms 4번째: 308ms
```

## 자료형에 맞는 순차스트림

* LongStream 을 사용하여 박싱 언박싱 문제를 해결했다.

```java
public static long rangeSum(long n) {
	return LongStream.rangeClosed(1, n).reduce(Long::sum).getAsLong();
}

=> LongStream 속도 - 0번째: 11ms 1번째: 22ms 2번째: 18ms 3번째: 18ms 4번째: 19ms
```

## 자료형에 맞는 병렬스트림

* iterate 메서드를 사용한 무한수가 아닌 rangeClosed을 사용한 유한수이기에 작업을 나누기 용이하다.

```java
public static long parallelRangeSum(long n) {
	return LongStream.rangeClosed(1, n).parallel().reduce(Long::sum).getAsLong();
}

=> LongStream 병렬 속도 - 0번째: 14ms 1번째: 4ms 2번째: 4ms 3번째: 4ms 4번째: 5ms
```

## 병렬 스트림의 문제

* 병렬 스트림을 사용 시 공유되는 값이 있고 그 값을 바꾸는 연산이 있을 경우 문제가 생길 수 있다.

```java
public static class Cal {
	private long total = 0;	//공유되는 값

	public void add(long value) {
		total += value;
	}
}

public static void test(long n) {
	Cal cal= new Cal();
	Cal cal2= new Cal();
	LongStream.rangeClosed(1, n).forEach(cal::add);		//순차연산
	LongStream.rangeClosed(1, n).parallel().forEach(cal2::add); //병렬연산
	
	System.out.println("cal: "+ cal.total + " cal2: "+ cal2.total);
}

=> cal: 50000005000000 cal2: 23847123141985
```

## 병렬 스트림의 올바른 사용법

* 적절한 벤치마크로 직접 성능을 측정하는 것이 바람직하다.
* 자동박싱과 언박싱은 성능을 크게 저하시킬 수 있다.
* limit, findFirst 처럼 요소의 순서에 의존하는 연산을 병렬 스트림에서 수행하려면 비싼 비용을 치러야 한다.
* 소량의 데이터에서는 병렬 스트림이 도움 되지 않는 다.
* 스트림을 구성하는 자료구조가 적절한지 확인하라. ArrayList는 LinkedList보다 효율적으로 분할할 수 있다.

|소스|분해성|
|-|-|
|ArrayList|훌륭함|
|LinkedList|나쯤|
|IntStream.range|훌륭함|
|Stream.iterate|나쁨|
|HashSet|좋음|
|TreeSet|좋음|