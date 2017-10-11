//Rect
var rect = document.getElementById("rectCvs");
if (rect.getContext) {
    var ctx = rect.getContext('2d');
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeStyle = "green";
    ctx.strokeRect(50, 50, 50, 50);
}

//triangle
var triangle = document.getElementById("triangleCvs");
if (triangle.getContext) {
    triangle.width = '220';
    triangle.height = '220';

    var ctx = triangle.getContext('2d');
    //填充三角形
    ctx.beginPath();
    ctx.fillStyle = "#cfae68";
    ctx.moveTo(20, 20);
    ctx.lineTo(105, 10);
    ctx.lineTo(150, 150);
    ctx.fill();

    //描边三角形
    //你会注意到填充与描边三角形步骤有所不同。正如上面所提到的，因为路径使用填充（filled）时，路径自动闭合，
    //使用描边（stroked）则不会闭合路径
    //如果没有添加闭合路径closePath()到描述三角形函数中，则只绘制了两条线段，并不是一个完整的三角形
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = '4';
    ctx.moveTo(205, 205);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
}

//arc
var arc = document.getElementById('arcCvs');
if (arc.getContext) {
    arc.width = '500';
    arc.height = '500';
    var ctx = arc.getContext('2d');

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            ctx.beginPath();
            var x = 50 + j * 100;               // x 坐标值
            var y = 50 + i * 100;               // y 坐标值
            var radius = 40;                    // 圆弧半径
            var startAngle = 0;                     // 开始点
            var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
            var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

            ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

            if (i > 1) {
                ctx.fillStyle = "rgba(80,180,180,0.6)";
                ctx.fill();
            } else {
                ctx.strokeStyle = "#cfae68";
                ctx.stroke();
            }
        }
    }
    ctx.beginPath();
    //false顺时针  true逆时针
    ctx.arc(400, 400, 80, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#787878";
    ctx.fill();
}

//渐变颜色
var gradation = document.getElementById("gradationCvs");
if (gradation.getContext) {
    var ctx = gradation.getContext('2d');
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            var rC = 42.5 * i;
            var gC = 42.5 * j;
            ctx.fillStyle = 'rgb(' + Math.floor(rC) + ',' + Math.floor(gC) + ',' + '0)';
            console.log(gC);
            ctx.fillRect(i*25,j*25,25,25);
        }
    }
}
