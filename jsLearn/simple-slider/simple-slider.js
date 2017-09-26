/**
 *
 * @param config
 * sliderContainer 表示最外层的包裹容器
 * sliderListContainer 包含sliderList的窄容器
 * sliderList 包含所有slider-item的容器，该容器的长度由slider-item个数决定
 * slider-item 每个滑动的小item
 * prevItem 左滑按键
 * nextItem 右滑按键
 * currentIndex 当前滑到哪个位置
 * speed  滑动的速度
 * disable 左右滑动按键，不可点击时添加的class
 * unClick 控制不可快速点击
 */
function  simpleSlider(config) {
    var defaultCfg = {
        sliderContainer:'.slider-container',
        sliderListContainer:'.slider-list-container',
        sliderList:'.slider-list',
        sliderItem:'.slider-item',
        prevItem:'.prev-click',
        nextItem:'.next-click',
        currentIndex:0,
        speed:200,
        disable:'disable',
        unClick:'unClick'
    };
    this.config = $.extend(defaultCfg,config);
    this.sliderContainer = $(this.config.sliderContainer);
    this.sliderListContainer = $(this.config.sliderListContainer);
    this.sliderList = this.sliderContainer.find(this.config.sliderList);
    this.prevClick = this.sliderContainer.find(this.config.prevItem);
    this.nextClick = this.sliderContainer.find(this.config.nextItem);
    this.init();
}

simpleSlider.prototype = {
    constructor:simpleSlider,
    /**
     * 计算slider-list的宽度，以及slider的个数
     */
    initParam:function () {
        var _self = this;
        _self.itemLen = _self.sliderContainer.find(_self.config.sliderItem).size();
        _self.itemWidth =_self.sliderContainer.find(_self.config.sliderItem).outerWidth();
        _self.sliderList.css({
            width:_self.itemWidth*_self.itemLen
        })
        _self.maxIndex = Math.ceil(_self.itemLen - $(_self.sliderListContainer).width()/_self.itemWidth);
    },
    init:function () {
        var _self = this;
        _self.initParam();
        _self.currentIndex = _self.config.currentIndex>_self.maxIndex?_self.maxIndex:_self.config.currentIndex;

       if(parseInt(_self.sliderList.css("width")) <= parseInt(_self.sliderListContainer.css("width"))){
            console.log(_self.sliderList.css("width"));
            console.log(_self.sliderListContainer.css("width"));
            _self.prevClick.addClass(_self.config.disable);
            _self.nextClick.addClass(_self.config.disable);
       }
        if(_self.currentIndex>0){
            _self.slideTo(_self.currentIndex,"next");
        }
        _self.bind();
    },
    bind:function () {
        var _self = this;
        _self.prevClickFn();
        _self.nextClickFn();
    },
    prevClickFn:function () {
        var _self = this;
        _self.prevClick.on("click",function () {
            var prevBtn = $(this);
            if(prevBtn.is("."+ _self.config.disable) || prevBtn.is("."+ _self.config.unClick)){
                return;
            }
            _self.slideTo(_self.currentIndex-1,"prev");
        })
    },
    nextClickFn:function () {
        var _self = this;
        _self.nextClick.on("click",function () {
            var nextBtn = $(this);
            if(nextBtn.is("." + _self.config.disable) || nextBtn.is("." + _self.config.unClick)){
                return;
            }
            _self.slideTo(_self.currentIndex+1,"next");
        })
    },
    slideTo:function (index,direct) {
        var _self = this;
        if((index < 0) || (index > _self.maxIndex)){
            return;
        }
        if(direct=="prev"){
            _self.prevClick.addClass(_self.config.unClick);
            _self.sliderList.animate({
                left:0-index*_self.itemWidth
            },
            _self.config.speed,
            function () {
                _self.currentIndex = index;
                _self.nextClick.removeClass(_self.config.disable);
                _self.prevClick.removeClass(_self.config.unClick);
                if(_self.currentIndex == 0 ){
                    _self.prevClick.addClass(_self.config.disable);
                }
            })
        }
        else{
            _self.nextClick.addClass(_self.config.unClick);
            _self.sliderList.animate({
                    left:0-index*_self.itemWidth
                },
                _self.config.speed,
                function () {
                    _self.currentIndex = index;
                    _self.prevClick.removeClass(_self.config.disable);
                    _self.nextClick.removeClass(_self.config.unClick);
                    if(_self.currentIndex >= _self.maxIndex ){
                        _self.nextClick.addClass(_self.config.disable);
                    }
                })
        }
    }
};