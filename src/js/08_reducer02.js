export function run() {
  const products = [
    { name: 'コーヒーメーカー', category: '家電', price: 3000 },
    { name: 'スニーカー', category: 'ファッション', price: 8000 },
    { name: 'ノートブック', category: '文房具', price: 500 },
    { name: 'タブレット', category: '家電', price: 40000 },
    { name: 'Tシャツ', category: 'ファッション', price: 1500 },
  ];

  ////⬇︎reduceを使った場合の解答例
  console.log('初期の配列の状態', products);
  const result1 = products.reduce((accu, curr) => {
    //①特定の条件（ここでは価格が1000円以上の商品）を満たす商品を抽出し、
    if (curr.price >= 1000) {
      //②抽出された商品に対して税込み価格（10%を加算）を計算します。
      const priceWithTax = Math.round(curr.price * 1.1); //Math.roundで四捨五入
      accu.push({ ...curr, priceWithTax }); //...currでオブジェクトのコピーを作成し、priceWithTaxを追加
    }
    console.log('1000円以上の商品を抽出後', accu);
    return accu;
  }, []);
  console.log('result1結果', result1);

  // ////⬇︎filterとmapを使った場合の解答例
  // const result2 = products
  //   .filter((product) => product.price >= 1000) //①特定の条件（ここでは価格が1000円以上の商品）を満たす商品を抽出し、
  //   .map((product) => {
  //     const priceWithTax = Math.round(product.price * 1.1); //②抽出された商品に対して税込み価格（10%を加算）を計算します。
  //     return { ...product, priceWithTax }; //③「新しい配列」を作成。税込価格priceWithTaxを追加した新しいオブジェクトを返す
  //   });
  // console.log('result2結果(filterとmapを使った場合)', result2);
}
