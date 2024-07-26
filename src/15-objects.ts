(() => {
  type Size = 'small' | 'medium' | 'large';
  type Product = {
    title: string,
    createdAt: Date,
    price: number,
    stock: number,
    size?: Size
  }

  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Shoes',
    createdAt: new Date(1990, 1, 1),
    price: 100,
    stock: 10,
    size: 'medium'
  });

  addProduct({
    title: 'Shirt',
    createdAt: new Date(1990, 1, 1),
    price: 50,
    stock: 20
  });

  // addProduct('Invalid product'); // error

  console.log(products);
})();
