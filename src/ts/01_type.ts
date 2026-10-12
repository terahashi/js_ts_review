// 次の変数の「???の箇所」に「適切な型」を定義してください。
// const product: ??? = {
//   name: 'Apple',
//   price: 150,
//   inStock: true,
// };

export function run() {
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const product: Product = {
    name: 'Apple',
    price: 150,
    inStock: true,
  };

  console.log(product);
}
