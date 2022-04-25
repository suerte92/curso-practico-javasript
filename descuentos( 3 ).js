const coupons = [
    {
        name: "Gold",
        discount: 30,
    },
    {
        name: "Plata",
        discount: 20,        
    },
    {
        name: "Normal",
        discount: 10,
    },   
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


const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + couponValue + "  no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

}



