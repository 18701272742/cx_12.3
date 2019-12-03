let jwt = require('jsonwebtoken');
let white = [
    '/api/login'
]
module.exports = ()=>{
    return async (ctx,next)=>{
        if(white.includes(ctx.path)){
            await next()
        }else{
            let token = request.body.header.auto;
            if(!token){
                ctx.body = {
                    code:3,
                    msg:'没有权限'
                }
                return 
            }
            try {
                await next()
            } catch (error) {
                if(error.name == 'TokenExpiredError'){
                    ctx.body = {
                        code:0,
                        msg:'登陆过期，请重新登陆'
                    }
                }
            }
        }
    }
}