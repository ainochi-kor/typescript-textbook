() => {
  interface Person {
    name: string;
    age: number;
    married: boolean;
  }

  const person: Person = {
    name: "zero",
    age: 28,
    married: false,
  };

  const person2: Person = {
    name: "zero",
    age: 32,
    married: true,
  };

  interface Func {
    (a: number, b: number): number;
  }

  const add: Func = (a: number, b: number): number => a + b;

  interface Arr {
    [index: number]: string;
    length: number;
  }

  const arr: Arr = ["hello", "world"];

  interface NoProp {}

  const obj: NoProp = {
    why: "에러 안 남",
  };
  const what: NoProp = "이게 되네?";
  // const who: NoProp = null; //type 'null' is not assignable to type 'NoProp'

  () => {
    // 인터페이스 선언 병합
    interface Merge {
      one: string;
    }
    interface Merge {
      two: string;
    }
    const example: Merge = {
      one: "1",
      two: "2",
    };
  };

  () => {
    // 네임스페이스
    // namespace Example {
    //   interface Inner {
    //     test: string;
    //   }
    //   type test2 = number;
    // }

    // const ex1: Example.Inner = {
    //   test: "test",
    // }
    // Namespace 'Example' has no exported member 'Inner'.

    // const ex2: Example.test2 = 1;
    // Namespace 'Example' has no exported member 'test2'.
  }
};
