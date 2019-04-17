const BaseController = require('./base')

class NewsController extends BaseController {
    async detail() {
        const ctx = this.ctx;
        const name = this.user

        ctx.body = {
            name:`hello ${name}`
        }
    }

    async add(){
        const ctx = this.ctx
        try{
            ctx.validate({
                title:{type:'number'}
            },{title:'xxxxxxx'})
        }catch(err){
            ctx.logger.warn('validate' + err.errors)
        }

        ctx.cookies.set('user',ctx.params.name)
        ctx.redirect('/user/detail')
    }

    async remove(){
        const ctx = this.ctx
        ctx.cookies.set('user','')
        ctx.body = {
            delete:'success'
        }
    }
}

module.exports = NewsController;

