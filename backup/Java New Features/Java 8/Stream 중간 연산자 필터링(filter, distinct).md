### 필터
* filter 변환은 새로운 스트림을 돌려주는 데 이 스트림은 특정 조건과 일치하는 요소로 구성된다.
* filter 메서드의 인자는 Predicate&lt;T>이다.


```java
menu.stream()
	.filter(Food::isVegetarian)	//채식요리인지
	.collect(toList);
```

### 고유 요소 필터링(중복 제거)
* distinct() 고유 요소로 이루어진 스트림을 반환한다. (hashCode, equals)

```java
Stream<Integer> st = Stream.of(1,2,3,3,3,4,5,5);
st.distinct().forEach(System.out::print);    //=>12345
```
