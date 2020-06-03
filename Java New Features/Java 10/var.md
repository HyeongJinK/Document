# 타입추론

var 타입을 유추하는 로컬변수 타입이다.

### Java 10 이전

```java
String name = "HyungJin"; 
```

### Java 10

```java
var name = "HyungJin"; // 타입을 유추한다. String 
```

var 선언에서 값을 초기화해야 한다.

```java
var name;   // X uninitialized variable
var name = null;    // X variable assigned a null value 
```