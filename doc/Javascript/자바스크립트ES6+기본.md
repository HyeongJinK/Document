* Number.MAX_SAFE_INTEGER
* Number.MIN_SAFE_INTEGER
* Number.EPSILON: 아주 작은 값
* 0B111: 2진수
* 0o111: 8진수
* isNan, Number.isNan
* isInteger(): 정수
* isSafeInteger(): 자바스크립트가 표현하는 범위내에 정수인지
* isFinite: 유한값인지?
* Surrogate Pair  \u{1f418}
  ```javascript
  const pair = "\uD83D\uDC18";
  ```
  * https://unicode-table.com
* String.formCodePoint: 유니코드의 코드 포인트에 해다이하는 문자 반환
* String.fromCharCode(): Surrogate pair로 작성
* String.codePointAt(2): 파라미터에 작성한 인덱스 번째 문자를 유니코드 코드 포인트로 변환하여 반환
* startsWith()
* endsWith()
* repeat()
* includes()
* raw()
* String.padStart
  * "ABC".(10, "123") = 1231231ABC
  * "ABC".(6, "123456") = 123ABC
* String.padEnd()
* String.trimStart(): 문자열 앞의 공백 삭제
* String.trimEnd()
### Object
* is(): 두개의 파라미터 값과 타입 두개를 비교
  * Objeect.is(10, "10") : false
  * 값과 타입 모두 비교 ===
  * 값만 비교 ==
  * NaN === Nan : false
  * Object.is(NaN, NaN) : true
  * 0 === -0: true
  * Object.is(0, -0): false
* assign(): 두번째 파라미터의 오브젝트를 복사하여 첫 번째 파리미터의 오브젝트에 복사하고 첫번째 파라미터를 반환
  * Object.assign(a, b)
* enumerable: [true|false]: 열거 가능한지 여부
* entries(): [key, value] 형태로 변환하여 리번
* values(): 값만 반환 