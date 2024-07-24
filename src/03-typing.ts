// para solucionar el problema de la redeclaracion de variables se puede encerrar el codigo en una funcion autoejecutable, esto hasta que se trabaje con el sistema de modulos
(() => {
  // es recomendable usar el motor de inferencia de tipos pero hay algunos casos en los que hay que hacerlo de forma explicita
  let myProductName = 'JavaScript book'; // por inferencia de tipo se asume que es string
  let myProductPrice = 250;

  // myProductName = 25; // Error: Type 'number' is not assignable to type 'string'.

  myProductName.toLowerCase();
  myProductPrice.toString();

  const myProductStock = 100; // por inferencia de tipo se asigna 100 porque en este caso se trabaja con una constante
  const myProductName2 = 'Angular book';
})();
