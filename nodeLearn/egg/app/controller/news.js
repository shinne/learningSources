const Controller = require('egg').Controller

class NewController extends Controller {
    async list(){
        const dataList = {
            list:[
                {id:2,title:'the first one news',url:'/news1'},
                {id:2,title:'the second one news',url:'/news1'}
            ]
        }
        await this.ctx.render('news/list.tpl',dataList)
    }
}

module.exports = NewController

