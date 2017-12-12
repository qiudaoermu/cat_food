import React from 'react';
import Foundation from '../../../components/ECharts-Container';

/**
 * 柱状图例子
 */
class AbbottTest extends React.Component {
    constructor() {
        super();

        this.state = {
            width: 800,
            height:800,
            isRed: true,
            className01: 'data-ec1',
            classPosition01:{

            },
            className02: 'data-ec2',
            classPosition02:{

            },
            optionECharts: {
                title: {
                    text: '测试柱状图'
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
                tooltip: {},


                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "无敌"]
                },
                yAxis: {},
                series: [{
                    name: '数据统计表',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20, 90]
                }]
            }
        }

        this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {
        console.log('isRed')
        this.setState({isRed : !this.state.isRed});
        console.log(this.state.isRed)

    }

    render() {
        var divStyle ={

        }

        var redStyle = {
            display: 'block',
            width: 500,
            height: 500
        };


        var  blueStyle= {
            display: 'none'
        };


        return (

            <div style={divStyle} className='data-line'>
                <div onClick={this.handleClick} >
                    <Foundation defaultProps={this.state.optionECharts}
                                height={this.state.height}
                                width={this.state.width}
                                classValue={this.state.className01}
                    />
                </div>


            </div>
        )
    }
}

export default AbbottTest;
