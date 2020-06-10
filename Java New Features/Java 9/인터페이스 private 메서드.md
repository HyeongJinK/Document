## 인터페이스 private 메서드

인터페이스 안에서 private 메서드를 사용할 수 있게 되었다.

```java
public interface JavaNineInterfaces {
	private void test () {
		System.out.println("private method");
	}
	private static void test2() {
		System.out.println("static private method");
	}
	
	default void call() {
		test();
	}
	static void call2() {
		test2();
	}
}

public class InterfacesMain {

	public static void main(String[] args) {
		JavaNineInterfaces test = new JavaNineInterfaces() {};
		test.call();
		JavaNineInterfaces.call2();
	}
}
```