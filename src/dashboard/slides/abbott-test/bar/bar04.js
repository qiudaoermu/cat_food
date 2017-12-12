import React from 'react';

/**
 * 描述：Echarts 切换柱状图
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
            var option = {
                xAxis: {
                    data: ['a', 'b', 'c', 'd'],
                    axisTick: {show: false},
                    axisLabel: {
                        formatter: 'barGap: \'-100%\''
                    }
                },
                yAxis: {
                    splitLine: {show: false}
                },
                animationDurationUpdate: 1200,
                series: [{
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#ddd'
                        }
                    },
                    silent: true,
                    barWidth: 40,
                    barGap: '-100%', // Make series be overlap
                    data: [60, 60, 60, 60]
                }, {
                    type: 'bar',
                    barWidth: 40,
                    z: 10,
                    data: [45, 60, 13, 25]
                }]
            };

            var barGaps = ['30%', '-100%'];
            var loopIndex = 0;
            // 使用刚指定的配置项和数据显示图表。
            setInterval(function () {
                var barGap = barGaps[loopIndex];

                myChart.setOption({
                    xAxis: {
                        axisLabel: {
                            formatter: 'barGap: \'' + barGap + '\''
                        }
                    },
                    series: [{
                        barGap: barGap
                    }]
                });
                loopIndex = (loopIndex + 1) % barGaps.length;

            }, 2000);

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




