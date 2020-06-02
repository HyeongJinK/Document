```java
static void localTimeInit () {
	LocalTime localtime1 = LocalTime.of(1, 2);
	System.out.println(localtime1);	// 01:02
	
	LocalTime localtime2 = LocalTime.of(1, 2, 3);
	System.out.println(localtime2);	// 01:02:03
	
	LocalTime localtime3 = LocalTime.of(1, 2, 3, 4);
	System.out.println(localtime3);	// 01:02:03.000000004
}

static void localTimeAddAndMinus () {
	LocalTime localtime1 = LocalTime.of(1, 2);
	System.out.println(localtime1);	// 01:02
	
	System.out.println(localtime1.plusHours(1));	// 02:02
	System.out.println(localtime1.plusMinutes(2));	// 01:04
	System.out.println(localtime1.plusSeconds(3));	// 01:02:03
	System.out.println(localtime1.plusNanos(4));	// 01:02:00.000000004
	
	System.out.println(localtime1.minusMinutes(1));	//01:01
}
```