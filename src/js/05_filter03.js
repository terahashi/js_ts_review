export function run() {
  const prices = [50, 100, 150, 80, 200];

  const result = prices.filter((price) => price >= 100);

  console.log(result);
}
