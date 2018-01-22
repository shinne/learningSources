/**
 *
 * @param options:
 * tableWrapClass:包裹table的divClass标识
 * tableClass:需要模拟的table标识
 * tableWrap:标识table的div
 * table:需要模拟的table
 * virtualWrap:虚拟的包裹table的div，具有scroll
 * virtualTable:虚拟的table，其宽度与table相同
 * @constructor
 */
function ScrollFixed(options){
    this.initParam(options);
    this.createVirtualObj();
    this.bindEvents();
    $("body").trigger("scroll");
}

ScrollFixed.prototype = {
    constructor:ScrollFixed,
    defaultCfg:{
        tableWrapClass:".rpt-result-panel",
        tableClass:"table"
    },
    config:{},
    initParam:function (options) {
        var config =  this.config = $.extend(this.defaultCfg,this.config,options || {});
        this.tableWrap = $(config.tableWrapClass);
        this.table = $(this.tableWrap).find(config.tableClass);
    },
    createVirtualObj:function () {
        this.createVirtualWrap();
        this.createVirtualTable();
    },
    createVirtualWrap:function () {
        var wrapWidth = this.tableWrap.width();
        var tableWidth = this.table.width();
        if(wrapWidth < tableWidth){
            var left = $(this.tableWrap).offset().left;
            if(this.virtualWrap){
                this.virtualWrap.css({
                    position:"fixed",
                    left:left,
                    bottom:0,
                    height:80,
                    width:wrapWidth,
                    border:"1px solid red",
                    overflowX:"scroll",
                    visibility:"hidden"
                });
            }
            else{
                this.virtualWrap = $("<div class='virtualWrap'></div>").css({
                    position:"fixed",
                    left:left,
                    bottom:0,
                    height:80,
                    width:wrapWidth,
                    border:"1px solid red",
                    overflowX:"scroll",
                    visibility:"hidden"
                }).appendTo($('body'));
            }
        }else{
            if(this.virtualWrap){
                this.virtualWrap.remove();
            }
        }
    },
    createVirtualTable:function () {
        var wrapWidth = this.tableWrap.width();
        var tableWidth = this.table.width();
        if(wrapWidth < tableWidth){
            //计算table与wrap的left相对位置
            var wrapLeft = $(this.tableWrap).offset().left;
            var tableLeft = $(this.table).offset().left;
            var left = tableLeft - wrapLeft;
            if(this.virtualTable){
                this.virtualTable.css({
                    position:"absolute",
                    left:left,
                    bottom:0,
                    height:10,
                    width:tableWidth
                });
            }
            else{
                this.virtualTable = $("<div class='virtualTable'></div>").css({
                    position:"absolute",
                    left:left,
                    bottom:0,
                    height:10,
                    width:tableWidth
                }).appendTo(this.virtualWrap);
            }
        }
        else{
            if(this.virtualTable){
                this.virtualTable.remove()
            }
        }


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
    },
    refresh:function (options) {
        this.config = $.extend(this.config,options);
        this.initParam(this.config);
        //重新改变virtualWrap和table的宽度
        this.createVirtualObj();
        this.bindVirtualWrapScroll();
        this.bindWrapScroll();
        //重新获取scrollLeft的宽度
        $(this.tableWrap).trigger("scroll");
        $('body').trigger("scroll");
    }

};