(() => {
  let isEnable = true;
  // isEnable = 'asdf'; // Error
  isEnable = false;

  let isNew: boolean = true;
  console.log({ isEnable, isNew });

  const random = Math.random();
  console.log({ random });

  // isNew = random > 0.5 ? 'yes' : 'no'; // Error
  isNew = random > 0.5;
  console.log({ isNew });

  const myBoolean: Boolean = true; // mala practica

  // let myBoolean2: boolean = undefined; // no se pueden asignar valores diferentes a boolean por default
})();
