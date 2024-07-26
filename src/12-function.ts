(() => {
  type Sizes = 'small' | 'medium' | 'large';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProductToJson(
    'Shoes',
    new Date(),
    100,
    'medium'
  );
  console.log(product1);
  console.log(product1.title);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product2 = createProductToJsonV2(
    'Shoes',
    new Date(),
    100
  );
  console.log(product2);
}
)();
