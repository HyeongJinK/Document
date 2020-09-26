## 프로퍼티 접근 - Setter

```java
List<MemberDto> result = queryFactory
 .select(Projections.bean(MemberDto.class,
 member.username,
 member.age))
 .from(member)
 .fetch();
```

## 필드 직접 접근

```java
List<MemberDto> result = queryFactory
 .select(Projections.fields(MemberDto.class,
 member.username,
 member.age))
 .from(member)
 .fetch();
```

## 별칭이 다를 때

```java
package study.querydsl.dto;
import lombok.Data;
@Data
public class UserDto {
 private String name;
 private int age;
}
List<UserDto> fetch = queryFactory
 .select(Projections.fields(UserDto.class,
 member.username.as("name"),
 ExpressionUtils.as(
 JPAExpressions
 .select(memberSub.age.max())
 .from(memberSub), "age")
 )
 ).from(member)
 .fetch();
```

## 프로퍼티나, 필드 접근 생성 방식에서 이름이 다를 때 해결 방안

```java
ExpressionUtils.as(source,alias) : 필드나, 서브 쿼리에 별칭 적용
username.as("memberName") : 필드에 별칭 적용
생성자 사용
List<MemberDto> result = queryFactory
 .select(Projections.constructor(MemberDto.class,
 member.username,
 member.age))
 .from(member)
 .fetch();
}
```

## 프로젝션과 결과 반환 - @QueryProjection

```java
// 생성자 + @QueryProjection
package study.querydsl.dto;
import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
@Data
public class MemberDto {
 private String username;
 private int age;
 public MemberDto() {
 }
 @QueryProjection
 public MemberDto(String username, int age) {
 this.username = username;
 this.age = age;
 }
}
// ./gradlew compileQuerydsl
```
QMemberDto 생성 확인

## @QueryProjection 활용

```java
List<MemberDto> result = queryFactory
 .select(new QMemberDto(member.username, member.age))
 .from(member)
 .fetch();
```

이 방법은 컴파일러로 타입을 체크할 수 있으므로 가장 안전한 방법이다. 다만 DTO에 QueryDSL 어노테
이션을 유지해야 하는 점과 DTO까지 Q 파일을 생성해야 하는 단점이 있다.

distinct

```java
List<String> result = queryFactory
 .select(member.username).distinct()
 .from(member)
 .fetch();
```
> 참고: distinct는 JPQL의 distinct와 같다.