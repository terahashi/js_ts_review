export function run() {
  const products = [
    { name: 'Apple', price: 150 },
    { name: 'Banana', price: 100 },
    { name: 'Orange', price: 120 },
    { name: 'lemon', price: 120 },
  ];

  //⬇︎検索キーワード
  const keyword = 'a';

  //⬇︎filterで商品名にkeywordが含まれている商品だけを取り出す
  const filterdProducts = products.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase()));
  //toLowerCase()で小文字に変換して「大文字・小文字を区別しないようにする」
  //.includes()で文字列に含まれているかを判定する

  console.log('商品名にaが含まれている商品', filterdProducts);
}
