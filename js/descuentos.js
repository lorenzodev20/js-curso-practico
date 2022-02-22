// Taller #2: Descuentos de productos

// array de cupones
const coupons = [
  {
      name: "JuanDC_es_Batman",
      discount: 15,
  },
  {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
  },
  {
      name: "es_un_secreto",
      discount: 25,
  },
];

// Funcion Base
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
  return precioConDescuento;
}


function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  
}

function onClickButtonPriceDiscountCoupon(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;
  
  const InputCuponCode = document.getElementById("InputCuponCode");
  const userCouponValue = InputCuponCode.value;
  
  const isCouponValueValid = function (coupon) {
    return coupon.name === userCouponValue;
  };
  
  const userCoupon = coupons.find(isCouponValueValid);
  
  if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
  } else {
    const descuento = userCoupon.discount;

    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}

