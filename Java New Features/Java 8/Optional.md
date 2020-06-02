값의 존재나 부재 여부를 표현하는 컨테이너 클래스
null은 쉽게 에러를 만들 수 있으므로 만들어 졌다.

| 메서드 | 설명 |
|-|-|
|boolean isPresent()|값을 포함하면 true, 없으면 false|
|void ifPresent(Consumer&lt;T> block)|값이 있으면 주어진 블록을 실행, 없으면 아무것도 하지 않는 다.|
|T get()|값이 존재하면 값을 반환하고 없으면 예외를 일으킨다.|
|T orElse(T)|옵션 값으로 래핑된 값이 없으면 T를 반환|
|T orElseGet(Supplier&lt;? extends T> other)|옵션 값으로 래핑된 값이 없으면 T를 반환|
|T orElseThrow(Supplier&lt;? extends X> exceptionSupplier)|null일 경우 예외 발생|
