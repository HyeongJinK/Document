```java
public static class SyncCal {
	private long total = 0;	//공유되는 값

	public synchronized void add(long value) {
		total += value;
	}
}

LongStream.rangeClosed(1, n).parallel().forEach(cal5::add);

=> cal5: 50000005000000
```