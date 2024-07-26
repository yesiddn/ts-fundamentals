import { addProduct, calcStock, products } from './produc.service';

addProduct({
  title: 'Shirt',
  createdAt: new Date(1999, 1, 1),
  price: 15,
  stock: 100,
  size: 'medium',
});

addProduct({
  title: 'Donut',
  createdAt: new Date(2000, 1, 1),
  price: 25,
  stock: 50,
});

console.log('Products:', products);
const total = calcStock();
console.log('Total stock:', total);
