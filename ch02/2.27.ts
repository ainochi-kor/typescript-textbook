// 2.27 타입스크립트는 건망증이 심하다.

() => {
  () => {
    try {
    } catch (error) {
      if (error) {
        // error.message;
        // '{}' 형식에 'message' 속성이 없습니다.ts(2339)
      }
    }
  };

  () => {
    try {
    } catch (error) {
      if (error as Error) {
        // error.message;
        // 'error'은(는) 'unknown' 형식입니다.
      }
    }
  };

  () => {
    try {
    } catch (error) {
      const err = error as Error;
      if (err) {
        err.message;
      }
    }
  };

  () => {
    try {
    } catch (error) {
      if (error instanceof Error) {
        error.message;
      }
    }
  };
};
