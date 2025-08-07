// 2.20 클래스는 값이면서 타입이다.

() => {
    () => {
        class Person {
            name: string;
            age: number;
            married: boolean;
            constructor(name: string, age: number, married: boolean) {
                this.name = name;
                this.age = age;
                this.married = married;
            }
        }
    }

    // 프로퍼티 타입 생략 가능
    () => {
        class Person {
            name;
            age;
            married;
            constructor(name: string, age: number, married: boolean) {
                this.name = name;
                this.age = age;
                this.married = married;
            }
        }
    }

    // 클래스 표현식
    () => {
        const Person = class {
            name;
            age;
            married;
            constructor(name: string, age: number, married: boolean) {
                this.name = name;
                this.age = age;
                this.married = married;
            }
        }
    }

    // 엄격하게
    () => {
        interface Human {
            name: string;
            age: number;
            married: boolean;
            sayName: () => void;
        }
        class Person implements Human {
            name: string;
            age: number;
            married: boolean;
            constructor(name: string, age: number, married: boolean) {
                this.name = name;
                this.age = age;
                this.married = married;
            }
            sayName() {
                console.log(this.name);
            }
        }
    }

    // private 수식어로 선언한 속성은 자손 클래스에서 같은 이름으로 선언할 수 없다.
    () => {
        class PrivateMember {
            private priv: string = "priv";
        }
        
        // class ChildPrivateMember extends PrivateMember {
            // private priv: string = 'priv'
        // }
        // Class 'ChildPrivateMember' incorrectly extends base class 'PrivateMember'.
        //  Types have separate declarations of a private property 'priv'.ts(2415)

        class PrivateField {
            #priv: string = "priv";
            sayPriv() {
                console.log(this.#priv)
            }
        }

        class ChildPrivateField extends PrivateField {
            #priv: string = 'priv'
        }
    }

    // implements 하는 인터페이스의 속성은 전부 public이어야 합니다.
    () => {
        interface Human {
            name: string;
            age: number;
            married: boolean;
        }

        class Person implements Human {
            name;
            // protected age;
            age;
            married;
            constructor(name: string, age: number, married: boolean) {
                this.name = name;
                this.age = age;
                this.married = married
            }
        }
        // Class 'Person' incorrectly implements interface 'Human'.
        // Property 'age' is protected in type 'Person' but public in type 'Human'.ts(2420)
    }

    () => {
        class Human {
            eat() {
                console.log("냠냠")
            }
            sleap() {
                console.log('쿨쿨')
            }
        }

        class Employee extends Human {
            work() {
                console.log("끙차")
            }
            override sleap(): void {
                console.log("에고고")
            }
        }
    }

    () => {
        class Person {
            name?: string;
            age?: number;
            married?: boolean;
            constructor();
            constructor(name: string, married: boolean);
            constructor(name:string, age: number, married: boolean);
            constructor(name?: string, age?:number | boolean, married?: boolean) {
                if(name) {
                    this.name = name;
                }

                if(typeof age === 'boolean') {
                    this.married = age;
                } else {
                    this.age = age
                }
                if(married) {
                    this.married = married
                }
            }
        }

        const person1 = new Person();
        const person2 = new Person('nero', true)
        const person3 = new Person('zero', 28, false)
    }

    () => {
        class Signature {
            [propName: string]: string | number | undefined
            static [propName: string]: boolean;
        }

        const sig = new Signature();
        sig.hello = 'world';
        Signature.isGood = true
    }

    class Person {
        age: number;
        married: boolean;
        constructor(age: number, married: boolean){
            this.age = age;
            this.married = married
        }

        sayAge() {
            console.log(this.age)
        }
        sayMarried(this: Person) {
            console.log(this.married)
        }

        thisCallback(callback:(this: this) => void) {
            callback.call(this)
        }
    }

    () => {
        class A {
            callbackWithThis(cb: (this: this) => void) {
                cb.call(this);
            }
            callbackWithoutThis(cb: () => void) {
                cb();
            }
            
        }
        new A().callbackWithThis(function () {
                this;
            })

            new A().callbackWithoutThis(function () {
                // this;
                //'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)
            })
    }

    // 인터페이스로 클래스 생성자를 타이핑할 수도 있습니다.
    () => {
        interface PersonConstructor {
            new (name: string, age: number): {
                name: string;
                age: number;
            };
        }

        class Person {
            name: string;
            age: number;
            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }
        }

        function createPerson(ctor: PersonConstructor,name: string, age: number): Person {
            return new ctor(name, age);
        }

        createPerson(Person, 'nero', 28);
    }

    // 인터페이스로 클래스 생성자를 타이핑할 수도 있습니다.
    () => {
        interface PersonInterface {
                name: string;
                age: number;
                married: boolean
        }

        function Person(this: PersonInterface, name: string, age:number, married: boolean) {
            this.name = name;
            this.age = age;
            this.married = married;
        }

        type PersonType = typeof Person & {
            new (name: string, age: number, married: boolean): PersonInterface
        }

        new (Person as PersonType)('nero', 28, true);
    }
}