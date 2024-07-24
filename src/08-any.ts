(() => {
  // SE ACONSEJA QUE ANY NO SEA USADO
  // con any practicamente desactivamos el tipado de typescript
  let myDynimicVar: any;
  myDynimicVar = 100;
  myDynimicVar = true;
  myDynimicVar = {};
  myDynimicVar = [];
  myDynimicVar = null;
  myDynimicVar = 'Hello';

  const rta = (myDynimicVar as string).toUpperCase(); // se puede hacer casting de tipos

  myDynimicVar = 100;
  const rta2 = (<number>myDynimicVar).toFixed(); // otra forma de hacer casting de tipos -> <number> se conocen como generics
})();
