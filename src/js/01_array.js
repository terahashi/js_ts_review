export function run() {
  const numbers = [12, 5, 23, 8, 17];

  let max = numbers[0]; //最初の0番目の要素を「暫定の最大値と設定」

  //⬇︎for文で配列の要素を順番に比較して最大値を求める
  for (let i = 1; i < numbers.length; i++) {
    //⬇︎もし現在の要素が最大値より大きければ、最大値を更新する
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log('最大値', max);

  ////⬇︎Math.max()を使った場合の最大値を求める方法
  // console.log('最大値', Math.max(...numbers));
}
