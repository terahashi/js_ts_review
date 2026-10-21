export function run() {
  function getFirst<T>(items: T[]): T | undefined {
    // ここに処理を書く
    return items[0];
  }
  console.log(getFirst<string>(['Apple', 'Orange'])); // コンソール結果"Apple"
  console.log(getFirst<number>([100, 200, 300])); // コンソール結果100
  console.log(getFirst<string>([])); // コンソール結果undefined
}
