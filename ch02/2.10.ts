() => {
  interface Example {
    hello: string;
    world?: number;
    readonly wow: boolean;
    readonly multiple?: symbol;
  }

  const example: Example = {
    hello: "hello",
    wow: true,
  };

  // example.wow = false; // error: Cannot assign to 'wow' because it is a read-only property

  () => {
    // 인덱스 접근 타입(Indexed Access Type)
    type Animal = {
      name: string;
    };

    type N = Animal["name"];
  };

  const obj = {
    hello: "world",
    name: "zero",
    age: 28,
  };

  type Keys = keyof typeof obj; // "hello" | "name" | "age"
  type Values = (typeof obj)[Keys]; // string | number
  type Values2 = (typeof obj)["hello" | "name"]; // string | number

  () => {
    // keyof의 특성
    type Keys = keyof any; // string | number | symbol
    type ArrayKeys = keyof [1, 2, 3];
    let a: ArrayKeys = "lastIndexOf";
    a = "length";
    a = "2";
    // a = "3"; // error: Type '"3"' is not assignable to type 'ArrayKeys'.
    a = 3;
  };

  () => {
    // 매핑된 객체 타입
    type HelloAndHi = {
      [key in "hello" | "hi"]: string;
    };
    // type HelloAndHi = { hello: string; hi: string; }

    // 기존 객체 타입 복사
    interface Original {
      name: string;
      age: number;
      married: boolean;
    }

    type Copy = {
      [key in keyof Original]: Original[key];
    };
    // type Copy = { name: string; age: number; married: boolean; }

    type Tuple = [1, 2, 3];
    type TupleCopy = {
      [key in keyof Tuple]: Tuple[key];
    };

    const copyTuple: TupleCopy = [1, 2, 3];

    type Arr = number[];
    type ArrCopy = {
      [key in keyof Arr]: Arr[key];
    };
    const copyArr: ArrCopy = [1, 2, 3];

    type ReadonlyCopy = {
      readonly [key in keyof Original]?: Original[key];
    };

    // 수식어 제거
    type RemoveReadonly = {
      -readonly [key in keyof ReadonlyCopy]-?: ReadonlyCopy[key];
    };

    // 첫 문자만 대문자로 수정
    type CapitalizeOriginal = {
      [key in keyof Original as Capitalize<key>]: Original[key];
    };
  };
};
