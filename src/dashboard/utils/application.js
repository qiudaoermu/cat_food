/**
 * 描述：全局工具类
 * 作者：Abbott.liu
 * 时间：2017年11月21日
 */

module.exports = {
    /**
     * 功能：ajax读取json文件内容
     * 作者: Abbott.liu
     * 时间：2017年11月20日
     */
    showJson(jvalue){
        var test;
        if(window.XMLHttpRequest){
            test = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            test = new window.ActiveXObject();
        }else{
            //alert("请升级至最新版本的浏览器");
        }
        if(test !=null){
            test.open('GET','jo.json',true);
            test.send(null);
            test.onreadystatechange=function(){
                if(test.readyState==4&&test.status==200){
                    var obj = JSON.parse(test.responseText);
                    for (var name in obj){
                        //console.log(obj[name].key);
                        if(jvalue == obj[name].key){
                            document.getElementById('ab').innerHTML = 'jvalue=='+jvalue;
                        }
                    }
                }
            };
        }
    },
    /**
     * 功能：保存浏览历史
     * 作者: Abbott.liu
     * 时间：2017年11月20日
     */
    pushHistory(state, title, url) {
        window.history.pushState(state, title, url);
    },

    /**
     * 功能：替换浏览历史
     * 作者: Abbott.liu
     * 时间：2017年11月20日
     */
    replaceHistory(state, title, url) {
        window.history.replaceState(state, title, url);
    },

    /**
     * 正则匹配网络地址
     * @param url
     * @returns {boolean}
     */
    checkUrl(url)
    {
        /*
        var v4 = trim(url.value);
        var match = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
        if(v4.match(reg) != null)
        {
            imgs4.setAttribute("src","imges/1.png");
            return true;
        }
        else
        {
            imgs4.setAttribute("src","imges/2.png");
            return false;
        }
        */
    },

    /**
     * 判断输入内容是否为空
     * @constructor
     */
    IsNull(){
        var str = document.getElementById('str').value.trim();
        if(str.length==0){
            alert('对不起，文本框不能为空或者为空格!');//请将“文本框”改成你需要验证的属性名称
        }
    },

    /**
     * 判断日期类型是否为YYYY-MM-DD格式的类型
     * @constructor
     */
    IsDate(){
        var str = document.getElementById('str').value.trim();
        if(str.length!=0){
            var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
            var r = str.match(reg);
            if(r==null)
                alert('对不起，您输入的日期格式不正确!'); //请将“日期”改成你需要验证的属性名称!
        }
    },

    Trim(str)
    {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },

    LTrim(str)
    {
        return str.replace(/(^\s*)/g, '');
    },

    RTrim(str) {
        return str.replace(/(\s*$)/g, '');
    },
    /**
     * 功能：刷新大屏尺寸
     * 时间：2017年11月23日
     */
    resizeWindow(id) {


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

    /**
     * 功能：鼠标移动事件
     * 时间：2017年11月23日
     */
    mouseMove(id, obj, e) {
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
    },
    /**
     * 自动聚焦
     * @param id
     */
    autoFocus(id){
        document.getElementById(id).focus();
    }
};
