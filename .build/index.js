var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_Warehouses = __toModule(require("./models/Warehouses"));
var import_Products = __toModule(require("./models/Products"));
var import_Company = __toModule(require("./models/Company"));
const tshirt = new import_Products.default(1, "T-shirt", 10, 5e4, ["blue"], ["M"]);
const pants = new import_Products.default(2, "Pants", 2, 15e4, ["blue", "red"], ["M", "S", "L"]);
const skirt = new import_Products.default(3, "Skirt", 3, 8e4, ["black", "red"], ["M", "S", "XL"]);
let warehouseZara = new import_Warehouses.default("Warehouse Zara", "Bogot\xE1");
console.log(warehouseZara);
console.log("\n\n");
const Zara = new import_Company.default("ZARA");
warehouseZara.addProduct(tshirt);
warehouseZara.addProduct(pants);
warehouseZara.addProduct(skirt);
console.log("\n\n");
warehouseZara.showProducts();
console.log("\n\n");
Zara.addwarehouse(warehouseZara);
console.log("\n\n");
warehouseZara.addProductSize(1, "L");
warehouseZara.addProductColor(1, "gray");
warehouseZara.updateProductName(1, "New T-Shirt");
warehouseZara.updateProductQuantity(2, 999);
warehouseZara.updateProductPrice(3, 19999);
console.log("\n\n");
warehouseZara.showProducts();
//# sourceMappingURL=index.js.map
