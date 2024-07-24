(() => {
  let productPrice = 100;
  productPrice = 200;

  console.log('productPrice', productPrice);

  let customerAge: number = 19;
  // customerAge = customerAge + '1'; // INVALID
  customerAge = customerAge + 1; // CORRECT
  console.log('customerAge', customerAge);

  let productInStock: number; // por obligacion hay que asignarle el tipo de dato a la variable
  console.log('productInStock', productInStock); // Error: uninitialized variable

  if (productInStock > 10) { // Error: uninitialized variable
    console.log('Product is in stock');
  }

  let discount = parseInt('asdf'); // NaN -> NaN pertenece al tipo number
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('Discount is valid');
  } else {
    console.log('Discount is NOT valid');
  }

  let hex = 0xfff; // hexadecimal
  console.log('hex', hex); // 4095

  let bin = 0b1010; // binario
  // let bin = 0b10012; // Error: Is not a valid binary number
  console.log('bin', bin); // 9

  const myNumber: Number = 100; // Number es un objeto y number es un tipo primitivo -> se recomienda usar number
})()
