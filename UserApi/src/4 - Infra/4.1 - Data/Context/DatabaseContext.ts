import { getConnectionManager, Connection, ConnectionManager} from "typeorm";
import ormConfig from './ormConfig';
export class DatabaseContext
{

    private static connection: Connection;
    private constructor(){}
    public static GetInstance()
    {
        if(this.connection == null)
        {
            const connectionManager = getConnectionManager(); 
            if(connectionManager.has(ormConfig.name)) this.connection = connectionManager.get(ormConfig.name);
            else this.connection = this.NewConnection(connectionManager);
            this.connection.connect().then(conn=> this.connection = conn).catch(error=> console.log(error));
        }
      
        return this.connection;
    }

    public static NewConnection(connectionManager: ConnectionManager)
    {
        const connection = connectionManager.create(
            {
                "name": ormConfig.name,
                "type": "mysql",
                "host": ormConfig.host,
                "port": Number(ormConfig.port),
                "username": ormConfig.username,
                "password":  ormConfig.password,
                "database": ormConfig.database,
                "synchronize": ormConfig.synchronize,
                "logging" : ormConfig.logging,
                "entities": ormConfig.entities
            }
        ); 
        return connection;
    }

}

