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

            /**
             * x   横坐标
             * y   纵坐标
             * radius   半径
             * startAngel   初始角度
             * endAngel   结束角度
             * anticlockwise   false顺时针  true逆时针
             */
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
    gradation.width = 700;
    gradation.height = 220;
    var ctx = gradation.getContext('2d');
    //画渐变方格
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var rC = 20 * i;
            var gC = 20 * j;
            //这里通过使用rgba设置透明度
            ctx.fillStyle = 'rgba(' + Math.floor(rC) + ',' + Math.floor(gC) + ',0,' + (0.05 * j + 0.5) + ')';
            ctx.fillRect(i * 25, j * 25, 25, 25);
        }
    }

    //画渐变圆弧
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var rC = 20 * i;
            var gC = 20 * j;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(' + Math.floor(rC) + ',' + Math.floor(gC) + ',0,' + (0.05 * j + 0.5) + ')';
            ctx.arc(250 + i * 25, 12.5 + j * 25, 10, 0, 2 * Math.PI, true);
            ctx.stroke();
        }
    }
}

//半透明矩形

var alphaCvs = document.getElementById("alphaCvs");
if (alphaCvs.getContext) {
    alphaCvs.height = 50;
    var ctx = alphaCvs.getContext("2d");
    ctx.fillStyle = "#23EE25";
    ctx.fillRect(10, 10, 190, 26);
    for (var i = 0; i < 10; i++) {
        ctx.fillStyle = 'rgba(255,255,255,' + (1 + i) / 10 + ')';
        ctx.fillRect(25 + i * 17, 13, 17, 20);
    }
}

//  线条设置
//  最左边的线用了默认的 butt ,可以注意到它是与辅助线齐平的。
//  round 的效果，端点处加上了半径为一半线宽的半圆。
//  square 的效果，端点处加上了等宽且高度为一半线宽的方块。
var lineStyleCvs = document.getElementById("lineStyleCvs");
if (lineStyleCvs.getContext) {
    lineStyleCvs.width = 400;
    lineStyleCvs.height = 400;
    var ctx = lineStyleCvs.getContext("2d");
    var lineCap = ['butt', 'round', 'square', 'butt', 'round', 'square'];
    var lineJoin = ['round', 'bevel', 'miter'];
    for (var i = 0; i < 6; i++) {
        ctx.lineWidth = 1 + i * 2;
        ctx.beginPath();
        ctx.moveTo(10, 10 + i * 25);
        ctx.lineTo(190, 10 + i * 25);
        ctx.lineCap = lineCap[i]
        ctx.stroke();
    }

    for (var i = 0; i < 3; i++) {
        ctx.lineWidth = 8;
        ctx.lineJoin = lineJoin[i];
        ctx.beginPath();
        ctx.moveTo(5, i * 20 + 180);
        ctx.lineTo(45, i * 20 + 210);
        ctx.lineTo(90, i * 20 + 180);
        ctx.lineTo(135, i * 20 + 210);
        ctx.lineTo(180, i * 20 + 180);
        ctx.lineTo(225, i * 20 + 210);
        ctx.lineTo(270, i * 20 + 180);
        ctx.lineTo(315, i * 20 + 210);
        ctx.stroke();
    }
}


//画一连串的折现图，模拟京东提升京享值页面
var growthCvs = document.getElementById("growthCvs");
if (growthCvs.getContext) {
    growthCvs.width = 1200;
    growthCvs.height = 200;
    var ctx = growthCvs.getContext("2d");
    ctx.fillStyle = "#23EE25";
    ctx.fillRect(10, 10, 190, 26);
    for (var i = 0; i < 10; i++) {
        ctx.fillStyle = 'rgba(255,255,255,' + (1 + i) / 10 + ')';
        ctx.fillRect(25 + i * 17, 13, 17, 20);
    }
}

