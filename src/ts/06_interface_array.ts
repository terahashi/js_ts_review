export function run() {
  //型定義
  interface Goods {
    name: string;
    price: number;
  }

  //productsという変数に、Goods型の配列を定義する。
  const products: Goods[] = [
    { name: 'Apple', price: 150 },
    { name: 'Banana', price: 100 },
    { name: 'Orange', price: 120 },
  ];

  // getProductNames関数を定義する。引数としてGoods型の配列(Goods[])を受け取り、戻り値もGoods型の配列(Goods[])を返す。
  function getProductNames(products: Goods[]): Goods[] {
    return products.map((product) => product);
  }

  console.log(getProductNames(products));
  // [{ name: 'Apple', price: 150 }, { name: 'Banana', price: 100 }, { name: 'Orange', price: 120 }]
}
