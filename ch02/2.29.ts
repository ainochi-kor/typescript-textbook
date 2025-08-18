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
};
