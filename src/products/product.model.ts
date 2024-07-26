// el .model es una convencion para indicar que este archivo tiene el modelo de un producto
export type Size = 'small' | 'medium' | 'large';
export type Product = {
  title: string,
  createdAt: Date,
  price: number,
  stock: number,
  size?: Size
}
