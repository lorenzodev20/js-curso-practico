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

  // Respuesta en HTML
  const ResultP = document.getElementById("ResultP");
  ResultP.innerHTML = '<div class="alert alert-info alert-dismissible fade show" role="alert">'+
  'El precio con descuento son: <strong> $ '+precioConDescuento+'</strong>'+
  '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  
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
    // Respuesta en HTML
    const ResultP = document.getElementById("ResultP");
    ResultP.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
    'El cupón <strong>'+userCouponValue+'</strong> no es válido'+
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  } else {
    const descuento = userCoupon.discount;

    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    // Respuesta en HTML
    const ResultP = document.getElementById("ResultP");
    ResultP.innerHTML = '<div class="alert alert-info alert-dismissible fade show" role="alert">'+
    'El precio con descuento son: <strong> $ '+precioConDescuento+'</strong>'+
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  }
}

