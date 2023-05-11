import { CoreSwagger } from "./CoreSwagger";

export class LoginSwagger extends CoreSwagger
{
    constructor(){
        super();
    }

    public static ToModel(): any
    {
        return new LoginSwagger().Model();
    }

    public Model(): any
    {
        return {
            properties : {
               
                login : {
                    type : this.StringType ,
                    required : true
                } ,
                senha : {
                    type : this.StringType ,
                    required : true
                } ,
              
            }
        }
    }
}