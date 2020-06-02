```java
static void localDateTimeInit() {
	LocalDate localdate = LocalDate.of(2017, 2, 1);
	LocalTime localtime = LocalTime.of(1, 2);
	
	LocalDateTime localDateTime = LocalDateTime.of(localdate, localtime);
	System.out.println(localDateTime);	// 2017-02-01T01:02
}
```