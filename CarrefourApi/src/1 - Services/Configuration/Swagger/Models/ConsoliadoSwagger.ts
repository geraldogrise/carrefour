import { CoreSwagger } from "./CoreSwagger";

export class ConsoliadoSwagger extends CoreSwagger
{
    constructor(){
        super();
    }

    public static ToModel(): any
    {
        return new ConsoliadoSwagger().Model();
    }

    public Model(): any
    {
        return {
            properties : {
                id : {
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