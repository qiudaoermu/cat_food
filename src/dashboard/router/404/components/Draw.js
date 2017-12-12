import React from 'react';
import {
    drawOn
} from '../../../utils/draw';
import backImg from '../images/back.jpg'
import '../css/web.css';

/**
 * 测试拖拽、按需加载功能
 */



//import $ from 'jquery';
//import highcharts from 'highcharts';


function getComponentJquery() {

    return import(/* webpackChunkName: "jquery" */ 'jquery').then($=> {
        //在这里写代码
        $('#error').css('color','green');
    }).catch(error => 'An error occurred while loading the component');

}


class Draw extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        allowX: true,
        allowY: true,
        hasDraggerHandle: false,
        isUserMove: true
    }

    state = {
        /** x轴位移，单位是px */
        x: null,

        /** y轴位移，单位是px */
        y: null,

        /**鼠标点击元素的原始位置，单位是px */
        originX: 0,
        originY: 0,

        /**已经移动的位移，单位是px */
        lastX: 0,
        lastY: 0
    }

    handleDrawOn(e){
        //console.log(e);

        var draw01=document.getElementById('draw01');
        //console.log(draw01.offsetLeft);
        //console.log(e.clientX);
        //drawOn(e, draw01)
        //e.persist();
        var oEvent = e;
        console.log(oEvent)
        // clientX 事件属性返回当事件被触发时鼠标指针向对于浏览器页面（或客户区）的水平坐标
        // offsetLeft 返回当前元素的左边界到它的包含元素的左边界的偏移量，以像素为单位
        //
        drawOn(oEvent.clientX, oEvent.clientY, draw01.offsetLeft, draw01.offsetTop, draw01)

        /*
        var oDiv = draw01;
        console.log(oEvent);
        console.log('拖拽了');
        var x=0;

        oEvent.clientX = 0;
        oEvent.clientY = 0;
        var y=0;
        x=oEvent.clientX-oDiv.offsetLeft;
        y=oEvent.clientY-oDiv.offsetTop;
        console.log(x+'='+y);

        var distanceX = oEvent.clientX - oDiv.offsetLeft;
        var distanceY = oEvent.clientY - oDiv.offsetTop;
        document.onmousemove = function(ev){

            oDiv.style.left = oEvent.clientX - distanceX + 'px';
            oDiv.style.top = oEvent.clientY - distanceY + 'px';
        };
        document.onmouseup = function(){

            document.onmousemove = null;
            document.onmouseup = null;
        };
        */
    }

    componentDidMount() {
        getComponentJquery().then(component => {
            //document.body.appendChild(component);
        })


        //document.getElementById('ec').style['width'] = '500px';
        //document.getElementById('ec').style['height'] = '300px';

        var draw01=document.getElementById('draw01');

        /*
        draw01.addEventListener('onmousedown',function(){
            var e = event || window.event || arguments.callee.caller.arguments[0];
        });

        */
        /*
        window.addEventListener('onmousedown',function(e){
            var oDiv=document.getElementById('draw01');
            var oEvent=ev||event;
            var x=0;
            var y=0;
            x = oEvent.clientX-oDiv.offsetLeft;
            y = oEvent.clientY-oDiv.offsetTop;
            console.log(x+'='+y);

        })
        */
        /**
         getComponentECharts().then(component => {
         //document.body.appendChild(component);
        })
         */

    }

    render () {
        var classString = 'whole';
        var errorStyle = {
            fontSize: 35
        };

        return (
            <div>


                <h1 id={'draw01'} onMouseDown={this.handleDrawOn.bind(this)}>可拖拽永久保留拖拽后位置</h1>
                <div className={'b'}>
                    <p id='error' style={ errorStyle }>
                        暂时未能找到您查找的页面<br />
                        可能输入的网址错误或此页面不存在<br />
                        <span id='num'></span>秒后自动跳转到主页
                    </p>
                </div>
            </div>
        )
    }

}



