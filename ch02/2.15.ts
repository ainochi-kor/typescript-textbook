() => {
    type A1 = string
    type B1 = A1 extends string ? number : boolean
    // B1 = number

    () => {
        interface X {
            x: number
        }

        interface XY {
            x: number;
            y: number;
        }

        interface YX extends X {
            y: number
        }

        type A = XY extends X ? string : number;
        // A = string

        type B = YX extends X ? string : number;
        // B = string 

        // 둘 다 대입이 가능하므로 true
    }

    () => {
        type Result = 'hi' extends string ? true : false
        // Result = true
        type Result2 = [1] extends [string] ? true : false
        // Result2 = false
    }

    () => {
        type Start = string | number;
        type New = Start extends string | number ? Start[] : never;

        let n: New = ['hi']
        n = [123]
    }

    () => {
        type ChooseArray<A> = A extends string ? string[] : never;
        type StringArray = ChooseArray<string>;
        // StringArray = string[]
        type NumberArray = ChooseArray<number>;
        // NumberArray = never
    }

    () => {
        type Result = never extends string ? true : false
        // Result = true
    }

    () => {
        type OmitByType<O, T> = {
            [K in keyof O as O[K] extends T ? never : K]: O[K]
        }

        type Result = OmitByType<{
            name: string;
            age: number;
            married: boolean;
            rich: boolean;
        }, boolean>

        // Result = {
        //     name: string;
        //     age: number;
        // }
    }

    () => {
        type ChooseArray<A> = A extends string ? string[] : A extends boolean ? boolean[] : never;
        type StringArray = ChooseArray<string>;
        // StringArray = string[]
        type BooleanArray = ChooseArray<boolean>;
        // BooleanArray = boolean[]
        type NumberArray = ChooseArray<number>;
        // NumberArray = never
    }

    () => {
        type A1 = string;
        type B1 = A1 extends string ? number : boolean;
        type B2 = {
            't': number;
            'f': boolean;
        }[A1 extends string ? 't' : 'f']
    }

    // 2.15.1 컨디셔널 타입 분배법칙
    () => {
        type Start = string | number;
        type Result = Start extends string ? Start[] : never;
        // Result = never

        type Result2<Key> = Key extends string ? Key[] : never;
        let n:Result2<Start> = ['hi']
        // let n: string[]
    }

    () => {
        type Start = string | number | boolean;
        type Result<Key> = Key extends string | boolean ? Key[] : never;
        let n: Result<Start> = ['hi'];
        n = [true]
    }

    () => {
        type IsString<T> = T extends string ? true : false;
        type Result = IsString<'hi' | 3>;
        // Result = boolean
    }

}