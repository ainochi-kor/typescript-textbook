() => {
  // 2.11 타입을 집합으로 생각하자(유니언, 인터섹션)
  let strOrNum: string | number = "hello";
  strOrNum = 123;

  // & (인터섹션)
  type nev = string & number; // never 

  // 타입스크립트에서
  // never는 공집합
  // unknown은 전체집합
  // & (인터섹션)은 교집합
  // | (유니언)은 합집합

}