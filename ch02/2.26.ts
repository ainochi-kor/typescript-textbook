// 2.26 추가적인 타입 검사에는 satisfies 연산자를 사용하자

() => {
  () => {
    const universe: {
      [key in "sun" | "sirius" | "earth"]:
        | { type: string; parent: string }
        | string;
    } = {
      sun: "star",
      sirius: "star",
      earth: {
        type: "planet",
        parent: "sun",
      },
    };

    // universe.earth.type
    /**
     * 'string | { type: string; parent: string; }' 형식에 'type' 속성이 없습니다.
     * 'string' 형식에 'type' 속성이 없습니다.ts(2339)
     */
  };

  () => {
    const universe = {
      sun: "star",
      sirius: "star",
      earth: { type: "planet", parent: "sun" },
    } satisfies {
      [key in "sun" | "sirius" | "earth"]:
        | {
            type: string;
            parent: string;
          }
        | string;
    };
  };
};
