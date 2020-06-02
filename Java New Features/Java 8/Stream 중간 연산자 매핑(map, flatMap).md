### 요소 변환 - 객체에서 특정 데이터를 선택하는 작업
* map, flatMap 메서드가 있다.
* map 메서드를 연결할 수 있다.

```java
menu.stream()
	.filter(d -> d.getCalories() > 300)
	.map(Food::getName)   // 이름을 리턴한다.
	.map(String::length)  // 이름의 길이를 리턴한다.
	.collect(Collectors.toList())
);

Stream<String[]> sa = Stream.of(new String[]{"abc", "def", "ghi" }
, new String[]{"123", "456", "789"});

sa.flatMap(Arrays::stream).forEach(System.out::println);  //Stream<String>
//=>abc def ghi 123 456 789
```


