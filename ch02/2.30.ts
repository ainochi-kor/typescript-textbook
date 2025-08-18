// 2.30 타입스크립트의 에러 코드로 검색하자

() => {
  const arr1: string[] = ["1", "2", "3"];
  const arr2: Array<number> = [1, 2, 3];
  // arr1.push(4); 
  // 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
};
