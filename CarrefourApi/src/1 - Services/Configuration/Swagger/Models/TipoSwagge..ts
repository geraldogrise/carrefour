import { CoreSwagger } from "./CoreSwagger";

export class TipoSwagger extends CoreSwagger
{
    constructor(){
        super();
    }

    public static ToModel(): any
    {
        return new TipoSwagger().Model();
    }

    public Model(): any
    {
        return {
            properties : {
                tipoId : {
                    type :  this.NumberType,
                    required : true
                } ,
                nome : {
                    type : this.StringType ,
                    required : true
                } ,
            }
        }
    }
}