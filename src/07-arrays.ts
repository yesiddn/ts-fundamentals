(() => {
  let prices = [100, 75, 85]; // number[]
  // prices.push('asdf'); // Error
  // prices.push(true); // Error
  prices.push(120); // Ok

  let anotherArray = [100, 'hello', true]; // (string | number | boolean)[]
  anotherArray.push(120); // Ok
  anotherArray.push('world'); // Ok
  anotherArray.push(false); // Ok
  // anotherArray.push([]); // Error

  let names: string[] = [];
  names.push('John'); // Ok

  let mixed: (string | number)[] = [];
  mixed.push('hello'); // Ok
  mixed.push(100); // Ok

  let mixedObj: Object[] = [];
  mixedObj.push({ name: 'John' }); // Ok

  let numbers = [100, 200, 300, 400, 500];
  numbers.map(item => item * 2); // [200, 400, 600, 800, 1000]

  let letters = ['a', 'b', 'c', 'd', 'e'];
  // letters.map(item => item * 2); // Error
  letters.map(item => item.toUpperCase()); // ['A', 'B', 'C', 'D', 'E']

})();
