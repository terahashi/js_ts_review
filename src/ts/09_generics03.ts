export function run() {
  function makeArray<T>(first: T, second: T): T[] {
    //コードを書く
    return [first, second];
  }

  console.log(makeArray<string>('Apple', 'Orange'));
  console.log(makeArray<number>(10, 20));
}
