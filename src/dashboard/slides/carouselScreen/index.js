import React from 'react';

import './styles/slider.css';
// import $ from 'jquery';
class Basic extends React.Component {

    constructor() {
        super();
        this.state = {
            started: true,
            imageUrl01: '../../../../public/imageContent/slide1.jpg'
        }
    }

    /* eslint-disable */
    _init() {

        var interval_id = 0;
        require.ensure([], (require) => {
            //require('../../lib/jquery.flexslider');
            //var $ = require('jquery') + require('../../lib/jquery.flexslider');
            var $ = require('jquery')
            var shortcut = require('../../utils/shortcut');

            var application = require('../../utils/application');

            $(document).ready(function() {
                var length = 0,
                    currentIndex = 0,
                    hasStarted = false, //是否已经开始轮播
                    t = 3000; //轮播时间间隔
                if(ENV.imagesConfig.time != 0 && ENV.imagesConfig.time != null)
                {
                    t = ENV.imagesConfig.time;
                }

                length = $('.slider-panel').length;
                //将除了第一张图片隐藏
                $('.slider-panel:not(:first)').hide();
                //将第一个slider-item设为激活状态
                $('.slider-item:first').addClass('slider-item-selected');
                //隐藏向前、向后翻按钮
                $('.slider-page').hide();
                //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
                $('.slider-panel, .slider-pre, .slider-next').hover(function() {
                    stop();
                    $('.slider-page').show();
                }, function() {
                    $('.slider-page').hide();
                    start();
                });
                $('.slider-item').hover(function(e) {
                    stop();
                    // filter() 方法将匹配元素集合缩减为匹配指定选择器的元素。
                    var preIndex = $(".slider-item").filter(".slider-item-selected").index();
                    currentIndex = $(this).index();
                    play(preIndex, currentIndex);
                }, function() {
                    start();
                });
                $('.slider-pre').unbind('click');
                $('.slider-pre').bind('click', function() {
                    pre();
                });
                $('.slider-next').unbind('click');
                $('.slider-next').bind('click', function() {
                    next();
                });
                /**
                 * 向前翻页
                 */
                function pre() {
                    var preIndex = currentIndex;
                    currentIndex = (--currentIndex + length) % length;
                    play(preIndex, currentIndex);
                }
                /**
                 * 向后翻页
                 */
                function next() {
                    var preIndex = currentIndex;
                    currentIndex = ++currentIndex % length;
                    play(preIndex, currentIndex);
                }
                /**
                 * 从preIndex页翻到currentIndex页
                 * preIndex 整数，翻页的起始页
                 * currentIndex 整数，翻到的那页
                 */
                function play(preIndex, currentIndex) {
                    // fadeIn() 方法使用淡入效果来显示被选元素，假如该元素是隐藏的
                    $('.slider-panel').eq(preIndex).fadeOut(500)
                        .parent().children().eq(currentIndex).fadeIn(1000);
                    $('.slider-item').removeClass('slider-item-selected');
                    $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
                }
                /**
                 * 开始轮播
                 */
                function start() {
                    if(!hasStarted) {
                        hasStarted = true;
                        interval_id = setInterval(next, t);
                    }
                }
                /**
                 * 停止轮播
                 */
                function stop() {
                    clearInterval(interval_id);
                    hasStarted = false;
                }
                //开始轮播
                start();

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

                // 开启首页图片轮播
                var imagePlayOn = shortCutDefault('imagePlayOn');
                shortcut.add(
                    imagePlayOn,
                    function () {
                        console.log('开启图片定时器');
                        localStorage.imageTimer='on';
                        interval_id = setInterval(next, t);
                        console.log(interval_id);
                        localStorage.carousel_interval_id= interval_id;
                        application.autoFocus('app');
                        // 刷新当前页面
                        //window.history.go(0);

                        //var int_play = setInterval(play, ENV.router.inteval);
                    },
                    {
                        'type': 'keydown',
                        'propagate': true,
                        'target': document
                    });

                // 关闭首页图片轮播
                var imagePlayOff = shortCutDefault('imagePlayOff');
                shortcut.add(
                    imagePlayOff,
                    function () {
                        console.log('图片定时器关闭');
                        localStorage.imageTimer='off';

                        console.log(interval_id)
                        clearInterval(interval_id);
                        application.autoFocus('app');
                        // 刷新当前页面
                        //window.history.go(0);
                        //timer_flag = cookie.getCookie('timer');
                    },
                    {
                        'type': 'keydown',
                        'propagate': true,
                        'target': document
                    });


            });



        },'CarouselScreenJqueryShortUp')

    }



