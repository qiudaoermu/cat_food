/*
function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello, webpack';

    return element;
}

document.body.appendChild(component());
*/

import echarts from 'echarts';


var div01 = document.createElement('div');
div01.setAttribute('id', 'wo');
div01.style.width = '800px';
div01.style.height= '800px';

document.getElementsByTagName("body")[0].appendChild(div01);


var dom = document.getElementById('wo');
var myChart = echarts.init(dom);

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量'],
        x: 'center',
        y: 'bottom'
    },
    grid:{
        show: true,
        width: 800,
        height: 300,
        top: 150,
        backgroundColor: 'rgba(128, 128, 128, 0.5)'
    },
    xAxis: {
        // type: 'value',
        // type: 'category',
        max: 9,
        name: '我的',
        maxInterval: 1,
        // 两边留白策略
        boundaryGap: false,
        //boundaryGap: ['10%', '50%'],
        //boundaryGap: [0, 1],
        nameTextStyle: { // 坐标轴的名字
            color: 'green',
            fontSize: 30,
            align: 'left',
            backgroundColor: 'red'
        },
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
        axisLabel: { // 刻度字体颜色
            show: true,
            textStyle: {
                color: 'orange'
            }
        },
        axisTick:{ // 刻度
            length: 30,
            width: 20
        },
        show: true,
        // 文字偏移距离
        offset: 23,

        axisLine: {
            lineStyle:{
                // 坐标轴线颜色
                // color: 'rgb(228, 228, 228)'
                color: 'blueviolet',
                width: 10,
                type: 'dotted'
            }
        }
    },

    yAxis: {},

    series: [{
        name: '销量',
        type: 'bar',
        bargap: 0,
        data: [5, 20, 36, 10, 10, 20],
        // 柱子宽度
        barWidth: 5,
        barCategoryGap: 0
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




