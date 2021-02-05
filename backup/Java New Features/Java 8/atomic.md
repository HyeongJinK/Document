* Atomic[Integer|Boolean|Long....] 여러 스레드에서 공유된 리소스를 업데이트 할 때 스레드에 안전한 방식으로 일어나게 해준다.

```java
public static class AtomicCal {
	private AtomicLong total = new AtomicLong(0L);
	
	public void add(long value) {
		total.accumulateAndGet(value, Long::sum);
		//total.addAndGet(value);
	}
}

AtomicCal cal3 = new AtomicCal();
LongStream.rangeClosed(1, n).parallel().forEach(cal3::add); //병렬연산

=> cal3: 50000005000000
```

## 추가된 메서드(Long 기준)

* accumulateAndGet(long, LongBinaryOperatior)
* getAndAccumulate(long, LongBinaryOperator)
* updateAndGet(LongUnaryOperator)