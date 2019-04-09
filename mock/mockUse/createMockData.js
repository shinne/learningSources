const mock = require('mockjs')
const { Random } = mock


Random.extend({
    constellations:function (data) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})

module.exports = {
    createStudent(id){
        return {
            id,
            name: Random.cname(),
            avatar:Random.image('50x50'),
            birth:Random.date('yyyy-MM-dd'),
            address:Random.city(true),
            constellation:Random.constellations()
        }
    },
    createStudents(count){
        let students = []
        let ids = Random.range(1,count + 1)
        ids.map(id => {
            students.push(this.createStudent(id))
        })
        return students
    },
    studentDetail(){
        return this.createStudent(Random.natural(10,20))
    }
}