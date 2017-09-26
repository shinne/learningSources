/**
 * 使用bootstrap样式的分页插件
 */
/*var $ = require('jquery')*/

var defaults = {
    pageIndex: 0,
    pageSize: 6,
    pageSizeList: [20, 50, 100],
    itemCount: 50,
    maxButtonCount: 7,
    prevText: "上一页",
    nextText: "下一页",
    buildPageUrl: null,
    onPageChanged: null,
    onPageSizeChanged: null
};

function Pager($elem, options) {
    this.$elem = $elem;
    this.options = $.extend({}, defaults, options || {});
    this.init();
}
Pager.prototype = {
    constructor: Pager,
    init: function () {
        this.renderHtml();
        this.bindEvent();
    },
    renderHtml: function () {
        var options = this.options;

        options.pageCount = Math.ceil(options.itemCount / options.pageSize);
        var html = [];

        // 生成总计
        html.push('<li><span>共<em class="total-num">' + options.itemCount + '</em>条 ' + options.pageSize + '条/页</span></li>')

        //生成上一页的按钮
        if (options.pageIndex > 0) {
            html.push('<li><a page="' + (options.pageIndex - 1) + '" href="' + this.buildPageUrl(options.pageIndex + 1) + '">' + options.prevText + '</a></li>');
        } else {
            html.push('<li class="disabled"><span>' + options.prevText + '</span></li>');
        }

        //这里是关键
        //临时的起始页码中间页码，当页码数量大于显示的最大按钮数时使用
        var tempStartIndex = options.pageIndex - Math.floor(options.maxButtonCount / 2) + 1;

        //计算终止页码，通过max计算一排按钮中的第一个按钮的页码，然后计算出页数量
        var endIndex = Math.min(options.pageCount, Math.max(0, tempStartIndex) + options.maxButtonCount) - 1;
        var startIndex = Math.max(0, endIndex - options.maxButtonCount + 1);

        // 第一页
        if (startIndex > 0) {
            html.push("<li><a href='" + this.buildPageUrl(0) + "' page='" + 0 + "'>1</a></li>");
            html.push("<li><span>...</span></li>");
        }

        //生成页码按钮
        for (var i = startIndex; i <= endIndex; i++) {
            if (options.pageIndex == i) {
                html.push('<li class="active"><span>' + (i + 1) + '</span></li>');
            } else {
                html.push('<li><a page="' + i + '" href="' + this.buildPageUrl(options.pageIndex + 1) + '">' + (i + 1) + '</a></li>');
            }
        }

        // 最后一页
        if (endIndex < options.pageCount - 1) {
            html.push("<li><span>...</span></li>");
            html.push("<li><a href='" + this.buildPageUrl(options.pageCount - 1) + "' page='" + (options.pageCount - 1) + "'>" + options.pageCount + "</a></li>");
        }

        //生成下一页的按钮
        if (options.pageIndex < options.pageCount - 1) {
            html.push('<li><a page="' + (options.pageIndex + 1) + '" href="' + this.buildPageUrl(options.pageIndex + 1) + '" class="flip">' + options.nextText + '</a></li>');
        } else {
            html.push('<li class="disabled"><span class="flip">' + options.nextText + '</span></li>');
        }

        // pageSize能否改变
        if(options.onPageSizeChanged) {
            html = this.addPageSizeSelect(html)
        }

        this.$elem.html(html.join(""));
    },
    bindEvent: function () {
        var self = this;
        self.$elem.on("click", "a", function () {
            // 页数点击事件
            var pageIndex = parseInt($(this).attr("page"), 10)
            self.options.pageIndex = pageIndex;
            self.renderHtml();
            if(typeof self.options.onPageChanged === 'function') {
                self.options.onPageChanged(pageIndex);
            }
        }).on('change', '.select-page-size', function() {
            // pageSize改变事件
            var pageSize = parseInt($(this).val(), 10);
            self.options.pageIndex = 0;
            self.options.pageSize = pageSize;
            self.renderHtml();
            if(typeof self.options.onPageSizeChanged === 'function') {
                self.options.onPageSizeChanged(pageSize)
            }
        })
    },
    buildPageUrl: function (pageIndex) {
        if ($.isFunction(this.options.buildPageUrl)) {
            return this.options.buildPageUrl(pageIndex);
        }
        return "javascript:;";
    },
    addPageSizeSelect: function(htmlArr) {
        var options = this.options,
            html = ['<ul class="pagination" style="margin-right:15px">'].concat(htmlArr)

        html.push('</ul>')
        html.push('<select class="form-control select-page-size">')
        options.pageSizeList.forEach(function(num) {
            var isSelect = num === options.pageSize ? ' selected' : ''
            html.push('<option value="' + num + '"' + isSelect + '>' + num + '</option>')
        })
        html.push('</select>')

        return html
    },
    getPageIndex: function () {
        return this.options.pageIndex;
    },
    setPageIndex: function (pageIndex) {
        this.options.pageIndex = pageIndex;
        this.renderHtml();
    },
    setItemCount: function (itemCount) {
        this.options.pageIndex = 0;
        this.options.itemCount = itemCount;
        this.renderHtml();
    },
    setPageSize: function(pageSize) {
        this.options.pageSize = pageSize;
        this.renderHtml();
    },
    updateOptions: function(options) {
        $.extend(this.options, options || {})
        this.renderHtml()
    }
};


$.fn.pager = function (options) {
    options = $.extend(defaults, options || {});

    return new Pager($(this), options);
}