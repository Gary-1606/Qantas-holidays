/**
 * Forces a type to the arg, and simply returns it. This helps in quick Typing mock objects
 *
 * named with mocked to avoid using in other codde aside from test
 */
export const mockedType = <Type>(obj: Type): Type => {
  return obj;
};
