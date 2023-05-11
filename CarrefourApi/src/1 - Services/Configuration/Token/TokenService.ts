const jwt = require('jsonwebtoken');
export class TokenService
{

    public verifyJWT(req: any) : any
    {
        let authData = {
            data: null,
            auth: false
        };
        const jwtToken = req.headers['x-access-token'];
        if (!jwtToken) return authData;
        try
        {
            const decode = jwt.verify(jwtToken, process.env.SECRET || "GRISE");
            if(decode)
            {
                authData = 
                {
                    data: decode,
                    auth: true
                }
            }

        }
        catch(ex)
        {
          
        } 
        return authData;
      
    }
}