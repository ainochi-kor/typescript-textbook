() => {
  // 2.12 타입도 상속이 가능하다

  () => {
    interface Animal {
      name: string;
    }

    interface Dog extends Animal {
      bark: () => void;
    }

    interface Cat extends Animal {
      meow: () => void;
    }
  };

  () => {
    type Animal = {
      name: string;
    };

    type Dog = Animal & {
      bark: () => void;
    };
    type Cat = Animal & {
      meow: () => void;
    };
    type Name = Cat["name"]; // string

    interface DogCat extends Dog, Cat {}
    type meow = DogCat["meow"]; // () => void
    type bark = DogCat["bark"]; // () => void
  };

  () => {
    interface Merge {
      one: string;
      two: string;
    }

    // interface Merge2 extends Merge {
    //   one: "h" | "w";
    //   two: 123;
    // }
    // Interface 'Merge2' incorrectly extends interface 'Merge'.
  };
};
