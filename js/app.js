showProducts(products);

const productNumber = getProductNumber();

const productToBuy = products[productNumber - 1];

const productAmount = getProductAmount(productToBuy);

const price = calculatePrice(productToBuy, productAmount);

const finalPrice = checkIfDiscount(price);




