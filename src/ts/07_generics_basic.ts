export function run() {
  //関数を定義
  //<T>はこれから使う型に「<T>」という名前を付ける宣言です。
  //value: Tは、関数が受け取る引数の型
  //末尾の :Tは 関数が返す戻り値の型
  function identify<T>(value: T): T {
    return value;
  }

  //ジェネリック型を指定して呼び出す
  const fruit = identify<string>('Apple');
  const price = identify<number>(100);

  console.log(fruit); // Apple
  console.log(`${price}円`); // 100円
}
