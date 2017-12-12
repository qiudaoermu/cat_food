import React from 'react';

/**
 * 描述：Echarts 动态数据柱状图
 */

class Foundation extends React.Component {

    constructor() {
        super();
    }

    _init() {
        // 参数设置
        var doc = document.getElementsByClassName('cs001')[0]
        //var optionECharts = this.props.defaultProps;
        return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts => {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(doc);
            // 指定图表的配置项和数据
            var app = {};
            var option = {
                title: {
                    text: '动态数据',
                    subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                legend: {
                    data:['最新成交价', '预购队列']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: {
                    show: false,
                    start: 0,
                    end: 100
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: (function (){
                            var now = new Date();
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                now = new Date(now - 2000);
                            }
                            return res;
                        })()
                    },
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: (function (){
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.push(len + 1);
                            }
                            return res;
                        })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        name: '价格',
                        max: 30,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    },
                    {
                        type: 'value',
                        scale: true,
                        name: '预购量',
                        max: 1200,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        name:'预购队列',
                        type:'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        data:(function (){
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name:'最新成交价',
                        type:'line',
                        data:(function (){
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                l4en++;
                            }
                            return res;
                        })()
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            app.count = 11;
            setInterval(function (){
                axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

                var data0 = option.series[0].data;
                var data1 = option.series[1].data;
                data0.shift();
                data0.push(Math.round(Math.random() * 1000));
                data1.shift();
                data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

                option.xAxis[0].data.shift();
                option.xAxis[0].data.push(axisData);
                option.xAxis[1].data.shift();
                option.xAxis[1].data.push(app.count++);

                myChart.setOption(option);
            }, 2100);

            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }

        }).catch(error => 'An error occurred while loading the component');
    }


    componentDidMount() {

        this._init()
    }



    render() {
        return (
            <div className={'cs001'} style={{width: 800, height: 800}}>

            </div>


        )
    }
}


export default Foundation;





