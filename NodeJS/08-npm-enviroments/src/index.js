import connectToDataBase from "./database/data.js";

async function main() {
    await connectToDataBase(process.env.USER_DATA_BASE, process.env.PASSWORD_DATA_BASE);
}

main();
