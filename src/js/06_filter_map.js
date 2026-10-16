export function run() {
  const products = [
    { name: 'Apple', inStock: true },
    { name: 'Banana', inStock: false },
    { name: 'Orange', inStock: true },
    { name: 'Grape', inStock: false },
  ];

  // ここにコードを書いてください
  const result = products.filter((product) => product.inStock === true).map((product) => product.name);

  console.log(result);
}
