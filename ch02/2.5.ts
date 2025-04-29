() => {
  const date: Date = new Date();
  const math: Math = Math;
  const str: String = "hello world";

  function add(x: number, y: number): number {
    return x + y;
  }

  const add2: typeof add = (x: number, y: number): number => x + y;
};

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person: Person = new Person("zero");
