import Warehouse from "./models/Warehouses";
import Products from "./models/Products";
import Company from "./models/Company";


//create Product
const tshirt = new Products(1, 'T-shirt', 10, 50000, ["blue"], ["M"]);
const pants = new Products(2, 'Pants', 2, 150000, ["blue", "red"], ["M", "S", "L"]);
const skirt = new Products(3, 'Skirt', 3, 80000, ["black", "red"], ["M", "S", "XL"]);

//create warehouse
let warehouseZara = new Warehouse('Warehouse Zara', 'Bogotá')
console.log(warehouseZara);
console.log("\n\n");

//create company
const Zara = new Company("ZARA")

//add producto to warehouse
warehouseZara.addProduct(tshirt);
warehouseZara.addProduct(pants);
warehouseZara.addProduct(skirt);
console.log("\n\n");

warehouseZara.showProducts();
console.log("\n\n");

//add warehouse to company
Zara.addwarehouse(warehouseZara);
console.log("\n\n");

//add product size
warehouseZara.addProductSize(1, "L");

//add product color
warehouseZara.addProductColor(1, "gray");

//update name product
warehouseZara.updateProductName(1, "New T-Shirt")

//update quiantity product
warehouseZara.updateProductQuantity(2, 999);

//update price product
warehouseZara.updateProductPrice(3, 19999);

console.log("\n\n")
warehouseZara.showProducts();

