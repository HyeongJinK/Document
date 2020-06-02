```java
static void period() {	//LocalDate에서 사용
    Period tenDays = Period.ofDays(10);
    System.out.println(tenDays.getDays()); //10

    Period period = Period.of(1, 2, 3);
    System.out.println(period.getYears());   //1
    System.out.println(period.getMonths());  //2
    System.out.println(period.getDays());    //3

    
    LocalDate oldDate = LocalDate.of(2015, Month.JANUARY, 1);
    LocalDate newDate = LocalDate.of(2017, Month.FEBRUARY, 10);

    System.out.println(oldDate);
    System.out.println(newDate);

    // check period between dates
    Period period2 = Period.between(oldDate, newDate);

    System.out.println(period2.getYears());		//2
    System.out.println(period2.getMonths());	//1
    System.out.println(period2.getDays());		//9
}
```