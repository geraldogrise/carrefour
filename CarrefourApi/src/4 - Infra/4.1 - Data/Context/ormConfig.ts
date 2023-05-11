import { Credito } from "@aggregates/Caixa/Credito/Credito";
import { Debito } from "@aggregates/Caixa/Debito/Debito";
import { Tipo } from "@aggregates/Caixa/Tipo/Tipo";
const ormConfig = {
    "name": "dbconnection",
    "type": "mysql",
    "host": process.env.DB_HOST  || "127.0.0.1",
    "port":  process.env.DB_PORT || "3306",
    "username":  process.env.DB_USER  ||"root",
    "password":  process.env.DB_PASSWORD  || "carrefour@123",
    "database":  process.env.DB_NAME  || "carrefour",
    "synchronize": false,
    "logging": true,
    "entities":[
        Credito,
        Debito,
        Tipo
    ]
 }

 export default ormConfig;