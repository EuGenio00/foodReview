// pagina para migração de novos modelos de Restaurant

import connection from "./config/db.js";
import Restaurant from "./models/Restaurant.js";
import Review from "./models/Review.js";
import User from "./models/User.js";

const migrate = async () => { // função assíncrona executam ao mesmo tempo
    try { // comando para aguardar um retorno

        //await connection.sync();
        const result = await connection.sync(); // (sync) função para sincronizar o backend
        console.log(result);

    } catch (error) {
        // se não execute erro!
        console.log(error);
    }
};

migrate(); // executar node migration.js no seu bash