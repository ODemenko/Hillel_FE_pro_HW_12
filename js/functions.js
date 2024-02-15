function showProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
    }
  }

  function getProductNumber() {
    let productNumber;
    do {
      productNumber = parseInt(prompt('Enter product number'));
    } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));
    return productNumber;
  }

  function getProductAmount(productToBuy) {
    let productAmount;
    do {
      productAmount = parseInt(prompt('Enter amount of products you wanna buy'));
    } while(productAmount < 1 || productAmount > productToBuy.availability || isNaN(productAmount));
    return productAmount;
  }
  
   function calculatePrice(productToBuy, productAmount) {
    return productToBuy.price * productAmount;
  }
  
  
  function checkIfDiscount(price) {
    const discount = 0.2;
    const discountStartsFrom = 10000;
    
    if (price >= discountStartsFrom) {
      const finalPrice = price - price * discount;
      console.log(`Congrats! You get discount. Your final price is ${finalPrice}`)
    } else {
      console.log(`The final price is ${price}`);
    }
  }