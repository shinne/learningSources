const {Controller} = require('egg')

class BaseController extends Controller {
    get user(){
        return this.ctx.cookies.get('user')
    }

    success(data) {
        this.ctx.body = {
            success:true,
            data
        }
    }

    notFound(msg){
        msg = msg || 'not found'
        this.ctx.throw(404, msg)
    }
}

module.exports = BaseController