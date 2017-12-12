/**
 * 功能：帮助函数库
 * 作者：Abbott.liu
 * 时间：2017年12月
 */

(function() {

    // 使浏览器支持:scope选择器

    var container = document.createElement('div');

    // 检测浏览器是否支持:scope选择器
    try {

        container.querySelectorAll(':scope *');

    } catch (e) {

        // :scope正则
        var scopeReg = /^\s*:scope/gi;

        function overrideSelector(method) {
            var prototype = Element.prototype;

            var oldMethod = prototype[method];

            prototype[method] = function(selector) {

                var nodeList;
                var tempId = false;
                var tempContainer = false;

                if (!selector.match(scopeReg)) {
                    // 没有使用:scope选择器
                    return oldMethod.call(this, selector);
                }

                selector = selector.replace(scopeReg, '');

                // 没有父级元素,给它临时生成一个
                if (!this.parentNode) {

                    container.appendChild(this);
                    tempContainer = true;
                }

                var parentNode = this.parentNode;

                // 没有ID, 临时给一个
                if (!this.id) {
                    this.id = 'scopeQuerySelectorTempId' + (new Date()).getTime();
                    tempId = true;
                }

                // 用原生方法查找元素
                nodeList = oldMethod.call(parentNode, '#' + this.id + ' ' + selector);

                // 删掉临时ID
                if (tempId) {
                    this.id = '';
                }

                // 从临时的父级节点中删除
                if (tempContainer) {
                    container.removeChild(this);
                }

                // 返回匹配结果
                return nodeList;
            }
        }

        // 重写querySelector和querySelectorAll方法
        overrideSelector('querySelector');
        overrideSelector('querySelectorAll');

    }
})();
