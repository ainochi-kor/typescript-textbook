() => {
  const arr1: string[] = ["1", "2", "3"];
  const arr2: Array<string> = ["1", "2", "3"];

  const arr3 = [1, 3, 5];
  // const arr3: number[]
  const arr4 = [1, "3", 5];
  // const arr4: (number | string)[]
  const arr5 = [];
  // const arr5: any[]

  // 튜플(tuple): 각 요소 자리에 타입이 고정되어 있는 배열
  const tuple: [number, boolean, string] = [1, true, "hello"];
  tuple[0] = 2;

  const tuple2: readonly [number, boolean, string] = [1, true, "hello"];
  // tuple2.push("no"); // Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.

  const strNumBools: [string, number, ...boolean[]] = [
    "hello",
    1,
    true,
    false,
    true,
  ];
  const strNumsBool: [string, ...number[], boolean] = ["hello", 1, 2, 3, true];
  const strsNumBool: [...string[], number, boolean] = [
    "hello",
    "world",
    1,
    true,
  ];

  let optionalTuple: [number, boolean?] = [1];
  optionalTuple = [1, true];
  optionalTuple = [1, false];
  optionalTuple = [1, undefined];
  // optionalTuple = [1, 2]; // Error: Type '2' is not assignable to type 'boolean | undefined'.
};
