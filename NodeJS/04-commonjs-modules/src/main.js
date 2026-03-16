const p = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    // p.getFullName("012023", "Mousepad");
    // p.getLabel("Mouse Logitech GPRO II");

    console.log(config.production);
}

main();
