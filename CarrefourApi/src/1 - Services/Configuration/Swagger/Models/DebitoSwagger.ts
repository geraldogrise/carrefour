import { CoreSwagger } from "./CoreSwagger";

export class DebitoSwagger extends CoreSwagger
{
    constructor(){
        super();
    }

    public static ToModel(): any
    {
        return new DebitoSwagger().Model();
    }

    public Model(): any
    {
        return {
            properties : {
                debitoId : {
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
                data : {
                    type : this.StringType ,
                    required : true
                } ,
            }
        }
    }
}