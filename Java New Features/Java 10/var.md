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

* 지역변수로 제한된다.
* 이 변수는 인스턴스 및 정적 변수와 비교하여 중간 값을 저장하고 수명이 가장 짧습니다.

```java
public class Person { 
    { 
        var name = "Aqua Blue";         // instance initializer block 
    } 
 
    static { 
        var anotherLocalVar = 19876;    // static initializer block 
    } 
 
    Person() { 
        var ctr = 10;                   // constructor 
        for (var loopCtr = 0; loopCtr < 10; ++loopCtr) {   // loop -                                                            
                                                           // for
            switch(loopCtr) { 
                case 7 :{ 
                    var probability = ctr / loopCtr;       // switch 
                    System.out.println(probability); 
                    break; 
                } 
            } 
        } 
    } 
 
    public String readFile() throws IOException { 
        var filePath = "data.txt"; 
        // try with resources
        try (var reader = new BufferedReader(new FileReader(filePath))) {    
            return reader.readLine(); 
        } 
    } 
} 
```