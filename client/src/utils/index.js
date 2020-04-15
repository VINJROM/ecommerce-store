// calculates total price of cart items
export const calculatePrice = (items) => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};
export default calculatePrice;

// sets cart items to local storage
export const setCart = (value, cartKey) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};
const CART_KEY = "cart";
export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};
