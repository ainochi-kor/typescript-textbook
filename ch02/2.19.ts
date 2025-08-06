// 2.19 공변성과 반공병성을 알아야 함수끼리 대입할 수 있다.

/**
 * 공변성: A -> B 일 때, T<A> -> T<B>인 경우
 * 반공변성: A -> B 일 때, T<B> -> T<A>인 경우
 * 이변성: A -> B 일 때, T<A> -> T<B>와 T<B> -> T<A>인 경우
 * 무공변성: A -> B 일 때, T<A>와 T<B>가 서로 대입할 수 없는 경우
 *
 * strictFunctionTypes 옵션을 사용하면 함수의 매개변수에 대한 공변성과 반공변성을 적용할 수 있다.
 */

() => {
    () => {
        function a(x: string): number {
            return 0;
        }
        type B = (x:string) => number | string;
        let b: B = a;
    }

    // 반환값에 대해서는 항상 공변성을 가진다.
    () => {
        function a(x: string): number | string {
            return 0;
        }
        type B = (x:string) => number;
        // let b: B = a;
        // Type '(x: string) => string | number' is not assignable to type 'B'.
        // Type 'string | number' is not assignable to type 'number'.
        // Type 'string' is not assignable to type 'number'.
    }

    // 매개변수에 대해서는 항상 반공변성을 가진다.
    () => {
        function a(x: string | number): number {
            return 0;
        }
        type B = (x:string) => number;
        let b: B = a;
    }

    // 그 반대는 불가능하다
    () => {
        function a(x: string): number {
            return 0;
        }
        type B = (x:string | number) => number;
        // let b: B = a;
        // Type '(x: string) => number' is not assignable to type 'B'.
        // Types of parameters 'x' and 'x' are incompatible.
        // Type 'string | number' is not assignable to type 'string'.
        // Type 'number' is not assignable to type 'string'.ts(2322)
    }

    () => {
        interface SayMethod {
            say(a: string | number): string
        }
        interface SayFunction {
            say: (a: string | number) => string
        }
        interface SayCall {
            say: {
                (a: string | number): string
            }
        }
        const sayFunc = (a: string) => 'hello'
        const MyAddingMethod: SayMethod = {
            say: sayFunc // 이변성
        }

        // const MyAddingFunction: SayFunction = {
        //     say: sayFunc // 반공변성
        //     // Type '(a: string) => string' is not assignable to type '(a: string | number) => string'.
        //     // Types of parameters 'a' and 'a' are incompatible.
        //     // Type 'string | number' is not assignable to type 'string'.
        //     // Type 'number' is not assignable to type 'string'.ts(2322)
        //     // 2.19.ts(60, 13): The expected type comes from property 'say' which is declared here on type 'SayFunction'
        // }

        // const MyAddingCall: SayCall = {
        //     say: sayFunc 
        // }
    }
}
