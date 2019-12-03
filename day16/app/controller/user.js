'use strict';

const Controller = require('egg').Controller;
let jwt = require('jsonwebtoken')
class UserController extends Controller {
    async login(ctx) {
        let {name} = ctx.request.body;
        let {service} = ctx;
        let res = await service.user.log(name);
        if(res){
            let info = {
                ...res
            }
            // let token = jwt.sign(info,this.app.config.keys ,{expiresIn:60});
            ctx.body = {
                code:1,
                token:token,
                msg:'success'
            }
        }else{
            ctx.body = {
                code:0,
                msg:'error'
            }
        }
    }
    async finds(ctx){
        // let {lie_name,lie_tou,lie_jie,lie_jia} = ctx.request.body
        // console.log(lie_name,lie_tou,lie_jie,lie_jia)
        let{service} = ctx;
        let res =await service.user.finds();
        if(res){
            ctx.body={
                code:1,
                msg:res
            }
        }else{
            ctx.body={
                code:0,
                msg:'error'
            }
        }
    }
    async sousuo(ctx){
        const {service} = ctx;
        let {sou} = ctx.request.body;
        let res = await service.user.sousuo(sou);
        if(res){
            ctx.body={
                code:1,
                msg:res
            }
        }else{
            ctx.body={
                code:0,
                msg:'error'
            }
        }
    }
   

}

module.exports = UserController;
