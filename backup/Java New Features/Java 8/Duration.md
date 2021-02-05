```java
static void duration () {	// LocalDateTime을 사용, 시간의 차이
    Duration oneHours = Duration.ofHours(1);
    System.out.println(oneHours.getSeconds());	//3600

    Duration oneHours2 = Duration.of(1, ChronoUnit.HOURS);
    System.out.println(oneHours2.getSeconds());	//3600

    Duration twoHours = Duration.ofHours(2);
    System.out.println(twoHours.toMinutes());	//120

    
    LocalDateTime oldDate = LocalDateTime.of(2015, Month.JANUARY, 1, 1, 1, 1);
    LocalDateTime newDate = LocalDateTime.of(2017, Month.FEBRUARY, 20, 10, 10, 10);

    System.out.println(oldDate);
    System.out.println(newDate);

    Duration duration = Duration.between(oldDate, newDate);
    
    System.out.println(duration.toDays());	//781
    System.out.println(duration.toHours());	//18753
}
```