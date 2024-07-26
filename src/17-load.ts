import _ from 'lodash'; // could not find a declaration file for module 'lodash' -> Try 'npm i --save-dev @types/lodash' if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';` -> typescript crea una libreria que agrega tipos manualmente a librerias que no tienen tipos

const data = [
  {
    username: 'yesiddn',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'juan',
    role: 'customer'
  }
];

const reponse = _.groupBy(data, (item => item.role));
console.log(reponse); 
