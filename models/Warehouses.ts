import Products from "./Products";

export default class Warehouse {
  _name;
  _location;
  #products: any[];
  #necessaryvaluesInProducts: number = 6;
  #productNotFound: number = -1;

  constructor(name: string, location: string) {
    this._name = name;
    this._location = location;
    this.#products = [];

  }

  addProduct(productToAdd: Products): void {
    if (this.productValidation(productToAdd)) {
      this.#products.push(productToAdd);
      console.log(`The product was added succesfully`)
    } else {
      console.error("INVALID: The product must have all the values");
    }
  }

  showProducts(): void {
    this.#products.forEach(p => console.log(p.getProduct()));
  }

  productValidation(productToAdd: Products): boolean {
    let valueAddedToProduct = Object.values(productToAdd.getProduct());
    if (valueAddedToProduct.length < this.#necessaryvaluesInProducts) {
      return false;
    }
    return true;
  }

  updateProductName(idProduct: number, newName: string): void {
    let IndexproductToBeUpdated: number = this.getIndexProductToBeUpdated(idProduct)

    if (IndexproductToBeUpdated !== this.#productNotFound) {
      this.#products[IndexproductToBeUpdated].setName(newName);
      console.log(`The product name with ID: ${idProduct}  was successfully updated`)
    } else {
      console.log(`The product with ID: ${idProduct} was not found`)
    }
  }

  updateProductQuantity(idProduct: number, newQuantity: number): void {
    let IndexproductToBeUpdated: number = this.getIndexProductToBeUpdated(idProduct)

    if (IndexproductToBeUpdated !== this.#productNotFound) {
      this.#products[IndexproductToBeUpdated].setQuantity(newQuantity);
      console.log(`The product quantity with ID: ${idProduct}  was successfully updated`)
    } else {
      console.log(`The product with ID: ${idProduct} was not found`)
    }
  }

  updateProductPrice(idProduct: number, newPrice: number): void {
    let IndexproductToBeUpdated: number = this.getIndexProductToBeUpdated(idProduct)

    if (IndexproductToBeUpdated !== this.#productNotFound) {
      this.#products[IndexproductToBeUpdated].setPrice(newPrice);
      console.log(`The product price with ID: ${idProduct}  was successfully updated`)
    } else {
      console.log(`The product with ID: ${idProduct} was not found`)
    }

  }

  addProductColor(idProduct: number, newColor: string): void {
    let productToBeUpdated = this.getProductToBeUpdated(idProduct)
    productToBeUpdated.colors.push(newColor);
    console.log(`The new color of product with id: ${idProduct}, has been added succesfully`)
  }

  removeProductColor(idProduct: number, colorToRemove: string): void {
    let productToBeUpdated = this.getProductToBeUpdated(idProduct)
    productToBeUpdated.colors = productToBeUpdated.colors.filter(p => p !== colorToRemove);
  }

  addProductSize(idProduct: number, newSize: string): void {
    let productToBeUpdated = this.getProductToBeUpdated(idProduct)
    productToBeUpdated.size.push(newSize);
    console.log(`The new size of product with id: ${idProduct}, has been added succesfully`)
  }

  removeProductSize(idProduct: number, sizeToRemove: string): void {
    let productToBeUpdated = this.getProductToBeUpdated(idProduct)
    productToBeUpdated.size = productToBeUpdated.size.filter(p => p !== sizeToRemove);
  }

  getProductToBeUpdated(idProduct: number): number {
    const productToBeUpdated = this.#products.find(p => p.getProduct().idProduct === idProduct);
    return productToBeUpdated.getProduct();
  }

  getIndexProductToBeUpdated(idProduct: number): number {
    let indexProductOnWarehouse: number =
      this.#products.findIndex(p =>
        p.getProduct().idProduct === idProduct);

    return indexProductOnWarehouse;
  }


}