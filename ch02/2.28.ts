// 2.28 원시 자료형에도 브랜딩 기법을 사용할 수 있다.

() => {
  () => {
    function kmToMile(km: number) {
      return km * 0.62;
    }
    const mile = kmToMile(3);
  };

  () => {
    type Brand<T, B> = T & { __brand: B };
    type KM = Brand<number, "km">;
    type Mile = Brand<number, "mile">;

    function kmToMile(km: KM) {
      return (km * 0.62) as Mile;
    }

    const km = 3 as KM;
    const mile = kmToMile(km);
    // const mile: Mile
    const mile2 = 5 as Mile;
    // kmToMile(mile2)
    // 'Mile' 형식의 인수는 'KM' 형식의 매개 변수에 할당될 수 없습니다.
    
  };
};
