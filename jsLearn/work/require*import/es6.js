//es6.js
// es6中的count是强绑定的，一旦count发生变化，count也会随之发生变化
import {count} from './counter'
setTimeout(function () {
    console.log('read count after 1000ms in es6 is', count)
}, 1000)