var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Products
});
class Products {
  #idProduct;
  #name;
  #quantity;
  #price;
  #colors;
  #size;
  constructor(idProduct, name, quantity, price, colors, size) {
    this.#idProduct = idProduct;
    this.#name = name;
    this.#quantity = quantity;
    this.#price = price;
    this.#colors = colors;
    this.#size = size;
  }
  setName(newName) {
    this.#name = newName;
  }
  setQuantity(newQuantity) {
    this.#quantity = newQuantity;
  }
  setPrice(newPrice) {
    this.#price = newPrice;
  }
  getProduct() {
    return {
      idProduct: this.#idProduct,
      name: this.#name,
      quantity: this.#quantity,
      price: this.#price,
      colors: this.#colors,
      size: this.#size
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Products.js.map
