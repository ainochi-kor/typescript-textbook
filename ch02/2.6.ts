let strOrNum: string | number = "hello";
strOrNum = 123;

function returnNumber(value: string | number): number {
  if (typeof value === "string") {
    return parseInt(value, 10);
  }
  return value;
}

returnNumber("123");
returnNumber(123);

function returnString(value: string | number | boolean): string {
  return value.toString();
}

returnString(1);
returnString("1");
returnString(true);

type Union1 = string | boolean | number | null;
