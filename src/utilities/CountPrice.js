const cartTotalAmmount = (products) => {
  const countTotal = (x, y) => x + y.price;
  const totalAmmount = products.reduce(countTotal,0);
  return totalAmmount;
}


const shippingTotalAmmount = (products) => {
  const countTotal = (x, y) => x + y.shipping;
  const totalAmmount = products.reduce(countTotal,0);
  return totalAmmount;
}

export {cartTotalAmmount, shippingTotalAmmount};