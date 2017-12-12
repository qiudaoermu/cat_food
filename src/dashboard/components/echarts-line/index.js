/* eslint-disable */
import React from 'react'


import Util from '../../utils/util'
import './echarts-line.css'



class EchartsLine extends React.Component {
    constructor(props) {
        super(props);
        console.log(Util.clourse())
        this.state = {id: "EchartsLine"+Util.clourse()};
        console.log(this.state.id)
    }
    componentDidMount() {
        //console.log(this.props.option);
        require.ensure([],require =>{

            var echarts = require('echarts/lib/echarts');
            require('echarts/lib/chart/line');
            var  option = {

                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data:['邮件营销','联盟广告'],
                    textStyle:{
                        color:'#fff'
                    },
                    right:'10%'

                },

                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    }
                ]
            };
            var myEChart = echarts.init(document.getElementById(this.state.id));
            Util.extend(option,this.props.option);
            myEChart.setOption(option)
        },'echartsline');


    }
    render() {
      console.log(this.props)



        return (

            <div id={this.state.id} style={this.props.routes?this.props.routes[1].styleSet:this.props.styleSet} className='ehcarts-line'>

            </div>
        )



    }
}

export default EchartsLine;
