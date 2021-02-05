## 출력
* 날짜를 출력 시 좀 더 보편적인 값으로 출력한다. 
** Sun Jan 01 00:00:00 KST 2017 ->  2017-01-01

```java
static void localDatePrint() {
	Date date = new Date();
	System.out.println(date); // Sun Jan 01 00:00:00 KST 2017
		
	LocalDate localdate = LocalDate.now();
	System.out.println(localdate);	// 2017-01-01
}
```

## 초기화

* 기존 Date를 초기화 할 경우 년도에는 1900년을 기준으로 이후 년도를 더한 값 넣고 월에는 -1을 한 월을 넣어야 했다.
* LocalDate에서는 좀 더 명시적으로 날짜를 초기화 할 수 있다.

```java
static void localDateInit() {
	Date date = new Date(117, 1, 1);	// 월이 1부터 시작한다.
	System.out.println(date);
	
	LocalDate localdate = LocalDate.of(2017, 2, 1);
	//LocalDate.of(2017, Month.FEBRUARY, 1);
	System.out.println(localdate);
}
```

## 연산

* 기존의 날짜 연산의 경우 Calendar 객체를 사용해야 했다.
* LocalDate에서는 plus(Days|Months|Weeks|Years)를 제공한다.

```java
static void localDateAdd() {
	Calendar cal = Calendar.getInstance();
	cal.set(2017, 1, 1);
	cal.add(Calendar.DATE, 10);
	System.out.println(cal.getTime()); // Sat Feb 11 10:30:01 KST 2017
	
	LocalDate localdate = LocalDate.of(2017, 2, 1);
	localdate.plusDays(10);
	System.out.println(localdate);	// 2017-02-01
	System.out.println(localdate.plusDays(10));	// 2017-02-11
}
```

## 기타 함수

```java
static void localDateMethod () {
	LocalDate localdate = LocalDate.of(2017, 2, 1);
	System.out.println(localdate.getDayOfMonth());	//1, 현재 달에서 몇일인지
	System.out.println(localdate.getDayOfYear());	//32, 현재 년도에서 몇번째 일인지
}
```