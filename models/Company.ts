import Warehouse from "./Warehouses";

export default class Company {
  #name;
  #warehousesList: any[];

  constructor(name: string) {
    this.#name = name;
    this.#warehousesList = [];
  }

  addwarehouse(newWarehouse: Warehouse): void {
    this.#warehousesList.push(newWarehouse)
    console.log("The Warehouse was added succesfully")
  }

  getWarehouses(): Warehouse[] {
    return this.#warehousesList;
  }

  showWarehouseList(): void {

    this.#warehousesList.forEach(p => {
      console.log(p.this.getWarehouses());
      p.showProducts();
      console.log('\n');
    });
  }


}