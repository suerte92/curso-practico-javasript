    const coupons = [
        "Gold",
        "Plata",
        "Normal",
    ];   

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;    

    let descuento;

    switch(couponValue) {
        case coupons[0]:
            descuento = 30;
        break;
        case coupons[1]:
            descuento = 20;
        break;
        case coupons[2]:
            descuento = 10;
        break;
    }   

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}



