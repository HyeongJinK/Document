## and(), or(), negate()로 두 Predicate를 하나로 합성할 수 있다.

```java
Predicate<Integer> p = i -> i < 10;
Predicate<Integer> q = i -> i < 20;
Predicate<Integer> r = i -> i%2 == 0;

Predicate<Integer> notP = p.negate(); // i >= 10
Predicate<Integer> all = notP.and(q).or(r); // 10 <= i && i < 20 || i%2==0
Predicate<Integer> all2 = notP.and(q.or(r)); // 10 <= i && (i < 20 || i%2==0)

System.out.println(notP.test(10));//true
System.out.println(all.test(2)); // true
System.out.println(all2.test(2)); // false
```