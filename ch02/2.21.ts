// enum은 자바스크립트에서도 사용할 수 있다.
() => {
  () => {
    enum Level {
      NOVICE,
      INTERMEDIATE,
      ADVANCED,
      MASTER,
    }

    const a = Level.NOVICE; // 0
    const b = Level[Level.NOVICE]; // NOVICE

    function whatsYourLevel(level: Level) {
      console.log(Level[level]);
    }

    const myLevel = Level.ADVANCED;
    whatsYourLevel(myLevel);
  };

  () => {
    enum Level {
      NOVICE = 3,
      INTERMEDIATE, // 5
      ADVANCED = 7,
      MASTER, // 8
    }
  };

  () => {
    enum Role {
      USER,
      GUEST,
      ADMIN,
    }

    enum Role2 {
      USER = "USER",
      GUEST = "GUEST",
      ADMIN = "ADMIN",
    }

    function changeUserRole(role: Role) {
      console.log(`User role changed to: ${role}`);
    }
    function getUserRole(role: Role2) {
      return `User role is: ${role}`;
    }

    changeUserRole(2);
    // changeUserRole(4); // TS 4.9 버전까진 에러가 표시되지 않았음.
    // '4' 형식의 인수는 'Role' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

    getUserRole(Role2.USER);
    // getUserRole("USER");
    // '"USER"' 형식의 인수는 'Role2' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
  };

  () => {
    enum Money {
      WON,
      DOLLAR,
    }

    interface Won {
      type: Money.WON;
    }
    interface Dollar {
      type: Money.DOLLAR;
    }

    function getMoneyType(money: Won | Dollar) {
      return money;
    }
  };

  // enum의 멤버끼리는 구분되지 않을 수 있다.
  () => {
    enum Money {
      WON,
    }
    enum Water {
      LITER,
    }
    interface M {
      type: Money.WON;
    }
    interface N {
      type: Water.LITER;
    }

    function moneyOrLitter(param: M | N) {
      if (param.type === Money.WON) {
        param;
      } else {
        param;
      }
    }

    console.log(moneyOrLitter({ type: Money.WON })); // MON
    console.log(moneyOrLitter({ type: Water.LITER })); // MON
  };

  // enum 타입을 사용하되, 자바스크립트 코드가 생성되지 않게 할 수 있다.
  () => {
    const enum Money {
      WON,
      DOLLAR,
    }

    Money.WON;
    // Money[Money.WON];
    // const 열거형 멤버는 문자열 리터럴을 통해서만 액세스할 수 있습니다.ts(2476)
  };
};
