export const starterCode = `function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

const cart = [
  { price: 499, quantity: 2 },
  { price: 1299, quantity: 1 },
];

console.log(calculateTotal(cart));`;
