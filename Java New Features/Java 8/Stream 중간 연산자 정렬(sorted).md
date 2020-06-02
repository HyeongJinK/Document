### 정렬

```java
Stream<Integer> so = Stream.of(1,2,8,10,3,4,6,5);
so.sorted().peek(System.out::print)  //=>123456810
.sorted(Comparator.naturalOrder()).peek(System.out::print)  //=>123456810  - 기본정렬
.sorted(Comparator.reverseOrder()).peek(System.out::print)  //=>108654321  - 역정렬
.sorted((a, b) -> a.compareTo(b)).forEach(System.out::print);  //=>123456810  - 람다식 사용
```