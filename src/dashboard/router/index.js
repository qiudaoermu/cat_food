/**
 *  作者: Abbott.liu
 *  时间：2017年11月
 *  功能：路由主文件
 */

/*eslint-disable no-unused-vars*/
import React from 'react';
import App from '../utils/application';
// 同步引入
//import HomePage from '../slides/kim-001';
//import HomePage from '../slides/abbott';
import BasicRouter from './routes';


import Cookie from '../utils/cookie';

// 异步引入

// 浏览器的网址
var whref = window.location.href;

// 帮助
var strHelp = ''

// 验证 # 号
var pageTitle= '云智慧';

if(ENV.pageTitleCustom != null || ENV.pageTitleCustom != ''){
    pageTitle = ENV.pageTitleCustom
}
document.title = pageTitle;

// 定时器的标志
var timer_flag = ENV.autoPlay;

if(Cookie.getCookie('timer') == 'on'){
    timer_flag = true
}

//console.log('timer_flag')
//console.log(timer_flag)

var pattern_jh = '[#]'; // 验证 # 的正则表达式
function checkUrl(pat, url){
    var pattern = new RegExp(pat,"i")
    var strTest = url;
    if(pattern.test(strTest) == true) {
        //console.log("项目名称中含有#字符");
        return true;
    }else {
        //console.log("项目名称中没有#字符");
        return false;
    }
}

// 记录页面跳转位置
let flag_history = window.history.state;
console.log('flag_history')
console.log(flag_history)
if(flag_history == null){
    flag_history = 0;
}


//返回之前没页面则返回首页

//console.log('timer_f');

/*
import('jquery').then($=> {

    $('#error').css('color','gray');

}).catch(error => 'An error occurred while loading the component');
*/

function play(){
    flag_history = flag_history+1;
    if(flag_history >= ENV.router.list.length){
        flag_history = 0;
    }
    //console.log(flag_history);
    //App.replaceHistory(flag_history, '页面标题', '#/'+ENV.router.list[flag_history])

    //App.autoFocus('app');
    //window.history.go(0);

    var url = 'http://'+ENV.host+':'+ENV.port+'/#/'+ENV.router.list[flag_history];
    window.location.href = url;

}

/**
 * 设置轮播事件
 */
var int_play = 0 ;

function intervalScreen() {

    if(ENV.router.inteval == null || ENV.router.inteval == 0 || Cookie.getCookie('timer') == 'off'){
        //console.log('ENV.router.inteval')
        //console.log(ENV.router.inteval)
        clearInterval(int_play);
    }else{
        int_play = setInterval(play, ENV.router.inteval);
        //console.log('int_play')
        // console.log(int_play)
        document.getElementById('app').onmouseover = function(){
            clearInterval(int_play)
        }

        document.getElementById('app').onmouseout = function(){
            int_play = setInterval(play, ENV.router.inteval)
        }
    }

}


var intervalScreenFlag = ENV.autoPlay;
if(Cookie.getCookie('timer')=='on'){
    intervalScreenFlag = true
}
if(intervalScreenFlag){
    intervalScreen();
}

/**
 * 单页图片轮播数据存储
 */

if (localStorage.pagecount)
{
    localStorage.pagecount=Number(localStorage.pagecount) +1;
}
else
{
    localStorage.pagecount=1;
}

var shortCutJSON = {};
/**
 * 快捷键帮助菜单
 */
for(var board in ENV.keyboard){
    shortCutJSON[board] = ENV.keyboard[board];
}

// console.log(shortCutJSON);

class RouterContainer extends React.Component {

    constructor(props) {
        super();

        this.state = {
            textHelp: props.text
        }
    }



