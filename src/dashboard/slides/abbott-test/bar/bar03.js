import React from 'react';
import echarts from 'echarts';

/**
 * 点线柱状图
 */
class Basic extends React.Component {

    constructor() {
        super();
    }


    componentDidMount() {


        // 指定图表的配置项和数据


        var myChart = echarts.init(document.getElementById('main'));




        var option = {
            title: {
                text: '自定义柱状图'
            },
            legend: { // 图例
                type: 'plain', // 'scroll' 可滚动翻页的图例。当图例数量较多时可以使用
                show: 'true',
                orient: 'vertical', // 图例列表的布局朝向  horizontal 水平的
                left:'center', // 图例组件离容器左侧的距离
                right: 10,
                top: 20,
                bottom: 20, // 图例组件离容器下侧的距离
                data: [{
                    name: '数据统计表',
                    // 强制设置图形为圆。
                    icon: 'circle',
                    // 设置文本为红色
                    textStyle: {
                        color: 'red'
                    }
                }],

                backgroundColor: 'rgba(128, 128, 128, 0.5)',
                // 其中 {current} 是当前页号（从 1 开始计数），{total} 是总页数
                pageFormatter: '{current}/{total}' //图例控制块中，页信息的显示格式
            },

            // 直角坐标系内绘图网格
            grid: {
                show: true,
                left:  350 // grid 组件离容器左侧的距离
            },

            //工具箱，每个图表最多仅有一个工具箱
            toolbox: {
                show: true,
                feature: {
                    //辅助线标志
                    mark: {show: true},
                    //dataZoom，框选区域缩放，自动与存在的dataZoom控件同步，分别是启用，缩放后退
                    dataZoom: {
                        show: true,
                        title: {
                            dataZoom: '区域缩放',
                            dataZoomReset: '区域缩放后退'
                        }
                    }
                }
            },

            tooltip: {},

            /**
             *  'value' 数值轴，适用于连续数据。
             *  'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
             */
            xAxis: {
                name: '想法',
                type: 'value',
                //data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "无敌"]
            },
            yAxis: {},
            series: [{
                name: '数据统计表',
                type: 'bar',
                data: [
                    [12, 66],
                    [53, 6],
                    [103, 56],
                    [73, 16],
                    [20, 60]
                ],
                // 柱条的宽度
                barWidth: 20,
                // 柱间距离
                barGap: 50

            }]
        };

        myChart.setOption(option);

    }


    render() {
        let divStyle = {
            width: 1200,
            height: 800,
        }



        return (

            <div className='examples'>
                <div className='parent'>
                    <label> 我的 </label>
                    <div id={'main'} style={divStyle}></div>

                </div>
            </div>
        )
    }
}

export default Basic;
