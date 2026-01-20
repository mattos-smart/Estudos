import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const whishList = [];

const item1 = await createItem("HotWheels Ferrari", 20.99, 1);
const item2 = await createItem("HotWheels Lamborghini", 39.99, 3);

await cartService.adicionarItem(myCart, item1)
await cartService.adicionarItem(myCart, item2)
await cartService.removeItemDois(myCart, 2)
await cartService.displayCart(myCart)
await cartService.ordenaItensPorPreco(myCart)

// await cartService.deletarItem(myCart, item1.name)
// await cartService.deletarItem(myCart, item2.name)

console.log("Shopee Cart TOTAL IS:")
await cartService.calculateTotal(myCart)