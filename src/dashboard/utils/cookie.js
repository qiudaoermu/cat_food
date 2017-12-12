/* eslint-disable */
/**
 * 功能：浏览器中记录 cookie 数据
 * 作者：Abbott.liu
 * 时间：2017年11月26日
 */



module.exports = {
    //写cookies
    setCookie(name,value) {
        //var Days = 30;
        var Days = 1095; // 3年
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    },

    //读取cookies
    getCookie(name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },

    //删除cookies
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}

/* eslint-enable */
