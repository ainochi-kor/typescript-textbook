() => {
  // 2.13 객체 간에 대입할 수 있는지 확인하는 법을 배우자

  interface A {
    name: string;
  }

  interface B {
    name: string;
    age: number;
  }

  const aObj = {
    name: "zero",
  };

  const bObj = {
    name: "hero",
    age: 28,
  };

  const aToA: A = aObj; // OK
  const bToA: A = bObj; // OK
  // const aToB: B = aObj; // error: Type 'A' is not assignable to type 'B'. Property 'age' is missing in type 'A' but required in type 'B'.
  const bToB: B = bObj; // OK

  () => {
    let a: ["hi", "readonly"] = ["hi", "readonly"];
    let b: string[] = ["hi", "normal"];

    // a = b; // Error: Type 'string[]' is not assignable to type '["hi", "readonly"]'.
    b = a; // OK
  };

  () => {
    // 구조적 타이핑
    interface Money {
      amount: number;
      unit: string;
    }

    interface Liter {
      amount: number;
      unit: string;
    }

    const liter: Liter = {
      amount: 1,
      unit: "liter",
    };
    const circle: Money = liter;
  };
};
