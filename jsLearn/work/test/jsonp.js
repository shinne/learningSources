/*
//对请求data进行格式化处理
function formateData(data) {
    let arr = [];
    for (let key in data) {
        //避免有&,=,?字符，对这些字符进行序列化
        arr.push(key + '=' + data[key])
    }
    return encodeURI(arr.join('&'));
}
*/

//对请求data进行格式化处理
function formateData(data) {
    let arr = [];
    for (let key in data) {
        //避免有&,=,?字符，对这些字符进行序列化
        arr.push(key + '=' + data[key])
    }
    return encodeURI(arr.join('&'));
}

//跨域jsonp请求
/**
 *
 * @param params
 * {
 *  data:请求的参数
 *  url:请求的url
 *  callback:后端需要包裹的数据
 *  success:请求成功后执行的函数
 *  timeoutError:请求超时时执行的函数
 * }
 */
function jsonp(params) {
    //先对params进行处理，防止为空
    params = params || {};
    params.data = params.data || {};
    //后台传递数据时调用的函数名
    var callbackName = params.jsonp;
    // 拿到dom元素head，先不进行操作
    var head = document.querySelector('head');
    //创建script元素，先不进行操作
    var script = document.createElement('script');
    //传递给后台的data数据中，需要包含回调参数callback。
    //callback的值是 一个回调函数的函数名，后台通过该回调函数名调用传递数据，这个参数名的key由双方约定，默认为callback
    params.data['callback'] = callbackName;
    //对data数据进行格式化
    var data = formateData(params.data);
    //设置script请求的url跟数据
    script.src = `${params.url}?${data}`;
    //全局函数 由script请求后台，被调用的函数，只有后台成功响应才会调用该函数
    window[callbackName] = function (jsonData) {
        //请求移除scipt标签
        head.removeChild(script);
        clearTimeout(script.timer);
        window[callbackName] = null;
        params.success && params.success(jsonData)
    }
    //请求超时的处理函数
    if (params.time) {
        script.timer = setTimeout(() => {
            //请求超时对window下的[callbackName]函数进行清除，由于有可能下次callbackName发生改变了
            window[callbackName] = null;
            //移除script元素，无论请求成不成功
            head.removeChild(script)
            //这里不需要清除定时器了，clearTimeout(script.timer); 因为定时器调用之后就被清除了

            //调用失败回调
            params.error && params.error({
                message: '超时'
            })
        }, time);
    }
    //往head元素插入script元素，这个时候，script就插入文档中了，请求并加载src
    head.appendChild(script);

    //无论是请求超时，还是请求成功，都要移除script元素，script元素只有在第一次插入页面文档的时候，才会请求src
    //无论请求失败还是成功，都还是要移除window[callbackName]避免增加没用的全局方法，因为每次请求的callbackName可能是不同的
    //之前有个无聊的问题：为啥jsonp只能是get请求呢？看了实现过程，知道其实是因为script的加载就是get方式的~
}



function jsonp(params) {
    params = params
    params.data = params.data || {}
    var head = document.querySelector("head")
    var script = document.createElement("script")
    var callbackName = params.callback
    params.data['callback'] = params.callback
    var data = formateData(params.data)
    script.src = `${params.url}?${data}`
    window[callbackName] = function (data) {
        window[callbackName] = null
        params.success && params.success(data)
        head.removeChild(script)
    }
    if(params.timer){
        script.timer = setTimeout(function(){
            window[callbackName] = null
            head.removeChild(script)
            params.error && params.error({
                message:'error'
            })
        },params.timer)
    }
    script.appendTo(head)
}

//后台吐出
/*
home.get('/jsonp', async (ctx) => {
    let callbackName = ctx.request.query.callback;
    let data = {
        code: 200,
        data: ctx.request.query
    }
    //返回体直接是函数调用，调用的实参是要后台要传递的数据~由于data是对象，需要先进行json格式化
    return ctx.body = `${callbackName}(${JSON.stringify(data)})`
})*/
