# try 리소스 개선사항

## java 7 이전

```java
BufferedReader br = null;
try {
	br = new BufferedReader(new FileReader("test.txt"));
	System.out.println(br.readLine());
} catch (IOException e) {
	e.printStackTrace();
} finally {
	try {
		if (br != null)
			br.close();
	} catch (IOException ex) {
		ex.printStackTrace();
	}
}
```

## java 7

* 예외가 발생했을 경우 close 메소드를 자동으로 호출해준다. 즉 finally 블록문을 작성하지 않아도 된다. 자동 리소스 해제
* null 체크 개선

```java
BufferedReader br = new BufferedReader(new FileReader("test.txt"));
try (BufferedReader br2 = br) {
	System.out.println(br2.readLine());
} catch (IOException e) {
	e.printStackTrace();
}
```

## java 9

* 외부에서 선언된 리소스를  try문 안에서 사용할 수 있게 개선했다.
```java
BufferedReader br = new BufferedReader(new FileReader("test.txt"));
try (br) {
	System.out.println(br.readLine());
} catch (IOException e) {
	e.printStackTrace();
}
```