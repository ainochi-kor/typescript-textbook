() => {
  let str: any = "hello";
  // const result = str.toFixed(); // Error: Property 'toFixed' does not exist on type 'string'.

  console.log("any");
  () => {
    fetch("url")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result); // result type is any
      });

    fetch("url")
      .then<{ data: string }>((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result); // result type is { data: string }
      });

    const result: { hello: string } = JSON.parse('{"hello": "json"}');
  };

  console.log("unknown");
  () => {
    const a: unknown = "hello";
    const b: unknown = "world";

    // a + b; // Error

    try {
    } catch (e) {
      // console.log(e.message); // e type is unknown
    }

    try {
    } catch (e) {
      const error = e as Error;
      console.log(error.message);
    }

    try {
    } catch (e) {
      const error = <Error>e; // jsx와 충돌
      console.log(error.message);
    }
  };

  console.log("void");
  () => {
    function noReturn() {} // function type is void

    const func: () => void = () => 3;
    // const func2 = (): void => 3; // function type is void
    // const func3 = (): void | undefined => 3; // Type 'number' is not assignable to type 'void'.
  };

  console.log("{}, Object");
  () => {
    // null과 undefined를 제외한 모든 타입을 포함하는 타입
    const str: {} = "hello";
    const num: {} = 123;
    const bool: {} = true;
    const obj: {} = { name: "zero" };
    const arr: {} = [1, 2, 3];
    const func: {} = () => 3;
    // const n: {} = null; // Error: Type 'null' is not assignable to type '{}'.
    // const u: {} = undefined; // Error: Type 'undefined' is not assignable to type '{}'.
  };

  console.log("never");
  () => {
    function nerverFunc() {
      throw new Error("never");
    }

    // const result1: never = nerverFunc(); // type 'never' is not assignable to type 'void'.

    const infinite = () => {
      while (true) {
        console.log("infinite");
      }
    };

    // const infinite: () => never
  };
};
