// 2.32 앰비언트 선언도 선언 병합이 된다.
// declare namespace NS {
//   const v: string;
// }

// declare enum Enum {
//   ADMIN = 1,
// }
// declare function func(param: number): string;
// declare const variable: number;
// declare class C {
//   constructor(p1: string, p2: string);
// }

// new C(func(variable), NS.v);

// declare class A {
//   constructor(name: string);
// }
// function A(name: string) {
//   return new A(name);
// }

// new A("zerocho");
// A("zerocho");

// function Ex() {
//   return "hello";
// }
// namespace Ex {
//   export const a = "world";
//   export type B = number;
// }

// Ex();
// Ex.a;
// const b: Ex.B = 123;