    componentDidMount() {
        //window.addEventListener('scroll', this.handlePlay.bind(this));
        require.ensure([], function(require) {

            var shortcut = require('../utils/shortcut');

            var wHistory = window.history;

            /*
            console.log('字母O');
            window.location.href = 'http://127.0.0.1:6600/#/first'
            */

            /**
             * 判断是够定义了快捷键
             * @param keyDefault
             */
            function shortCutDefault(keyDefault){
                var valueDefault= shortcut.keyboardDefault[keyDefault];
                if(ENV.keyboard[keyDefault] != null || ENV.keyboard[keyDefault] != ''){
                    valueDefault= ENV.keyboard[keyDefault]
                }
                return valueDefault;
            }

            /**
             * 下面开始增加与快捷键相关事件
             */

            // 全屏
            var fullScreenShow = shortCutDefault('fullScreen');

            shortcut.add(
                fullScreenShow,
                function () {
                    console.log("The bookmarks of your browser will show up after this alert...");
                    var docElm = document.documentElement;
                    /**
                     * 判断各种浏览器，找到正确的方法
                     */

                    //W3C
                    if (docElm.requestFullscreen) {
                        docElm.requestFullscreen();
                    }
                    //FireFox
                    else if (docElm.mozRequestFullScreen) {
                        docElm.mozRequestFullScreen();
                    }
                    //Chrome等
                    else if (docElm.webkitRequestFullScreen) {
                        docElm.webkitRequestFullScreen();
                    }
                    //IE11
                    else if (elem.msRequestFullscreen) {
                        elem.msRequestFullscreen();
                    }
                    App.autoFocus('app');
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });
            // 上
            var homePageShow = shortCutDefault('homePage');
            shortcut.add(
                //ENV.keyboard.homePage,
                homePageShow,
                function () {
                    //console.log("上");
                    wHistory.replaceState(null, '页面标题', '#/'+ENV.router.list[0]);
                    wHistory.go(0);
                    App.autoFocus('app');
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });
            // 下
            var endPageShow = shortCutDefault('endPage');
            shortcut.add(
                endPageShow,
                function () {
                    //console.log("下");
                    wHistory.replaceState(null, '页面标题', '#/'+ENV.router.list[ENV.router.list.length-1]);
                    wHistory.go(0);
                    App.autoFocus('app');
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

            // 左
            var previousPageShow = shortCutDefault('previousPage');
            shortcut.add(
                previousPageShow,
                function () {
                    //console.log('左边');
                    flag_history = flag_history-1;
                    if(flag_history < 0){
                        flag_history = ENV.router.list.length-1;
                    }
                    //console.log(flag_history);
                    var url = 'http://'+ENV.host+':'+ENV.port+'/#/'+ENV.router.list[flag_history]
                    //console.log(url)
                    // url
                    window.location.href = url;
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

            // 右
            var nextPageShow = shortCutDefault('nextPage');
            shortcut.add(
                nextPageShow,
                function () {
                    //console.log("右");
                    flag_history = flag_history+1;
                    if(flag_history >= ENV.router.list.length){
                        flag_history = 0;
                    }
                    //console.log(ENV.router.list[flag_history])
                    var url = 'http://'+ENV.host+':'+ENV.port+'/#/'+ENV.router.list[flag_history]
                    //console.log(url)
                    // url
                    window.location.href = url;
                    // window.history.replaceState(null, "页面标题", "/#/first");
                    //console.log(flag_history);
                    //App.replaceHistory(flag_history, '页面标题', '#/'+ENV.router.list[flag_history])
                    //window.history.go(0);
                    //document.getElementById('app').focus();
                    //App.autoFocus('app');
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

            // 开启大屏自动轮播
            var autoPlayOn = shortCutDefault('autoPlayOn');
            shortcut.add(
                autoPlayOn,
                function () {
                    console.log('开启定时器');
                    Cookie.setCookie('timer','on');
                    //window.history.go(0);

                    intervalScreen();
                    //var int_play = setInterval(play, ENV.router.inteval);
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

            // 关闭大屏自动轮播
            var autoPlayOff = shortCutDefault('autoPlayOff');
            shortcut.add(
                autoPlayOff,
                function () {
                    console.log('定时器关闭');
                    Cookie.setCookie('timer','off');
                    intervalScreen();
                    // window.history.go(0);
                    //timer_flag = cookie.getCookie('timer');
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

            // 开启快捷键菜单
            var helpOn = shortCutDefault('helpOn');

            shortcut.add(
                helpOn,
                function () {
                    console.log('开启帮助菜单');
                    document.getElementById('help').style.display = 'block';
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

            // 关闭快捷键菜单
            var helpOff = shortCutDefault('helpOff');
            shortcut.add(
                helpOff,
                function () {
                    console.log('帮助菜单关闭');
                    document.getElementById('help').style.display = 'none';

                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

            // 数字 1
            shortcut.add(
                ENV.keyboard[1],
                function () {
                    var url = 'http://'+ENV.host+':'+ENV.port+'/#/'+ENV.router.list[0];
                    window.location.href = url;
                    App.autoFocus('app');
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });
            // 数字 2
            shortcut.add(
                ENV.keyboard[2],
                function () {
                    var url = 'http://'+ENV.host+':'+ENV.port+'/#/'+ENV.router.list[1];
                    window.location.href = url;
                    App.autoFocus('app');
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

            // 数字 3
            shortcut.add(
                ENV.keyboard[3],
                function () {
                    var url = 'http://'+ENV.host+':'+ENV.port+'/#/'+ENV.router.list[2];
                    window.location.href = url;
                    App.autoFocus('app');
                },
                {
                    'type': 'keydown',
                    'propagate': true,
                    'target': document
                });

        }, 'shortcut')
    }

    helpComponent = () => {
        require.ensure(['../components/rightList'], (require) => {
            const Message = require('../components/rightList');
            this.setState({
                currentComponent:<RightList shortCutJSON={shortCutJSON}/>
            })
        },'helpComponent')
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handlePlayWill.bind(this));
    }

    handlePlay(e) {
        console.log('浏览器滚动事件');
    }

    handlePlayWill(e) {
        console.log('将要滚动事件');
    }

    render () {
        return (
            <div>
                <BasicRouter />
            </div>

        );
    }
}

export default RouterContainer;




/*
if(checkUrl(pattern_jh, whref)){
    var hrefs = whref.split('#');
    console.log(hrefs);
    var str_href = '';
    for(var i =0;i<hrefs.length;i++){
        str_href += hrefs[i];
    }
    console.log(str_href);
    str_href.replace(/\/\//, '/')
    window.location.href = str_href;
}
*/

