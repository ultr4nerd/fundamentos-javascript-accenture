const cart = [
  {
    item: "Laptop",
    quantity: 1,
  },
];

function addItemToCart(cart, item, quantity) {
  const newCart = [...cart]; // Spread operator (E6+)
  newCart.push({
    item: item,
    quantity: quantity,
  });
  return newCart;
}
