### 스트림 축소

* 주어진 사이즈 이하의 크기를 갖는 새로운 스트림을 반환하는  limit(n) 메서드

### 요소 건너뛰기

* 처음 n개 요소를 제외한 스트림을 반환하는  skip(n) 메서드

```java
List<String> names = menu.stream()
		.skip(2)  // 2개를 건너 뛴다.
		.limit(3)  //3개만 출력한다.
		.collect(Collectors.toList());
```