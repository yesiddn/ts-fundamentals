(() => {
  // Union types
  let x: number | string = 10
  x = 'hello'
  console.log(x)

  // Type guards
  function print(x: number | string) {
    if (typeof x === 'number') {
      console.log(x + 1)
    } else {
      console.log(x.toUpperCase())
    }
  }

  print(10);
  print('hello');

  // Discriminated unions
  interface Circle {
    kind: 'circle'
    radius: number
  }

  interface Square {
    kind: 'square'
    side: number
  }

  type Shape = Circle | Square

  function area(s: Shape) {
    switch (s.kind) {
      case 'circle':
        return Math.PI * s.radius ** 2
      case 'square':
        return s.side ** 2
    }
  }

  const circle: Circle = { kind: 'circle', radius: 10 }
  const square: Square = { kind: 'square', side: 10 }

  console.log(area(circle))
  console.log(area(square))

  // Platzi example
  let userId: string | number;
  userId = 10;
  userId = '10';

  function greeting(myText: string | number) {
    // Type guards
    if (typeof myText === 'string') {
      console.log('string', myText.toUpperCase()); // si entra aquí, myText es de tipo string
    } else {
      console.log('number', myText.toFixed(2));
    }
  }

  greeting(10);
  greeting('Saul');
})();
