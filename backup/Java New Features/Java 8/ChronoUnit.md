```java
static void chronoUnit() {
	LocalDateTime oldDate = LocalDateTime.of(1987, Month.AUGUST, 4, 14, 24, 34);
    LocalDateTime newDate = LocalDateTime.of(2017, Month.FEBRUARY, 9, 10, 11, 12);

    System.out.println(oldDate);
    System.out.println(newDate);

    long years = ChronoUnit.YEARS.between(oldDate, newDate);
    long months = ChronoUnit.MONTHS.between(oldDate, newDate);
    long weeks = ChronoUnit.WEEKS.between(oldDate, newDate);
    long days = ChronoUnit.DAYS.between(oldDate, newDate);
    long hours = ChronoUnit.HOURS.between(oldDate, newDate);
    long minutes = ChronoUnit.MINUTES.between(oldDate, newDate);
    long seconds = ChronoUnit.SECONDS.between(oldDate, newDate);
    long milis = ChronoUnit.MILLIS.between(oldDate, newDate);
    long nano = ChronoUnit.NANOS.between(oldDate, newDate);

    System.out.println(years + " years");
    System.out.println(months + " months");
    System.out.println(weeks + " weeks");
    System.out.println(days + " days");
    System.out.println(hours + " hours");
    System.out.println(minutes + " minutes");
    System.out.println(seconds + " seconds");
    System.out.println(milis + " milis");
    System.out.println(nano + " nano");
    /*
     	1987-08-04T14:24:34
		2017-02-09T10:11:12
		29 years
		354 months
		1540 weeks
		10781 days
		258763 hours
		15525826 minutes
		931549598 seconds
		931549598000 milis
		931549598000000000 nano
     * */
}
```