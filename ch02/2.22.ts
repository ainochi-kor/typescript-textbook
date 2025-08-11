// 2.22 infer로 타입스크립트의 추론을 직접 활용하자
() => {
  () => {
    // infer를 활용한 타입 추론
    type El<T> = T extends (infer E)[] ? E : never;
    type Str = El<string[]>;
    type NumOrBool = El<number[] | boolean[]>;
  };

  () => {
    // type El<T> = T extends (infer E)[] ? never : E;
    // 'E' 이름을 찾을 수 없습니다.
  };

  () => {
    type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

    type MyConstructorParameters<T> = T extends abstract new (
      ...args: infer P
    ) => any
      ? P
      : never;

    type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;

    type MyInstanceType<T> = T extends abstract new (...args: any) => infer R
      ? R
      : any;

    type P = MyParameters<(a: string, b: number) => string>;
    // type P = [a: string, b: number]

    type R = MyReturnType<(a: string, b: number) => string>;
    // type R = string

    type CP = MyConstructorParameters<new (a: string, b: number) => {}>;
    // type CP = [a: string, b: number]

    type I = MyInstanceType<new (a: string, b: number) => {}>;
    // type I = {}
  };

  () => {
    type MyPAndR<T> = T extends (...args: infer P) => infer R ? [P, R] : never;
    type PR = MyPAndR<(a: string, b: number) => string>;
    // type PR = [[a: string, b: number], string]
  };

  () => {
    type Union<T> = T extends { a: infer U; b: infer U } ? U : never;
    type Result1 = Union<{ a: 1 | 2; b: 2 | 3 }>;
    // type Result1 = 1 | 2 | 3

    type Intersection<T> = T extends {
      a: (pa: infer U) => void;
      b: (pb: infer U) => void;
    }
      ? U
      : never;
    type Result2 = Intersection<{ a(pa: 1 | 2): void; b(pb: 2 | 3): void }>;
    // type Result2 = 2
  };

  () => {
    type ReturnAndParam<T> = T extends {
      a: () => infer U;
      b: (pb: infer U) => void;
    }
      ? U
      : never;

    type Result3 = ReturnAndParam<{ a: () => 1 | 2; b(pb: 1 | 2 | 3): void }>;
    // type Result3 = 1 | 2

    type Result4 = ReturnAndParam<{ a: () => 1 | 2; b(pb: 2 | 3): void }>;
    // type Result4 = never
  };

  () => {
    type UnionToIntersection<U> = (
      U extends any ? (p: U) => void : never
    ) extends (p: infer I) => void
      ? I
      : never;
    type Result5 = UnionToIntersection<{ a: number } | { b: string }>;
    type Result6 = UnionToIntersection<boolean | true>;
  };
};
