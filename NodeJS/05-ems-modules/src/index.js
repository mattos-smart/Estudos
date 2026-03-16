// import * as database from "./utils/database.js"; // * serve para importar tudo que tem dentro do arquivo.
import { connectToDatabase, databaseType } from "./utils/database.js"; // Destructuring
// O destructuring em Node.js pode ser utilizado para extrair valores de objetos ou arrays de forma concisa e eficiente.
import {getDataFromApi} from "./utils/api.js"

connectToDatabase("my-database");
getDataFromApi();
// disconnectDatabase();
