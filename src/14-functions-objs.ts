(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(`Login with email: ${data.email} and password: ${data.password}`);
  }

  login({
    email: 'test@test.com',
    password: '123456'
  });

  type Size = 'small' | 'medium' | 'large';

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    price: number
    stock: number,
    size?: Size
  }) => {
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

  console.log(products);
})();
