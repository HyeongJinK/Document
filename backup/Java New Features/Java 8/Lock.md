* 공유 변수가 하나의 스레드에서만 계산 될 수 있게 임계영역을 설정한다.
* lock()을 호출하여 임계영역을 설정한다. 해당 영역이 설정되면 ullock()을 호출하기 전까지 다른 스레드에서 접근이 불가능하다.

```java
public static class LockCal {
	Lock lock = new ReentrantLock();
	private long total = 0;	//공유되는 값

	public void add(long value) {
		//Lock lock = new ReentrantLock();
		lock.lock();
		total += value;
		lock.unlock();
	}
}

LongStream.rangeClosed(1, n).parallel().forEach(cal4::add); //Lock연산
=> cal4: 50000005000000
```