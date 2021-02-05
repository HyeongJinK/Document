### &nbsp;자바8에서 새로 List에 sort(), Collection stream() 메서드가 추가 되었다. 해당 메서드가 추가 되면서 해당 인터페이스를 구현한 클래스에서 해당 메서드를 구현해야하는 문제가 발생, 그 문제를 해결 하기 위해 새로 생긴 문법


<hr>

```java
public interface AAA {
    	void a();
    	default void b() { // default 메서드 인터페이스 안에서 구현한다.
        		System.out.println("AAA");
    	}
}
```

* default 특징
** 인터페이스 안에서 구현된다.
** 해당 인터페이스를 구현하는 클래스에서는 오버라이딩 하지 않아도 된다.
** 구현클래스에서 default 메서드를 오버라이딩 구현 했을 경우 해당 클래스의 메서드가 호출된다.
*** 클래스에서 구현한 메서드 -> 하위 인터페이스 -> 상위 인터페이스
** 다이아몬드(C++) 충돌 시  명시적으로 오버라이딩 해주어야 한다.

```java
public interface BBB extends AAA {
	@Override
	default void b() {
		System.out.println("BBB");
	}
}

public interface CCC extends AAA{}

public class DDD implements BBB, CCC {
	@Override
	public void a() {  // a 메서드는 구현해야 하지만 b 메서드는 구현하지 않아도 된다.
	}
}

public class MMM {
	public static void main(String[] args) {
		DDD d = new DDD();
		d.b();  // BBB 하위 인터페이스에서 구현한 메서드가 호출된다.
	}
}
```

## 다이아 몬드 충돌

```java
public interface CCC extends AAA{
	default void b() {  // CCC에서 b메서드를 구현
		System.out.println("CCC");
	}
}
```
```java
"Duplicate default methods named b with the parameters () and () are inherited from the types CCC and BBB"
```

```java
public class DDD implements BBB, CCC {
	@Override
	public void a() {
	}

	@Override
	public void b() {  //명시적으로 구현해주어야 한다.
		BBB.super.b();
	}
}
```