//第二引数0はaccu、つまり合計値の初期値

export function run() {
  const prices = [150, 200, 300, 100];

  const result = prices.reduce((accu, curr) => {
    return accu + curr;
  }, 0); //第二引数0はaccu

  console.log(result);
}
