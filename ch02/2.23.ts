// 2.23 타입을 좁혀 정확한 타입을 얻어내자
() => {
  () => {
    function strOrNum(param: string | number) {
      if (typeof param === "string") {
        param; // string
      } else if (typeof param === "number") {
        param; // number
      } else {
        param; // never
      }
    }

    /**
     * 타입스크립트가 코드를 파악해서 타입을 추론하는 것을 제어 흐름 분석(Control Flow Analysis)이라고 합니다.
     * 다만, 제어 흐름 분석이 완벽하지 않다는 것을 염두해 두어야 합니다.
     */
  };

  () => {
    function strOrNullUndefined(param: string | null | undefined) {
      if (typeof param === "undefined") {
        param; // undefined
      } else if (param) {
        param; // string
      } else {
        param; // string | null
      }
    }
  };

  () => {
    function strOrNullUndefined(param: string | null | undefined) {
      if (typeof param === "undefined") {
        param; // undefined
      } else if (param === null) {
        param; // null
      } else {
        param; // string
      }
    }
  };

  () => {
    function trueOrFalse(param: boolean) {
      if (param) {
        param; // true
      } else {
        param; // false
      }
    }
  };

  () => {
    function strOrNumArr(param: string | number[]) {
      if (Array.isArray(param)) {
        param; // number[]
      } else {
        param; // string;
      }
    }
  };

  () => {
    class A {}
    class B {}
    function classAorB(param: A | B) {
      if (param instanceof A) {
        param; // A
      } else {
        param; // B
      }
    }
  };

  () => {
    interface X {
      width: number;
      height: number;
    }

    interface Y {
      length: number;
      center: number;
    }

    function objXorY(param: X | Y) {
      // 'X'은(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.
      // if (param instanceof X) {
      // if (param.width) {
      // 'X | Y' 형식에 'width' 속성이 없습니다. 'Y' 형식에 'width' 속성이 없습니다.
      if ("width" in param) {
        param; // X
      } else {
        param; // Y
      }
    }
  };

  () => {
    interface Money {
      __type: "money";
      amount: number;
      unit: string;
    }

    interface Liter {
      __type: "liter";
      amount: number;
      unit: string;
    }

    function moneyOrLiter(param: Money | Liter) {
      if (param.__type === "money") {
        param; // Money
      } else {
        param; // Liter
      }
    }

    function isMoney(param: Money | Liter) {
      if (param.__type === "money") {
        return true;
      } else {
        return false;
      }
    }

    function getMoneyOrLiter(param: Money | Liter) {
      if (isMoney(param)) {
        return param; // Money | Liter
      } else {
        return param; // Money | Liter
      }
    }

    /**
     * param is Money: 서술 함수 (Type Predicate)
     * Predicate는 매개변수 하나를 받아 boolean을 반환하는 함수를 의미.
     * isMoney2의 반환값이 true일 때 Money로 타입이 좁혀진다.
     */
    function isMoney2(param: Money | Liter): param is Money {
      if (param.__type === "money") {
        return true;
      } else {
        return false;
      }
    }

    function moneyOrLiter2(param: Money | Liter) {
      if (isMoney2(param)) {
        param; // Money
      } else {
        param; // Liter
      }
    }
  };
};
