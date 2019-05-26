// 判断变量否为function
const isFunction = variable => typeof variable === 'function'

// 定义Promise的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'


class MyPromise {
    constructor(handle) {
        if (!isFunction(handle)) {
            throw new Error('MyPromise must accept a function as a parameter')
        }
        // 添加状态
        this._status = PENDING
        // 添加状态
        this._value = undefined
        // 添加成功回调函数队列
        this._fulfilledQueues = []
        // 添加失败回调函数队列
        this._rejectedQueues = []
        // 执行handle
        try {
            handle(this._resolve.bind(this), this._reject.bind(this))
        } catch (err) {
            this._reject(err)
        }
    }

    /*// 添加resovle时执行的函数
    _resolve(val) {
        if (this._status !== PENDING) return
        this._status = FULFILLED
        this._value = val
    }

    // 添加reject时执行的函数
    _reject(err) {
        if (this._status !== PENDING) return
        this._status = REJECTED
        this._value = err
    }*/

    // 添加resovle时执行的函数
    _resolve(val) {
        if (this._status !== PENDING) return
        // 依次执行成功队列中的函数，并清空队列
        const run = () => {
            this._status = FULFILLED
            this._value = val
            let cb;
            while (cb = this._fulfilledQueues.shift()) {
                cb(val)
            }
        }
        // 为了支持同步的Promise，这里采用异步调用
        setTimeout(() => run(), 0)
    }

    // 添加reject时执行的函数
    _reject(err) {
        if (this._status !== PENDING) return
        // 依次执行失败队列中的函数，并清空队列
        const run = () => {
            this._status = REJECTED
            this._value = err
            let cb;
            while (cb = this._rejectedQueues.shift()) {
                cb(err)
            }
        }
        // 为了支持同步的Promise，这里采用异步调用
        setTimeout(run, 0)
    }
    // 添加then方法
    then(onFulfilled, onRejected) {
        const {_value, _status} = this
        // 返回一个新的Promise对象
        return new MyPromise((onFulfilledNext, onRejectedNext) => {
            // 封装一个成功时执行的函数
            let fulfilled = value => {
                try {
                    //如果不是函数则不执行
                    if (!isFunction(onFulfilled)) {
                        onFulfilledNext(value)
                    } else {
                        let res = onFulfilled(value);
                        if (res instanceof MyPromise) {
                            // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                            onFulfilledNext(res)
                        }
                    }
                } catch (err) {
                    // 如果函数执行出错，新的Promise对象的状态为失败
                    onRejectedNext(err)
                }
            }
            // 封装一个失败时执行的函数
            let rejected = error => {
                try {
                    if (!isFunction(onRejected)) {
                        onRejectedNext(error)
                    } else {
                        let res = onRejected(error);
                        if (res instanceof MyPromise) {
                            // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                            res.then(onFulfilledNext, onRejectedNext)
                        } else {
                            //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                            onFulfilledNext(res)
                        }
                    }
                } catch (err) {
                    // 如果函数执行出错，新的Promise对象的状态为失败
                    onRejectedNext(err)
                }
            }
            switch (_status) {
                // 当状态为pending时，将then方法回调函数加入执行队列等待执行
                case PENDING:
                    this._fulfilledQueues.push(fulfilled)
                    this._rejectedQueues.push(rejected)
                    break
                // 当状态已经改变时，立即执行对应的回调函数
                case FULFILLED:
                    fulfilled(_value)
                    break
                case REJECTED:
                    rejected(_value)
                    break
            }
        })
    }
}



var test = function(){
    return new MyPromise((resolve, reject) =>{
        console.log('first resolve')
        resolve('first resolve')
    })
}

var test2 = function () {
    return test().then(function () {
        second()
        return 'second resolve'
    })
}

var test3 = function(){
    return test2().then(function () {
        third()
        return 'third resolve'
    })
}
/*test3()*/


function second(){
    console.log('second resolve')
}

function third(){
    console.log('third resolve')
}