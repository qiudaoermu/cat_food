import React from 'react'

import { Foundation } from '../../components/ECharts-HOC'

class EChartsHOC extends React.Component {

    constructor() {
        super();
        //localStorage.username='再见';
        this.state = {
            // 基础层
            style:{
                className: 'dataECharts',
                width: 500,
                height:500
            },

            // 弹出层
            extendStyle:{
                className: 'extend-dataECharts',
                width: 300,
                height:300,
                position: 'absolute',
                left:900,
                top:450,
                display: 'block'
            },

            // ECharts 样式
            optionECharts: {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
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
        //this._init();
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

EChartsHOC = Foundation(EChartsHOC);

export default EChartsHOC;
