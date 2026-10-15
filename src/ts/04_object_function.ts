export function run() {
  //型定義
  type Goods = {
    name: string;
    price: number;
  };

  const product: Goods = {
    name: 'Apple',
    price: 150,
  };

  function getProductName(product: Goods): string {
    //(product: Goods) は、getProductName関数が「受け取る値」を入れておくための変数を定義している。
    //(product: Goods)➡️Goods型の値を受け取るための「引数の定義」
    //: string は、getProductName関数が「返す値」の型を定義している。
    return product.name;
  }

  console.log(getProductName(product));
  // Apple
}
