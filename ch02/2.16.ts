// 2.16 함수와 메서드를 타이핑하자


() => {
    () => {
        function example(a: string, b?: number, c = false) {}
        example('hi', 123, true);
        example('hi', 123);
        example('hi');
    }

    () => {
        function example1(a:string, ...b: number[]) {}
        example1('hi', 1,2,3,4)
        // A rest parameter must be last in a parameter list.ts(1014)
        // function example2(...a: string[], b: number)
    }

    () => {
        function example3(...args: [number, string, boolean]){}
        example3(1, '2', false)

        function example4(...args: [a:number, b:string, c: boolean]) {}
    }

    () => {
        // 'string' is declared but its value is never read.ts(6133)
        // Binding element 'string' implicitly has an 'any' type.ts(7031)
        // function destructing({prop: {nested: string}}){}

        function destructing({prop: {nested}}: {prop: {nested: string}}){}
        destructing({prop: {nested: 'hi'}})
    }

    () => {
        type Animal = {
            age: number;
            type: 'dog'
        };

        const person = {
            name: 'zero',
            age: 28,
            sayName() {
                this;
                this.name;
            },
            sayAge(this: Animal) {
                this;
                this.type
            }
        }
    }

    () => {
        type Person = {
            name: string;
            age: number;
            married: boolean
        }
        interface PersonConstructor {
            new (name: string, age: number, married: boolean): Person
        }

        const Person = function (this: Person, name: string, age: number, married: boolean) {
            this.name = name;
            this.age = age;
            this.married = married
        } as unknown as PersonConstructor;

        Person.prototype.sayName = function(this: Person) {
            console.log(this.name)
        }

        const zero = new Person('zero', 28, false)
    }

    () => {
        class Person {
            name: string;
            age: number;
            married: boolean;
            constructor (name: string, age: number, married: boolean) {
                this.name = name;
                this.age = age;
                this.married = married
            }
            sayName() {
                console.log(this.name)
            }
        }

        const zero = new Person('zero', 28, false)
    }
}