var GrowthCanvas = function (canvas, data, config,container) {
    var defaultCanvas = document.getElementById("canvas");
    var defaultConfig = {
        canvasWidth: 1200,
        canvasHeight: 200,
        marginTop:30,
        marginLeft:60,
        marginRight:60,
        marginBottom:30,
        lineWidth:2,
        strokeStyle: "#cfae68",
        fillStyle: "#87da55",
        minScore: 0,
        maxScore: 100000
    };
    var defaultData =
        [
            {
                score: 59034,
                isCur: false
            },
            {
                score: 30525,
                isCur: false
            },
            {
                score: 52570,
                isCur: false
            },
            {
                score: 57034,
                isCur: true
            },
            {
                score: 87134,
                isCur: false
            }
        ];
    var defaultContainer = document.getElementById("growthContainer");
    this.canvas = canvas ? canvas : this.defaultCanvas;
    this.data = extend(defaultData, data || {});
    this.config = extend(defaultConfig, config || {});
    this.container = container ? container : defaultContainer;
    if(this.canvas.getContext){
        this.ctx = this.canvas.getContext("2d");
    }
    else{
        console.log("不支持canvas");
        return;
    }
    this.init();
};
GrowthCanvas.prototype = {
    constructor: GrowthCanvas,
    init: function () {
        this.initCanvas();
        this.initParam();
        this.drawLine();
        this.drawPoints();
    },
    initCanvas: function () {
        this.canvas.width = this.config.canvasWidth;
        this.canvas.height = this.config.canvasHeight;

    },
    initParam: function () {
        var len = this.data.length;
        //计算宽度和高度一格的距离
        var perWidth = (this.canvas.width - this.config.marginLeft - this.config.marginRight)/(len - 1);
        var perHeight = (this.canvas.height - this.config.marginTop - this.config.marginBottom)/(this.config.maxScore - this.config.minScore);
        //计算每条数据
        for(var i = 0 ; i < len ; i ++){
            this.data[i].x = this.config.marginLeft + i * perWidth;
            this.data[i].y = this.canvas.height - parseInt(this.config.marginBottom + this.data[i].score * perHeight,10);
        }
    },
    drawLine:function () {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.config.strokeStyle;
        this.ctx.lineWidth = this.config.lineWidth;
        for(var i = 0 ; i < this.data.length ; i++){
            if(i == 0 ){
                this.ctx.moveTo(this.data[i].x,this.data[i].y);
            }
            else{
                this.ctx.lineTo(this.data[i].x,this.data[i].y);
            }
        }
        this.ctx.stroke();
    },
    drawPoints:function () {
        for(var i = 0 ; i < this.data.length ; i++){
            this.drawPoint(this.data[i]);
        }
    },
    drawPoint:function (point) {
        if(point.isCur){
            var circle = [
                '<div class="score-wrap"  style="left:',
                (point.x - 15) + 'px;',
                'top:' + (point.y - 15) + 'px;">',
                '<div class="hover-panel">',
                '<div class="score-num">' + point.score,
                '</div>',
                '<div class="score-calc"><div class="score-d">您当前的分数是' + point.score,
                '</div></div></div>',
                '<div class="circle-current"',
                'style="left:',
                ((30-20)/2) + 'px;',
                'top:' + ((30-20)/2) + 'px;">',
                '</div>',
                '<div class="circle-wrapper"',
                'style="left:',
                ((30-12)/2) + 'px;',
                'top:' + ((30-12)/2) + 'px;">',
                '</div>',
                '<div class="circle"',
                'style="left:',
                ((30-4)/2) + 'px;',
                'top:' + ((30-4)/2) + 'px;">',
                '</div></div>'
            ];
        }
        else{
            var circle = [
                '<div class="score-wrap"  style="left:',
                (point.x - 15) + 'px;',
                'top:' + (point.y - 15) + 'px;">',
                '<div class="hover-panel">',
                '<div class="score-num">' + point.score,
                '</div>',
                '<div class="score-calc"><div class="score-d">您当前的分数是' + point.score,
                '</div></div></div>',
                '<div class="circle-wrapper"',
                'style="left:',
                ((30-12)/2) + 'px;',
                'top:' + ((30-12)/2) + 'px;">',
                '</div>',
                '<div class="circle"',
                'style="left:',
                ((30-4)/2) + 'px;',
                'top:' + ((30-4)/2) + 'px;">',
                '</div></div>'
            ];
        }
        var html = circle.join("");
        $(this.container).append($(html));

    }

};

//简单实现jquery $.extend的功能
var extend = function (oldObject, newObject) {
    for (var property in newObject) {
        oldObject[property] = newObject[property];
    }
    return oldObject;
}