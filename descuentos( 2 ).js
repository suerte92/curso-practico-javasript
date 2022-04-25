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

if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + " no es válido");    
} else if (couponValue === "Gold") {
    descuento = 30;
} else if (couponValue === "Plata") {
    descuento = 20;
} else if (couponValue === "Normal") {
    descuento = 10;
}

if (coupons.includes(couponValue)) {
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

}



