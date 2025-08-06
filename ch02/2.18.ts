// 2.18 콜백 함수의 매개변수는 생략 가능하다.

() => {

    // 문맥적 추론
    () => {
        function example(callback: (error: Error, result: string) => void) {}
        example((e, r) => {});
        example(() => {});
        example(() => true)
    }
}