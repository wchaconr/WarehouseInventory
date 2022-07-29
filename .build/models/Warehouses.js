var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Warehouse
});
class Warehouse {
  _name;
  _location;
  #products;
  #necessaryvaluesInProducts = 6;
  #productNotFound = -1;
  constructor(name, location) {
    this._name = name;
    this._location = location;
    this.#products = [];
  }
  addProduct(productToAdd) {
    if (this.productValidation(productToAdd)) {
      this.#products.push(productToAdd);
      console.log(`The product was added succesfully`);
    } else {
      console.error("INVALID: The product must have all the values");
    }
  }
  showProducts() {
    this.#products.forEach((p) => console.log(p.getProduct()));
  }
  productValidation(productToAdd) {
    let valueAddedToProduct = Object.values(productToAdd.getProduct());
    if (valueAddedToProduct.length < this.#necessaryvaluesInProducts) {
      return false;
    }
    return true;
  }
  updateProductName(idProduct, newName) {
    let IndexproductToBeUpdated = this.getIndexProductToBeUpdated(idProduct);
    if (IndexproductToBeUpdated !== this.#productNotFound) {
      this.#products[IndexproductToBeUpdated].setName(newName);
      console.log(`The product name with ID: ${idProduct}  was successfully updated`);
    } else {
      console.log(`The product with ID: ${idProduct} was not found`);
    }
  }
  updateProductQuantity(idProduct, newQuantity) {
    let IndexproductToBeUpdated = this.getIndexProductToBeUpdated(idProduct);
    if (IndexproductToBeUpdated !== this.#productNotFound) {
      this.#products[IndexproductToBeUpdated].setQuantity(newQuantity);
      console.log(`The product quantity with ID: ${idProduct}  was successfully updated`);
    } else {
      console.log(`The product with ID: ${idProduct} was not found`);
    }
  }
  updateProductPrice(idProduct, newPrice) {
    let IndexproductToBeUpdated = this.getIndexProductToBeUpdated(idProduct);
    if (IndexproductToBeUpdated !== this.#productNotFound) {
      this.#products[IndexproductToBeUpdated].setPrice(newPrice);
      console.log(`The product price with ID: ${idProduct}  was successfully updated`);
    } else {
      console.log(`The product with ID: ${idProduct} was not found`);
    }
  }
  addProductColor(idProduct, newColor) {
    let productToBeUpdated = this.getProductToBeUpdated(idProduct);
    productToBeUpdated.colors.push(newColor);
    console.log(`The new color of product with id: ${idProduct}, has been added succesfully`);
  }
  removeProductColor(idProduct, colorToRemove) {
    let productToBeUpdated = this.getProductToBeUpdated(idProduct);
    productToBeUpdated.colors = productToBeUpdated.colors.filter((p) => p !== colorToRemove);
  }
  addProductSize(idProduct, newSize) {
    let productToBeUpdated = this.getProductToBeUpdated(idProduct);
    productToBeUpdated.size.push(newSize);
    console.log(`The new size of product with id: ${idProduct}, has been added succesfully`);
  }
  removeProductSize(idProduct, sizeToRemove) {
    let productToBeUpdated = this.getProductToBeUpdated(idProduct);
    productToBeUpdated.size = productToBeUpdated.size.filter((p) => p !== sizeToRemove);
  }
  getProductToBeUpdated(idProduct) {
    const productToBeUpdated = this.#products.find((p) => p.getProduct().idProduct === idProduct);
    return productToBeUpdated.getProduct();
  }
  getIndexProductToBeUpdated(idProduct) {
    let indexProductOnWarehouse = this.#products.findIndex((p) => p.getProduct().idProduct === idProduct);
    return indexProductOnWarehouse;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Warehouses.js.map
