// 2.31 함수에 기능을 추가하는 데코레이터 함수가 있다

() => {
  () => {
    class A {
      eat() {
        console.log("start");
        console.log("Eat");
        console.log("end");
      }

      work() {
        console.log("start");
        console.log("Work");
        console.log("end");
      }

      sleep() {
        console.log("start");
        console.log("Sleep");
        console.log("end");
      }
    }
  };

  () => {
    function startAndEnd(originalMethod: any, context: any) {
      function replacementMethod(this: any, ...args: any[]) {
        console.log("start");
        const result = originalMethod.apply(this, args);
        console.log("end");
        return result;
      }
      return replacementMethod;
    }

    class A {
      @startAndEnd
      eat() {
        console.log("Eat");
      }

      @startAndEnd
      work() {
        console.log("Work");
      }

      @startAndEnd
      sleep() {
        console.log("Sleep");
      }
    }
  };

  () => {
    function startAndEnd(start = "start", end = "end") {
      return function RealDecorator<This, Args extends any[], Return>(
        originalMethod: (this: This, ...args: Args) => Return,
        context: ClassMethodDecoratorContext<
          This,
          (this: This, ...args: Args) => Return
        >
      ) {
        function replacementMethod(this: This, ...args: Args): Return {
          console.log(context.name, start);
          const result = originalMethod.call(this, ...args);
          console.log(context.name, end);
          return result;
        }
        return replacementMethod;
      };
    }

    class A {
      @startAndEnd()
      eat() {
        console.log("Eat");
      }

      @startAndEnd()
      work() {
        console.log("Work");
      }

      @startAndEnd("시작", "끝")
      sleep() {
        console.log("Sleep");
      }
    }

    function log<Input extends new (...args: any[]) => any>(
      value: Input,
      context: ClassDecoratorContext
    ) {
      if (context.kind === "class") {
        return class extends value {
          constructor(...args: any[]) {
            super(args);
          }
          log(msg: string): void {
            console.log(msg);
          }
        };
      }
      return value;
    }

    function bound(
      originalMethod: unknown,
      context: ClassMethodDecoratorContext<any>
    ) {
      const methodName = context.name;
      if (context.kind === "method") {
        context.addInitializer(function () {
          this[methodName] = this[methodName].bind(this);
        });
      }
    }

    @log
    class C {
      @bound
      @startAndEnd()
      eat() {
        console.log("Eat");
      }

      @bound @startAndEnd() work() {
        console.log("Work");
      }

      @startAndEnd("시작", "끝")
      sleap() {
        console.log("Sleap");
      }
    }
  };
};
