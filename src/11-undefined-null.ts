(() => {
  // let myNumber: number = undefined; // no se puede asignar undefined
  // let myString: string = null; // no se puede asignar null

  // let myNull = null; // any
  // let myUndefined = undefined; // any
  let myNull: null = null; // null
  let myUndefined: undefined = undefined; // undefined

  let myNumber: number | null = null; // en algunos frameworks se usa porque en runtime hay que esperar a que se inicialice un componente o una dependencia como un servicio, por lo que se inicializa con null y luego se asigna el valor
  myNumber = 123;

  let myString: string | undefined = undefined; // es raro que se use undefined en el anterior caso, pero se puede
  myString = 'Hello';

  function hi(name: string | null) {
    if (name === null) {
      console.log('Hello nobody');
    } else {
      console.log(`Hello ${name.toUpperCase()}`);
    }
  }

  hi('John');
  hi(null);

  function hiV2(name: string | null) {
    // La gran diferencia entre estos dos (|| y ??) es que el logical OR operator (||) toma como valores falsos a 0, NaN, strings vacíos ("", '', ``), false, null y undefined, mientras que, nullish coalescing operator tomo como valores falso solamente a null y undefined.
    console.log(`Hello ${name?.toUpperCase() || 'nobody'}`); // optional chaining
  }

  hiV2('John');
  hiV2(null);
})();
