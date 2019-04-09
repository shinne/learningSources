const express = require('express')
const app = express()
const createMockData = require('./createMockData')

app.use('/getStuInfo', (req,res,next) => {
    console.log('get in getStuInfo')
    let pageSize = req.query.pageSize || 10
    res.send(createMockData.createStudents(Number(pageSize)))
})

app.use('/studentDetail', (req,res,next) => {
    console.log('get in studentDetail')
    res.send(createMockData.studentDetail())
})

app.listen(3007,function () {
    console.log('server start')
})
