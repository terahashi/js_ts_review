export function run() {
  const prices: number[] = [150, 200, 300]; //「number型の配列」を定義。つまりnumber[]。

  function calculateTotal(prices: number[]): number {
    //⬆︎「prices: number[]」は、calculateTotal関数が「受け取る値」を入れておくための変数を定義している。
    //⬆︎number[]は「number型の配列」を使用することを意味している。
    return prices.reduce((total, price) => total + price, 0);
  }

  console.log(calculateTotal(prices));
  // 650
}
