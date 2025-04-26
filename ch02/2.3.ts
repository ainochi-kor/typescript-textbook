() => {
  let str: "hello" = "hello";
  // str = "world"; // Error: Type '"world"' is not assignable to type '"hello"'.
  // str = 123 // Error: Type '123' is not assignable to type '"hello"'.

  const obj: { name: "John" } = { name: "John" };
  const arr: [1, 3, "five"] = [1, 3, "five"];
  const func: (amount: number, unit: string) => string = (amount, unit) => {
    return `${amount} ${unit}`;
  };

  const arr2 = [1, 3, "five"] as const;
};
