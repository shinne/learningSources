/**
 *
 * @param options:
 * tableWrap:包裹table的div
 * table:标识需要模拟的table
 * @constructor
 */
function ScrollFixed(options){
    this.initParam(options);
    this.createVirtualObj();
    this.bindEvents();
}

ScrollFixed.prototype = {
    constructor:ScrollFixed,
    defaultCfg:{
        tableWrap:".rpt-result-panel",
        table:"table"
    },
    config:{},
    initParam:function (options) {
        var config =  this.config = $.extend(this.defaultCfg,options || {});
        this.tableWrap = $(config.tableWrap);
        this.table = $(this.tableWrap).find(config.table);
    },
    createVirtualObj:function () {
        this.createVirtualWrap();
        this.createVirtualTable();
    },
    createVirtualWrap:function () {
        var left = $(this.tableWrap).offset().left;
        console.log(left);
        var width = this.tableWrap.width();
        this.virtualWrap = $("<div class='virtualWrap'></div>").css({
            position:"fixed",
            left:left,
            bottom:0,
            height:20,
            width:width,
            border:"1px solid red",
            overflowX:"scroll"
        }).appendTo($('body'));
    },
    createVirtualTable:function () {
        var width = this.table.width();
        this.virtualTable = $("<div class='virtualTable'></div>").css({
            position:"absolute",
            left:0,
            bottom:0,
            height:10,
            width:width,
        }).appendTo(this.virtualWrap);
    },
    bindEvents:function () {
        //虚拟wrap的scroll事件绑定
        this.bindVirtualWrapScroll();
        //真是wrap的scroll事件绑定
        this.bindWrapScroll();
        //页面body上下滚动事件绑定，主要控制virtualWrap的显示隐藏问题
        this.bindBodyScroll();
    },
    bindVirtualWrapScroll:function () {
        var self = this;
        $(this.virtualWrap).bind("scroll",function () {
            var left = $(this).scrollLeft();
            $(self.tableWrap).scrollLeft(left);
        });
    },
    bindWrapScroll:function () {
        var self = this;
        $(this.tableWrap).bind("scroll",function () {
            var left = $(this).scrollLeft();
            $(self.virtualWrap).scrollLeft(left);
        });
    },
    bindBodyScroll:function () {
        var self = this;
        $(window).bind("scroll",function () {
            var top = $(window).scrollTop();
            var winHeight = $(window).height();
            var wrapTop = $(self.tableWrap).offset().top;
            var wrapHeight = $(self.tableWrap).height();
            var wrapBtmTop = wrapTop + wrapHeight;
            if(winHeight + top  < wrapBtmTop){
                //visibility
                $(self.virtualWrap).css("visibility","visible");
            }
            else{
                $(self.virtualWrap).css("visibility","hidden");

            }
        });
    }

};