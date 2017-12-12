/**
 * 描述：全局工具类
 * 不要更改非自己定义的方法
 */


module.exports = {
    /**
     * 功能：扩展对象属性
     * 作者: Abbott.liu
     * 时间：2017年11月18日
     */


    extend() {

        var src;
        var copyIsArray;
        var copy;
        var name;
        var options;
        var clone;
        var target = arguments[0] || {};
        var i = 1;
        var length = arguments.length;
        var deep = false;

        if (typeof target === 'boolean') {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if (typeof target !== 'object' && !isFunction(target)) {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {

                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && (isObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        } else {
                            clone = src && isObject(src) ? src : {};
                        }

                        target[name] = extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }


                }
            }

        }

        return target;

    },
    /**
     * 功能：刷新大屏尺寸
     * 作者: Abbott.liu
     * 时间：2017年11月18日
     */

    //全屏缩放

    resizeWindow() {


        var baseWidth = 1920;

        var body = document.querySelector('body');
        var scale = document.querySelector('#app');

        function adaptiveScreen() {
            var per = body.clientWidth / baseWidth;
            scale.style.transform = 'scale(' + per + ')';
            scale.style.transformOrigin = 'left top';
        }

        var timeout = null;
        window.onresize = function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                adaptiveScreen();
            }, 400);
        };
        adaptiveScreen();


    },
    clourse(){
        let clourse = (function(){
            var a = 1;
            return function(){
                return a++;
            }
        })(this);
        this.clourse = clourse;
    },
    /**
     * 功能：键盘响应事件
     * 作者: Abbott.liu
     * 时间：2017年11月18日
     */
    keyboardClick(direction){
        switch (direction) {
            case 'top':
                console.log('上');
                break;
            case 'left':
                console.log('左');
                break;
            case 'right':
                console.log('右');
                break;
            case 'bottom':
                console.log('下');
                break;
            case 'space':
                console.log('空格');
                var docElm = document.documentElement;
                docElm.webkitRequestFullScreen();
                break;
        }
    },
    /**
     * 功能：判断是否是函数
     * 作者: star.chen
     * 时间：2017年11月18日
     */
    isFunction(obj){
        return typeof obj === 'function';
    },
    caller(callback) {

        var args = arguments;
        var context = args.length === 1 ? null : args[args.length - 1];
        var params = Array.prototype.slice.call(args, 1, args.length);

        if (this.isFunction(callback)) {
            return callback.apply(context, params);
        }
    },
    /**
     * 功能：遍历元素
     * 作者: star.chen
     * 时间：2017年11月18日
     */
    each(obj,fn){
        var this_ = this
        if (!(obj && fn)) {
            return;
        }
        // 优先使用forEach,针对数组
        if (obj.forEach && this.isFunction(obj.forEach)) {
            obj.forEach(function (item, i) {
                this_.caller(fn, item, i, item);
            });
        } else if (obj.length === +obj.length) {
            for (var i = 0, len = obj.length; i < len; i++) {
                var item = obj[i];

                this_.caller(fn, item, i, item);
            }
        } else {
            // 遍历对象
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    this_.caller(fn, obj[key], key, obj[key]);
                }

            }
        }
    },
    /**
     * 功能：websocket 封装
     * 作者: star.chen
     * 时间：2017年11月18日
     */
    ws(topic,interval,callback){

        var client = null;
        var  url=ENV.ws.url;
        var login = ENV.ws.username;
        var passcode =  ENV.ws.password;
        interval=interval||ENV.baseInterval;

        function ws(callback) {
            if (client) {
                callback(client);
            } else {
                require.ensure([], function(require){
                    var Stomp = require('../lib/stomp');
                    client = Stomp.default.client(url);
                    client.connect(login, passcode, function() {
                        callback(client);
                    });
                },'Stomp')

            }

        }

        ws(function(client) {
            client.send(ENV.ws.topicContrl, {}, JSON.stringify({topic:topic,interval:interval}));
            client.subscribe(topic, function(d) {
                //console.log("d"+d)
                //如果后台服务异常 不再执行
                let data = d;

                data =  JSON.parse(data.body)
                //console.log(data)

                if((data.code!=200&&data.msg!='success')||(Object.prototype.toString.call(data.data))!="[object Object]"){
                    console.error('后台服务异常');
                    return;
                };
                callback(data);
            })
        });
    },

    /**
     * 功能：获取假数据
     * 作者: star.chen
     * 时间：2017年11月18日
     */
    getMockJson(object,callback){
        fetch(object.url, {
            method: 'get',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }).then(response => response.json())
            .then(function (data) {
                if((data.code!=200&&data.msg!='success')||(Object.prototype.toString.call(data.data))!="[object Object]"){
                    console.error('后台服务异常');
                    return;
                };
                callback(data)
            })
            .catch(function (error) {
                console.log('Request failed', error);
            })
    },
    /*
            功能：用于数据处理
            作者: star.chen
            时间：2017年11月18日
            用于数据处理ex:
              var data = [
                  {"xAxisData":"周一","seriesOne":120,"serieTwo":220},
                  {"xAxisData":"周二","seriesOne":132,"serieTwo":182},
                  {"xAxisData":"周三","seriesOne":101,"serieTwo":191},
                  {"xAxisData":"周四","seriesOne":134,"serieTwo":234},
                  {"xAxisData":"周五","seriesOne":90,"serieTwo":290},
                  {"xAxisData":"周六","seriesOne":230,"serieTwo":330},
                  {"xAxisData":"周日","seriesOne":210,"serieTwo":310}
              ];
               var turnedData = turnDataToCanBeUse(data);
               console.log(turnedData);
                [
                  {"xAxisData":["周一","周二","周三","周四","周五","周六","周日"]},
                  {"seriesOne":[120, 132, 101, 134, 90, 230, 210]},
                  {"serieTwo": [220, 182, 191, 234, 290, 330, 310]}
              ];
               turnedData.xAxisData // ["周一","周二","周三","周四","周五","周六","周日"]
               ....
     */
    turnDataToCanBeUse(data)
    {
        let dataArr = [];
        for(var j=0;j<Object.keys(data[0]).length;j++){
            var arr = [];
            for(var i=0;i<data.length;i++){
                arr.push(data[i][Object.keys(data[0])[j]]);
            }
            dataArr.push(arr);
        }


        let keys = Object.keys(data[0]);
        let drr = [];
        for(var i=0;i<dataArr.length;i++){
            drr[keys[i]] = {};
            drr[keys[i]] = dataArr[i];
        }
        return drr;
    },
    /**
     * 功能：组件拖拽事件
     * 作者: Abbott.liu
     * 时间：2017年11月19日
     */
    mouseMove(id, obj, e) { // 鼠标移动事件
        let mouseX, mouseY;
        let objX, objY;
        let isDowm = false;
        var div = document.getElementById(id);
        var x = e.clientX;
        console.log('x');
        var y = e.clientY;
        if (isDowm) {
            div.style.left = parseInt(objX) + parseInt(x) - parseInt(mouseX) + "px";
            div.style.top = parseInt(objY) + parseInt(y) - parseInt(mouseY) + "px";
        }
    }


}



