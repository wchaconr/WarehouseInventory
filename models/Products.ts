export default class Products {
  #idProduct;
  #name;
  #quantity;
  #price;
  #colors;
  #size;

  constructor(idProduct: number, name: string, quantity: number, price: number, colors: string[], size: string[]) {
    this.#idProduct = idProduct;
    this.#name = name;
    this.#quantity = quantity;
    this.#price = price;
    this.#colors = colors;
    this.#size = size;

  }

  setName(newName: string): void {
    this.#name = newName;
  }

  setQuantity(newQuantity: number): void {
    this.#quantity = newQuantity;
  }

  setPrice(newPrice: number): void {
    this.#price = newPrice;
  }

  getProduct(): object {
    return {
      idProduct: this.#idProduct,
      name: this.#name,
      quantity: this.#quantity,
      price: this.#price,
      colors: this.#colors,
      size: this.#size
    }
  }

}