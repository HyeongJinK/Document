## Stream의 중간 연산자

<table>
    <thead>
        <tr>
            <th>메서드</th>
            <th>설명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan=2><center>자르기</center></th>
        </tr>
        <tr>
            <td>IntStream skip(long n)</td>
            <td>매개변수의 갯수 만큼 건너뛰기</td>
        </tr>
        <tr>
            <td>IntStream limit(long maxSize)</td>
            <td>maxSize만큼 출력하기</td>
        </tr>
        <tr>
            <th colspan=2><center>필터 - 조건에 맞는 요소 찾아내기</center></th>
        </tr>
        <tr>
            <td>Stream&lt;T&gt; filter(Predicate<? super T> predicate)</td>
            <td>predicate 조건에 맞는 요소만 추출</td>
        </tr>
        <tr>
            <td>Stream&lt;T&gt; distinct()</td>
            <td>고유요소 필터링 중복제거</td>
        </tr>
        <tr>
            <th colspan=2><center>정렬</center></th>
        </tr>
        <tr>
            <td>Stream&lt;T&gt; sorted()</td>
            <td>정렬</td>
        </tr>
        <tr>
            <td>Stream&lt;T&gt; sorted(Comparator<? super T> comparator)</td>
            <td>지정된 Comparator로 정렬</td>
        </tr>
        <tr>
            <th colspan=2><center>매핑 - 요소 변환</center></th>
        </tr>
        <tr>
            <td>Stream&lt;R&gt; map(Function<? super T, ? extends R> mapper)</td>
            <td>요소 각각의 Function적용</td>
        </tr>
        <tr>
            <td>Stream&lt;R&gt; flatMap(Function<? super T, ? extends Stream<? extends R>)</td>
            <td>스트림의 스트림을 스트림으로 변환</td>
        </tr>
        <tr>
            <td colspan=2><center>기타</center></td>
        </tr>
        <tr>
            <td>Stream&lt;T&gt; peek(Consumer<? super T> action)</td>
            <td>중간연산 미리보기</td>
        </tr>
    </tbody>
</table>
