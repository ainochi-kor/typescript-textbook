// 2.29 배운 것을 바탕으로 타입을 만들어보자

() => {
  // 2.29.1 판단하는 타입 만들기
  () => {
    type IsNever<T> = [T] extends [never] ? true : false;
    type IsAny<T> = string extends number & T ? true : false;
    type IsArray<T> = IsNever<T> extends true
      ? false
      : T extends readonly unknown[]
      ? IsAny<T> extends true
        ? false
        : true
      : false;
    type IsTuple<T> = IsNever<T> extends true
      ? false
      : T extends readonly unknown[]
      ? number extends T["length"]
        ? false
        : true
      : false;
    type IsUnion<T, U = T> = IsNever<T> extends true
      ? false
      : T extends T
      ? [U] extends [T]
        ? false
        : true
      : false;
  };
  // 2.29.2 집합 관련 타입 만들기
  type Diff<A, B> = Omit<A & B, keyof B>;
  type R1 = Diff<
    { name: string; age: number },
    { name: string; married: boolean }
  >;
  // type R1 = {
  //   age: number;
  // };

  // Omit: 특정 객체에서 지정한 속성을 제거하는 타입
  // Diff: 서로 겹치지 않는 부분을 합쳐놓은 것.
  () => {
    type SymDiff<A, B> = Omit<A & B, keyof (A | B)>;
    type R2 = SymDiff<
      { name: string; age: number },
      { name: string; married: boolean }
    >;
    // type R2 = {
    //   age: number;
    //   married: boolean;
    // };
  };

  () => {
    type SymDiffUnion<A, B> = Exclude<A | B, A & B>;
    type R3 = SymDiffUnion<1 | 2 | 3, 2 | 3 | 4>;
    // type R3 = 1 | 4
  };

  // Exclude : 어떤 타입 (A | B)에서 다른 타입 (A & B)을 제거하는 타입.
  () => {
    type IsSubset<A, B> = A extends B ? true : false;
    type R1 = IsSubset<string, string | number>; // true
    type R2 = IsSubset<
      {
        name: string;
        age: number;
      },
      {
        name: string;
      }
    >; // false
    type R3 = IsSubset<symbol, unknown>;
    // type R3 = true
  };

  // Equal : 두 타입이 동일하는 것을 판단
  () => {
    type Equal<A, B> = A extends B ? (B extends A ? true : false) : false;

    // 허점 사례들
    type R1 = Equal<boolean, true | false>;
    // type R1 = boolean
    type R2 = Equal<never, never>;
    // type R2 = never
  };
  // 분배법칙이 일어나지 않게 수정
  () => {
    type Equal<A, B> = [A] extends [B]
      ? [B] extends [A]
        ? true
        : false
      : false;

    // 다만 any와 다른 타입은 구별하지 못함.
    type R3 = Equal<any, 1>;
    // type R3 = true
    type R4 = Equal<[any], [number]>;
    // type R4 = true

    // any와 다른 타입 구별
    type Equal2<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
      T
    >() => T extends Y ? 1 : 2
      ? true
      : false;

    type R6 = Equal2<{ x: 1 } & { y: 2 }, { x: 1; y: 2 }>;
    // type R6 = false
    type R7 = Equal2<any, unknown>;
    // type R7 = false

    // NotEqual : 해당 타입이 아닌지 판단
    type NotEqual<X, Y> = Equal<X, Y> extends true ? false : true;
  };
};
