export function run() {
  const numList = [1, 4, 7, 10, 13, 16];

  //アロー関数で偶数だけ取り出し
  const evenNumbers = numList.filter((num) => num % 2 === 0);

  console.log('偶数のみ', evenNumbers);
}
