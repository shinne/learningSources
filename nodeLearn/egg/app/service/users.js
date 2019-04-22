const Service = require('egg').Service;

class UsersService extends Service {
    async list(uid){
        const users = await this.app.mysql.query('select * from users')
        return users
    }
}

module.exports = UsersService;
