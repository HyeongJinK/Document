## default 메소드

- default 특징
    - 인터페이스 안에서 구현된다.
    - 해당 인터페이스를 구현하는 클래스에서는 오버라이딩 하지 않아도 된다.
    - 구현클래스에서 default 메서드를 오버라이딩 구현 했을 경우 해당 클래스의 메서드가 호출된다.
        - 클래스에서 구현한 메서드 -> 하위 인터페이스 -> 상위 인터페이스
    - 다이아몬드(C++) 충돌 시 명시적으로 오버라이딩 해주어야 한다.

```
publicinterfaceBBBextendsAAAdefaultvoidbpublicinterfaceCCCextendsAAApublicclassDDDimplementsBBBCCCpublicvoida// a 메서드는 구현해야 하지만 b 메서드는 구현하지 않아도 된다.publicclassMMMpublicstaticvoidmainnew// BBB 하위 인터페이스에서 구현한 메서드가 호출된다.
```

**다이아 몬드 충돌**

```
publicinterfaceCCCextendsAAAdefaultvoidb// CCC에서 b메서드를 구현
```

```
"Duplicate default methods named b with the parameters () and () are inherited from the types CCC and BBB"
```

**`public** **class** **DDD** **implements** **BBB**, **CCC** { @Override **public** **void** **a**() { } @Override **public** **void** **b**() { *//명시적으로 구현해주어야 한다.* BBB.**super**.b(); }
}`