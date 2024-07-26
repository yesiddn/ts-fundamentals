import { Product } from "./product.model";

// el .service es una convencion para indicar que este archivo tiene la logica de negocio de un producto y trata todos los datos
export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number => {
  return products.reduce((acc, product) => acc + product.stock, 0);
}
