const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

const PORT = 3000;

dbCon()
    .then(
        res => {
            app.listen(PORT, () => {
                console.log("Servidor escuchando en el puerto 3000");
            });
        }
    ).catch((err)=>console.log("Teniendo problemas para conectase con la base de datos"))


