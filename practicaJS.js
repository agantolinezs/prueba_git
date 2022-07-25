function calculetPrice(name,price){
    let finalPrice,shippingCost ;
    if (1<=price<=2000) {
        shippingCost=300;
    }
    if (2001<=price<=4000) {
        shippingCost=500;
    }
    if (4000<price) {
        shippingCost=700;
    }
    console.log('El producto '+name+' cuesta '+price+'. Su costo de envío es de '+shippingCost+'. Por lo tanto, el precio final es de '+finalPrice);
};

calculatePrice('Macbook', 2500);
calculatePrice('Celular', 500);
calculatePrice('Playstation', 4500);