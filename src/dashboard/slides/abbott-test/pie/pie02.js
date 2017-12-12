import React from 'react';

/**
 * 描述：Echarts 千层饼
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

            app.title = '极坐标系下的堆叠柱状图';

            var option = {
                angleAxis: {
                },
                radiusAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四'],
                    z: 10
                },
                polar: {
                },
                series: [{
                    type: 'bar',
                    data: [1, 2, 3, 4],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [2, 4, 6, 8],
                    coordinateSystem: 'polar',
                    name: 'B',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [1, 2, 3, 4],
                    coordinateSystem: 'polar',
                    name: 'C',
                    stack: 'a'
                }],
                legend: {
                    show: true,
                    data: ['A', 'B', 'C']
                }
            };

            // 使用刚指定的配置项和数据显示图表。

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





