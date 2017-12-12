/**
 * environment
 * 全局配置文件，总体设置
 * 应用过程中不要进行修改
 * 作者：Abbott.liu
 * 时间：2017年11月17日
 */

var icon01 = 'slide1.jpg';

var ENV = (function(){


    // 指定首页地址
    var defaultPage = ' ';
    /*
    *topic接口说明
    * /topic/event 动态资源
    * '' 静态假数据
    * */
    return {
        // 首页标题
        pageTitleCustom: '项目名',
        //是否是开发环境
        dev:true,
        // 默认读取虚拟数据
        useMockupDate: true,
        //是否开启服务弹出框
        useWarm:true,
        // 默认不开启轮播功能
        autoPlay: false,

        // 主机地址
        host: '127.0.0.1',
        // 端口号
        port: 6600,
        // 默认首页
        defaultPage:defaultPage,
        // 展示大屏
        displayScreen:{
            topic:'',
            mockJSON:'mockJson/displayScreen/displayScreen.json'
        },
        'kim-001':{
            topic:'/topic/event',
            topicwarm:'/topic/warm',
            mockJSON:'mockJson/kim-001/kim-001.json'
        },
        'kim-002':{
            topic:'/topic/event',
            topicwarm:'/topic/warm',
            mockJSON:'mockJson/kim-002/kim-002.json'
        },
        'kim-003':{
            topic:'/topic/event',
            topicwarm:'/topic/warm',
            mockJSON:'mockJson/kim-003/kim-003.json'
        },
        ws: {
            url: 'ws://10.11.12.69:61623',
            username: 'admin',
            password: 'password',
            topicContrl:'/topic/topic-controller'
        },
        //  单位：min
        baseInterval: 1,
        rm001: {
            topic: 'rm001',
            interval: 20
        },
        router:{
            inteval:5000,
            list:[defaultPage, 'kim001', 'display', 'kim002', 'kim003']
        },
        /**
         * 功能：自定义快捷键
         * 作者：Abbott.liu
         * 可以使用键位如下：
         *      快捷键必须是下面的形式：Ctrl+E 或者 Up
         *      其他允许的键：
         *          所有数字、字母键 – abc 012
         *          特殊字符 - 任何标准键盘上的特殊字符都可以
         *          特殊按键如下
         *              Tab|Space|Return|Enter|Backspace|Scroll_lock|Caps_lock|Num_lock|Pause
         *              Insert|Home|Delete|End|Page_up|Page_down|Left|Up|Right|Down
         *              F1|F2|F3|F4|F5|F6|F7|F8|F9|F10|F11|F12
         *          所有这些按键都是不区分大小写的，可以放心填写
         */
        keyboard:{
            fullScreen: 'Ctrl+D',
            homePage: 'Up', // 直接返回首页
            endPage: 'Down',
            previousPage: 'left',
            nextPage: 'right',
            1: '1', //跳转到第一页
            2: '2', //跳转到第一页
            3: '3', //跳转到第一页
            autoPlayOn: 'Ctrl+R',
            autoPlayOff: 'Ctrl+T',
            helpOn: 'Ctrl+J',
            helpOff: 'Ctrl+K',
            imagePlayOn:'Ctrl+N',
            imagePlayOff:'Ctrl+M'

        },
        /**
         * 首页图片轮播全局变量
         * 作者：Abbott.liu
         * 时间：2017年12月3日
         */
        imagesConfig :{
            // 是否开启图片轮播功能
            imagePlay: true,
            // 轮播起始位置
            currentIndex : 0,
            // 图片轮播间隔
            time : 3000,
            icon : ['slide1.jpg', 'background.png', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg', 'slide5.jpg', 'slide6.jpg', 'bg.png']
        },
    }
})();




/*
global.imageContent{
    icon01 :  ,

};
*/
