// 2.25 정교한 문자열 조작을 위해 템플릿 리터럴 타입을 사용하자.
() => {
  () => {
    type Literal = "literal";
    type Template = `template ${Literal}`;
    const str: Template = "template literal";
  };

  () => {
    type Template = `template ${string}`;
    let str: Template = `template `;
    str = `template hello`;
    str = `template 123`;
    // str = `template`; // '"template"' 형식은 '`template ${string}`' 형식에 할당할 수 없습니다.
  };

  () => {
    type City = "seoul" | "suwon" | "busan";
    type Vehicle = "car" | "bike" | "walk";
    type ID = `${City}:${Vehicle}`;
    const id: ID = `seoul:walk`;
  };

  () => {
    type RemoveX<Str> = Str extends `x${infer Rest}`
      ? RemoveX<Rest>
      : Str extends `${infer Rest}x`
      ? RemoveX<Rest>
      : Str;
    type Removed = RemoveX<"xxtestxx">;
    // type Removed = "test"
  };
};
