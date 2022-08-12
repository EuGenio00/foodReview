// pagina para migração de novos modelos de Restaurant
import connection from "./config/db.js";
import Restaurant from "./models/restaurant.js";
import Review from "./models/review.js";

const migrate = async () => { // função assíncrona executam ao mesmo tempo
    try { // comando para aguardar um retorno

        //await connection.sync();
        const result = await connection.sync(); // (sync) função para sincronizar o backend 
        console.log(result);

        // se não execute erro!
    } catch (error) {
        console.log(error);
    }

};

migrate(); // executar node migration.js no seu bash