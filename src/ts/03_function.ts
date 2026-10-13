export function run() {
  function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
  }

  console.log(calculateTotal(150, 3)); //450
}
