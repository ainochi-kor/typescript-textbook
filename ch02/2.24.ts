// 2.24 자기 자신을 타입으로 사용하는 재귀 타입이 있다.
() => {
  () => {
    type Recursive = {
      name: string;
      children: Recursive[];
    };

    const recur1: Recursive = {
      name: "test",
      children: [],
    };

    const recur2: Recursive = {
      name: "test",
      children: [
        { name: "test2", children: [] },
        { name: "test3", children: [] },
      ],
    };
  };

  () => {
    type ElementType<T> = T extends any[] ? ElementType<T[number]> : T;
  };

  () => {
    // type T = number | string | Record<string, T>
    // 'T' 형식 별칭은 순환적으로 자신을 참조합니다.ts(2456)
    type T = number | string | { [key: string]: T };
  };

  () => {
    type InfiniteRecur<T> = { item: InfiniteRecur<T> };
    type Unwrap<T> = T extends { item: infer U } ? Unwrap<U> : T;
    // type Result = Unwrap<InfiniteRecur<any>>;
    // 형식 인스턴스화는 깊이가 매우 깊으며 무한할 수도 있습니다.ts(2589)
  };

  () => {
    type JSONType =
      | string
      | boolean
      | number
      | null
      | JSONType[]
      | { [key: string]: JSONType };

    const a: JSONType = "string";
    const b: JSONType = [1, false, { hi: "json" }];

    const c: JSONType = {
      prop: null,
      arr: [{}],
    };
  };
};
