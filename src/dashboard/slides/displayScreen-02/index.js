import React from 'react';
import './styles/main.css';
import App from '../../utils/application';

/* eslint-disable */


function getECharts() {

    return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts=> {
        //在这里写代码
        //var $ = require('jquery');
        //
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('ec'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '测试界面1'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }).catch(error => 'An error occurred while loading the component');

}

class Labor extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove() {
        App.mouseMove('mov', this, event);
    }

    componentDidMount() {
        getECharts().then(component => { /* no-unused-vars */

        });



        var dragObj = document.getElementById("world");

        dragObj.style['font-size'] = '105px';

        dragObj.style.left = "0px";
        dragObj.style.top = "0px";

        var mouseX, mouseY, objX, objY;
        var dragging = false;

        dragObj.onmousedown = function (event) {
            event = event || window.event;

            dragging = true;
            dragObj.style.position = "relative";


            mouseX = event.clientX;
            mouseY = event.clientY;
            objX = parseInt(dragObj.style.left);
            objY = parseInt(dragObj.style.top);
        }

        dragObj.onmousemove = function (event) {
            event = event || window.event;
            if (dragging) {

                dragObj.style.left = parseInt(event.clientX - mouseX + objX) + "px";
                dragObj.style.top = parseInt(event.clientY - mouseY + objY) + "px";
            }

        }

        dragObj.onmouseup = function () {
            dragging = false;
        }
    }

    render() {
        //console.log(this.state.data)
        return (
            <div id="mov" onMouseMove={this.handleMouseMove}>
                <div id='world'>界面2</div>
            </div>

        );
    }
}

export default Labor;
