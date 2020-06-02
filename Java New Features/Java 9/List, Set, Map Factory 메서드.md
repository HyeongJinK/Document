## 변경 불가능한 List, Map, Set 만들기

### 자바 8에서의 변경 불가능한 리스트 만들기

```java
List l = new ArrayList();    // 빈리스트
List constList = Collections.unmodifiableList(l);

List l2 = new ArrayList();    // 값이 있는 리스트
l2.add(1); l2.add(2); l2.add(3);
List constList2 = Collections.unmodifiableList(l2);
```

### 자바9에서 변경 불가능한 리스트

```java
List l = List.of();
l.add("add");	// 에러 변경 불가능한 리스트

List l2 = List.of(1, 2, 3);
```