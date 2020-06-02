## andThen, compose

```java
Function<String, Integer> f = (s) -> Integer.parseInt(s);
Function<Integer, String> f2 = (i) -> i.toString() + "dddd";
Function<String, String> result = f.andThen(f2); // f + f2 → result
Function<String, String> result2 = f2.compose(f); // f + f2 → result

System.out.println(result.apply("99")); //99dddd
System.out.println(result2.apply("99")); //99dddd
```