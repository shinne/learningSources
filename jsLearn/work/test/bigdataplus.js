function sumBigNumber(a, b) {
    var res = '',
        temp = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || temp) {
        temp += Number(a.pop() || 0) + Number(b.pop() || 0);
        res = (temp % 10) + res;
        //在隐式转换中temp = true会在加减中转换成1
        temp = temp > 9;
    }
    return res.replace(/^0+/, '');
}


const res = sumBigNumber('00099999','333')
console.log(res)