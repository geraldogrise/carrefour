import { CoreSwagger } from "./CoreSwagger";

export class UserSwagger extends CoreSwagger
{
    constructor(){
        super();
    }

    public static ToModel(): any
    {
        return new UserSwagger().Model();
    }

    public Model(): any
    {
        return {
            properties : {
                userId : {
                    type :  this.NumberType,
                    required : true
                } ,
                nome : {
                    type : this.StringType ,
                    required : true
                } ,
                login : {
                    type : this.StringType ,
                    required : true
                } ,
                senha : {
                    type : this.StringType ,
                    required : true
                } ,
                email : {
                    type : this.StringType ,
                    required : true
                } ,
                telefone : {
                    type : this.StringType ,
                    required : true
                } ,
                ativo : {
                    type : this.BooleanType ,
                    required : true
                } ,
            }
        }
    }
}