    _initKeyDown() {
        require.ensure([], (require) => {

            var interval_id = 0;
            //require('../../lib/jquery.flexslider');
            //var $ = require('jquery') + require('../../lib/jquery.flexslider');

            var $ = require('jquery')
            var shortcut = require('../../utils/shortcut');

            var application = require('../../utils/application');

            $(document).ready(function() {
                var length = 0,
                    currentIndex = 0,
                    hasStarted = false, //是否已经开始轮播
                    t = 3000; //轮播时间间隔
                if(ENV.imagesConfig.time != 0 && ENV.imagesConfig.time != null)
                {
                    t = ENV.imagesConfig.time;
                }

                length = $('.slider-panel').length;
                //将除了第一张图片隐藏
                $('.slider-panel:not(:first)').hide();
                //将第一个slider-item设为激活状态
                $('.slider-item:first').addClass('slider-item-selected');
                //隐藏向前、向后翻按钮
                $('.slider-page').hide();
                //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
                $('.slider-panel, .slider-pre, .slider-next').hover(function() {
                    stop();
                    $('.slider-page').show();
                }, function() {
                    $('.slider-page').hide();
                    start();
                });
                $('.slider-item').hover(function(e) {
                    stop();
                    // filter() 方法将匹配元素集合缩减为匹配指定选择器的元素。
                    var preIndex = $(".slider-item").filter(".slider-item-selected").index();
                    currentIndex = $(this).index();
                    play(preIndex, currentIndex);
                }, function() {
                    start();
                });
                $('.slider-pre').unbind('click');
                $('.slider-pre').bind('click', function() {
                    pre();
                });
                $('.slider-next').unbind('click');
                $('.slider-next').bind('click', function() {
                    next();
                });
                /**
                 * 向前翻页
                 */
                function pre() {
                    var preIndex = currentIndex;
                    currentIndex = (--currentIndex + length) % length;
                    play(preIndex, currentIndex);
                }
                /**
                 * 向后翻页
                 */
                function next() {
                    var preIndex = currentIndex;
                    currentIndex = ++currentIndex % length;
                    play(preIndex, currentIndex);
                }
                /**
                 * 从preIndex页翻到currentIndex页
                 * preIndex 整数，翻页的起始页
                 * currentIndex 整数，翻到的那页
                 */
                function play(preIndex, currentIndex) {
                    // fadeIn() 方法使用淡入效果来显示被选元素，假如该元素是隐藏的
                    $('.slider-panel').eq(preIndex).fadeOut(500)
                        .parent().children().eq(currentIndex).fadeIn(1000);
                    $('.slider-item').removeClass('slider-item-selected');
                    $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
                }
                /**
                 * 开始轮播
                 */
                function start() {
                    if(!hasStarted) {
                        hasStarted = true;
                        interval_id = setInterval(next, t);
                    }
                }
                /**
                 * 停止轮播
                 */
                function stop() {
                    clearInterval(interval_id);
                    hasStarted = false;
                }


                function shortCutDefault(keyDefault) {
                    var valueDefault = shortcut.keyboardDefault[keyDefault];
                    if (ENV.keyboard[keyDefault] != null || ENV.keyboard[keyDefault] != '') {
                        valueDefault = ENV.keyboard[keyDefault]
                    }
                    return valueDefault;
                }

                // 开启首页图片轮播
                var imagePlayOn = shortCutDefault('imagePlayOn');
                shortcut.add(
                    imagePlayOn,
                    function () {
                        console.log('开启图片定时器');
                        localStorage.imageTimer = 'on';
                        application.autoFocus('app');
                        // 刷新当前页面
                        //window.history.go(0);
                        //开始轮播
                        start();
                        //var int_play = setInterval(play, ENV.router.inteval);
                    },
                    {
                        'type': 'keydown',
                        'propagate': true,
                        'target': document
                    });

                // 关闭首页图片轮播
                var imagePlayOff = shortCutDefault('imagePlayOff');
                shortcut.add(
                    imagePlayOff,
                    function () {
                        console.log('图片定时器关闭');
                        localStorage.imageTimer='off';

                        console.log(interval_id)
                        clearInterval(interval_id);
                        application.autoFocus('app');
                        // 刷新当前页面
                        //window.history.go(0);
                        //timer_flag = cookie.getCookie('timer');
                    },
                    {
                        'type': 'keydown',
                        'propagate': true,
                        'target': document
                    });
            });
        },'CarouselScreenShortUp')

    }

