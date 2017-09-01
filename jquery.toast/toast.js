/**
 * loading层效果
 * 依赖声明：
 * @require toast.scss
 *
 * 参数
 * @options {Object}
 * @example
 *   Loading.show('this is toast', {
 *      timeout: 3000, // 默认消失时间
 *      onClose: $.noop, // 关闭时的回调
 *      style: {
 *          zIndex: 1000
 *      }
 *   })
 */

 
var defaults = {
    timeout: 1000,
    onClose: $.noop,
    style: {}
}

var tpl = '<div id="toast"><span></span></div>';
var closeTpl = '<span class="glyphicon glyphicon-remove dismiss" />';
var toastType = {
    INFO: 'info',
    SUCCESS: 'success',
    WARAN: 'warn',
    DANGER: 'danger'
}

var Toast = window.Toast = {
    show: function(content, type, options) {
        var self = this
        var opt = $.extend({}, defaults, options || {})
        var elem = $(tpl).hide();

        elem
            .addClass(type)
            .html(content)
            .css(opt.style)
            .appendTo($('body')).fadeIn()
            .on('click', '[data-dismiss]', function() {
                self._close(this)
            })

        if(opt.timeout !== false) {
            setTimeout(function () {
                elem.fadeOut(function() {
                    elem.remove()
                })
                if (typeof opt.onClose === 'function') {
                    opt.onClose()
                }
            }, opt.timeout);
        }else{
            var $close = $(closeTpl);
            elem.append($close);
            $close.click(function(){
                self._close(this)
            });
        }
    },
    _close: function(triggerElem) {
        var $toast = $(triggerElem).closest("#toast")
        $toast.fadeOut(function() {
            $toast.remove()
        })
    },
    // 普通信息
    info: function(content, options) {
        this.show(content || '未知消息', toastType.INFO, options)
    },
    // 成功信息
    success: function(content, options) {
        this.show(content || '操作成功', toastType.SUCCESS, options)
    },
    // 警告信息
    warn: function(content, options) {
        this.show(content || '未知警告', toastType.WARAN, options)
    },
    // 错误信息
    error: function(content, options) {
        this.show(content || '未知错误', toastType.DANGER, options)
    }
}

