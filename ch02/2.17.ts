// 2.17 같은 이름의 함수를 여러 번 선언할 수 있다.
() => {
    () => {
        // 오버로딩
        function add(x: number, y: number): number
        function add(x: string, y: string): string
        function add(x: any, y: any) {
            return x + y;
        }
    }

    () => {
        function example(param: string): string
        function example(param: string | null): number
        function example(param: string |null): string | number {
            if(param) {
                return 'string'
            } else {
                return 123
            }
        }

        // const result: string
        const result = example('what')
    }

    () => {
        function example(param: string | null): number
        function example(param: string): string
        function example(param: string |null): string | number {
            if(param) {
                return 'string'
            } else {
                return 123
            }
        }

        // const result: number
        const result = example('what')
    }

    () => {
        interface Add {
            (x: number, y: number): number
            (x: string, y: string): string
        }

        const add:Add = (x: any, y: any) => x + y;
        add(1, 2)
        add('1', '2')
    }
    
    () => {
        type Add1 = (x: number, y:number) => number;
        type Add2 = (x: string, y:string) => string;
        type Add = Add1 & Add2;
        const add: Add = (x: any, y: any) => x + y;
        
        add(1, 2)
        add('1', '2')
    }


}