    show() {
        console.log('鼠标经过了')
        var url = 'http://127.0.0.1:6600/#/display';
        window.location.href = url;

    }


    hide(n) {
        document.getElementById(n).style.display="none";
    }

    componentDidMount() {

        var that= this;
        console.log(ENV.imagesConfig);

        // 初始化动画

        this._init()

        var cs1 = document.getElementById('cs101');
        // IE浏览器
        if(cs1.attachEvent){
            cs1.attachEvent('onmouseover',function() {
                //show('cs2')
            });
            cs1.attachEvent('onmouseout',function() {
                //hide('cs2')
            });
        }
        // 火狐浏览器、谷歌浏览器
        else if(cs1.addEventListener) {
            cs1.addEventListener('click',function () {//添加一个单击事件（单击时触发function函数）
                that.show()
            },false);

            cs1.addEventListener('mouseout',function () {//添加一个单击事件（单击时触发function函数）
                //hide('cs2')
            },false);
        }
        /*
        if(ENV.imagesConfig.imagePlay)
        {
            if(localStorage.imageTimer == 'on') {

            }
            else if(localStorage.imageTimer == 'off') {
                this._initKeyDown()
            }


        }
        */

        // document.getElementById('cs101').innerHTML = '世界'


        //添加 div
        var img01 = document.createElement("img");


    }

    componentWillMount() {
        //console.log('ImagesConfig.image01.url')
        //console.log(ImagesConfig.image01.url)
    }


    render() {
        var divStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width:1920,
            height: 1080
        }
        //console.log(ImagesConfig.image01.url)

        var image01 = '../../../../public/imagesConfig/images/slide1.jpg';

      


        return (
            <div id='cs101'>
                <div className={'slider'} style={divStyle}>
                    <ul className={"slider-main"}>
                        {ENV.imagesConfig.icon.map(function(i,v)
                            {
                                return (
                                    <li className={"slider-panel"} key={i}>

                                        {
                                            ENV.dev?
                                            <img src={'imageContent/'+ENV.imagesConfig.icon[v]} ></img>:
                                            <img src={'imageContent/'+ENV.imagesConfig.icon[v]} ></img>
                                        }


                                    </li>)
                            })
                        }


                    </ul>

                    <div className={'slider-extra'}>
                        <ul className={'slider-nav'}>
                            {ENV.imagesConfig.icon.map(function(i,v){
                                //console.log('i');
                                //console.log(i);
                                //console.log('v');
                                //console.log(v);
                                return (
                                    <li className={"slider-item"} key={i}>
                                        {v+1}
                                    </li>)
                            })}


                        </ul>
                        <div >
                            <a> </a>
                            <a> </a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    /* eslint-enable */
}

export default Basic;
