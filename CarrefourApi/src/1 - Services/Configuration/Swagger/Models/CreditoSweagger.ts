import { CoreSwagger } from "./CoreSwagger";

export class CreditoSwagger extends CoreSwagger
{
    constructor(){
        super();
    }

    public static ToModel(): any
    {
        return new CreditoSwagger().Model();
    }

    public Model(): any
    {
        return {
            properties : {
                creditoId : {
                    type :  this.NumberType,
                    required : true
                } ,
                nome : {
                    type : this.StringType ,
                    required : true
                } ,
                valor : {
                    type : this.NumberType ,
                    required : true
                } ,
                tipoId : {
                    type : this.NumberType ,
                    required : true
                } ,
                userId : {
                    type : this.NumberType ,
                    required : true
                } ,
            }
        }
    }
}