import React from 'react'

import { Foundation } from '../../components/ECharts-HOC'


class AbbottTest extends React.Component {

    constructor() {
        super();
        //localStorage.username='再见';
        this.state = {
            isRed : true,
            // 基础层
            style:{
                className: 'dataECharts',
                width: 500,
                height:500
            },

            // 弹出层
            extendStyle:{
                className: 'extend-dataECharts',
                width: 900,
                height:900,
                position: 'absolute',
                left:800,
                top:150,
                display: 'block'
            },

            // ECharts 样式
            optionECharts: {
                title: {
                    text: '新的世界正式开始'
                },
                tooltip: {},
                legend: {
                    data: ['无限']
                },
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子", "无敌"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
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

    componentWillReceiveProps(nextProps) {
        console.log('eContainer')
        console.log(this.state.isRed)
    }

    _init() {
        // 参数设置
        var doc = document.getElementsByClassName(this.state.style.className)[0];
        return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts => {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(doc);
            // 指定图表的配置项和数据
            var option = this.state.optionECharts;
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }).catch(error => 'An error occurred while loading the component');
    }

    componentDidMount() {
        this._init();
    }

    render() {
        var divStyle ={

        }

        return (
            <div>
                <div style={divStyle} className='data-line'>

                </div>

                <div onClick={this.handleClick} className={this.state.style.className} style={{width: this.state.style.width, height: this.state.style.height}}>

                </div>

            </div>
        )
    }
}

AbbottTest = Foundation(AbbottTest);

export default AbbottTest;
