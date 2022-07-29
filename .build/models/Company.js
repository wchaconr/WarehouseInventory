var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Company
});
class Company {
  #name;
  #warehousesList;
  constructor(name) {
    this.#name = name;
    this.#warehousesList = [];
  }
  addwarehouse(newWarehouse) {
    this.#warehousesList.push(newWarehouse);
    console.log("The Warehouse was added succesfully");
  }
  getWarehouses() {
    return this.#warehousesList;
  }
  showWarehouseList() {
    this.#warehousesList.forEach((p) => {
      console.log(p.this.getWarehouses());
      p.showProducts();
      console.log("\n");
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Company.js.map
