/**
 * 1、思考show与visibility的区别
 * 2、判断createVirtual是否需要创建，如果存在则更新其样式，否则创建
 * 3、virtualScrollItem的left由其相对于scrollWrap的left确定
 * 4、局限性，样式上的局限性，scrollWrap目前只能被scrollItem撑开
 */

/**
 *
 * @param options:
 * scrollWrapClass:包裹scrollItem的divClass标识
 * scrollItemClass:需要模拟的scrollItem标识
 * left:初始化滚动到left哪儿
 * @constructor
 */

function ScrollFixed(options){
    this.initParam(options);
    //当元素存在的时候才进行以下
    if(this.scrollItem.length && this.scrollWrap.length){
        this.createVirtualObj();
        this.bindEvents();
        $("body").trigger("scroll");
        $(this.virtualWrap).scrollLeft(this.config.left);
    }
}

ScrollFixed.prototype = {
    constructor:ScrollFixed,
    defaultCfg:{
        scrollWrapClass:".scroll-wrap",
        scrollItemClass:".scroll-item",
        left:0
    },
    config:{},
    initParam:function (options) {
        /**
         * config
         * scrollWrapClass:包裹scrollItem的divClass标识
         * scrollItemClass:需要模拟的scrollItem标识
         * left:初始化向左滚动多少
         * scrollWrap:标识有滚动条的的obj
         * scrollItem:需要模拟的obj
         * virtualWrap:虚拟的包裹scrollItem的div，具有scroll
         * virtualscrollItem:虚拟的scrollItem，其宽度与scrollItem相同
         */
        var config =  this.config = $.extend(this.defaultCfg,this.config,options || {});
        this.scrollWrap = $(config.scrollWrapClass);
        this.scrollItem = $(this.scrollWrap).find(config.scrollItemClass);
    },
    createVirtualObj:function () {
        this.createVirtualWrap();
        this.createVirtualItem();
    },
    //创建一个虚拟的wrap，具有滚动条
    createVirtualWrap:function () {
        var wrapWidth = this.scrollWrap.width();
        var itemWidth = this.scrollItem.width();
        var wrapLeft = $(this.scrollWrap).offset().left;
        var itemLeft = $(this.scrollItem).offset().left;
        var left = itemLeft - wrapLeft;
        var realWidth = left + itemWidth;
        if(wrapWidth < realWidth){
            var left = $(this.scrollWrap).offset().left;
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
                    height:50,
                    width:wrapWidth,
                    border:"1px solid red",
                    overflowX:"scroll",
                    visibility:"hidden"
                }).appendTo($('body'));
            }
        }else{
            if(this.virtualWrap){
                this.virtualWrap.remove();
                this.virtualWrap = null;
            }
        }
    },
    //创建一个与table同宽同left的div,模拟table
    createVirtualItem:function () {
        var wrapWidth = this.scrollWrap.width();
        var itemWidth = this.scrollItem.width();
        var wrapLeft = $(this.scrollWrap).offset().left;
        var itemLeft = $(this.scrollItem).offset().left;
        //计算table与wrap的left相对位置
        var left = itemLeft - wrapLeft;
        var realWidth = left + itemWidth;
        if(wrapWidth < realWidth){
            if(this.virtualScrollItem){
                this.virtualScrollItem.css({
                    position:"absolute",
                    left:left,
                    bottom:0,
                    height:10,
                    width:itemWidth
                });
            }
            else{
                this.virtualScrollItem = $("<div class='virtualTable'></div>").css({
                    position:"absolute",
                    left:left,
                    bottom:0,
                    height:10,
                    width:itemWidth
                }).appendTo(this.virtualWrap);
            }
        }
        else{
            if(this.virtualScrollItem){
                this.virtualScrollItem.remove();
                this.virtualScrollItem = null;
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
            $(self.scrollWrap).scrollLeft(left);
        });
    },
    bindWrapScroll:function () {
        var self = this;
        $(this.scrollWrap).bind("scroll",function () {
            var left = $(this).scrollLeft();
            $(self.virtualWrap).scrollLeft(left);
        });
    },
    bindBodyScroll:function () {
        var self = this;
        $(window).bind("scroll",function () {
            var top = $(window).scrollTop();
            var winHeight = $(window).height();
            var wrapTop = $(self.scrollWrap).offset().top;
            var wrapHeight = $(self.scrollWrap).height();
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
        $(this.scrollWrap).trigger("scroll");
        $('body').trigger("scroll");
        $(this.virtualWrap).scrollLeft(this.config.left);
    },
    //页面的样式发生变化的时候调用它会重新判断页面的scroll状态
    reload:function () {
        $("body").trigger("scroll");
    }

};