/* eslint-disable */
import React from 'react'

import Util from '../../utils/util'
console.log('biaud')

//var UtilEd = new Util()
let idNumberEchartsPie = 1
class EchartsPie extends React.Component {
    constructor(props) {
        super(props);
        idNumberEchartsPie=1
        this.state = {id: "EchartsPie"+idNumberEchartsPie};
    }
    componentDidMount() {
        //console.log(this.props.option);
        require.ensure([],require =>{

            var echarts = require('echarts/lib/echarts');
            require('echarts/lib/chart/pie');
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    show:false,
                    data:['直接访问','邮件营销','联盟广告']
                },
                color:
                ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['10%', '70%'],
                        avoidLabelOverlap: false,

                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},

                        ]
                    }
                ]
            };

            var myEChart = echarts.init(document.getElementById(this.state.id));
            Util.extend(option,this.props.option);
            myEChart.setOption(option)
        },'echartsline');


    }
    render() {


          return (

              <div id={this.state.id}
              style={this.props.routes?this.props.routes[1].styleSet:this.props.styleSet}
               className='ehcarts-pie'>

              </div>
          )


    }
}

export default EchartsPie;
