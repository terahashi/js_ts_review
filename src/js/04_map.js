//  mapメソッドを使って、配列の中の数値を全て2倍にしてください。
// const numbers = [1, 2, 3, 4, 5];

export function run() {
  const numbers = [1, 2, 3, 4, 5];

  const result = numbers.map((num) => num * 2);

  console.log('2倍にした配列', result); // [2, 4, 6, 8, 10]
}
