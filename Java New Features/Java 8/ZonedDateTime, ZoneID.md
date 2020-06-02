```java
static void zoneld() {
	ZonedDateTime zoned = ZonedDateTime.of(2017,  1, 1, 1, 1, 0, 0, ZoneId.of("America/New_York"));
	ZonedDateTime zoned2 = ZonedDateTime.of(LocalDateTime.now(), ZoneId.of("America/New_York"));
	System.out.println(zoned2);
	
	System.out.println(Instant.now().atZone(ZoneId.of("America/New_York")));
}
```