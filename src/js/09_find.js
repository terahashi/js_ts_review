export function run() {
  const products = [
    { name: 'ノート', price: 300 },
    { name: 'ペン', price: 150 },
    { name: 'スニーカー', price: 8000 },
    { name: 'タブレット', price: 40000 },
    { name: 'Tシャツ', price: 1500 },
  ];

  // ここにコードを書いてください
  //find()メソッドは配列の先頭から順番に条件を確認し「最初の要素を1つだけ取得する。」
  // (filterメソッドは条件に合うものを全部取得する)
  const result = products.find((product) => {
    return product.price >= 1000;
  });

  console.log(result);
}
