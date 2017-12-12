/* eslint-disable */
import React from 'react'


import './hchart-gauge-active.css'

import Util from '../../utils/util'

class HchartGaugeActive extends React.Component {
    constructor(props) {
        super(props);

        this.state = {id: "HchartGaugeActive"+Util.clourse()};
    }
    componentDidMount() {


        require.ensure([], require=>{
            var Highcharts = require('highcharts/highcharts');
              var highchartsMore = require('highcharts/highcharts-more');
            var highchartsMore = require('highcharts/highcharts-more');
            var solidGauge = require('highcharts/modules/solid-gauge');
            solidGauge(Highcharts);
            highchartsMore(Highcharts);
            var gaugeOptions = {
                chart: {
                    type: 'solidgauge',
                    backgroundColor:'rgba(0,0,0,0)'
                },
                plotOptions:{
                    solidgauge:{
                        dataLabels:{
                            borderWidth: 0,
                            style: {
                                fontSize: '12px'
                            },
                            y:-20,
                            format: '<span style="text-shadow:none">{point.y}%</span>',
                            shadow: false,
                            color:'#ffffff'
                        },
                        animation: {
                            duration: 4000
                        },
                        innerRadius: "85%",
                        color:'green',

                        stickyTracking:false
                        //配置linecap\borderWidth
                    }
                },
                title: null,
                yAxis:{
                    tickPositions:[],
                    lineWidth:0,
                    min:0,
                    max:100,
                    labels: {
                        enabled:false,
                        y: 12
                    },
                },
                tooltip: {
                    valueSuffix: ' km/h'
                },

                series:[{
                    name: 'Speed',
                    borderColor:'#990000',

                    data: [50],
                    dataLabels: {
                        color:'#600e19',
                        format: '<div class="gaugetext" ' +
                        'style="text-align:center;' +
                        'font-size:18px;color:#fff"><span>{y}%</span></div>'

                    }
                }],
                credits: {
                    enabled: false
                },
                pane:{
                    background: [{
                        innerRadius:'70%',
                        outerRadius:'110%',
                        backgroundColor: '#272727',
                        borderWidth: 2,
                        borderColor:'#fed531'
                    },
                        {
                            innerRadius:'70%',
                            outerRadius:'70%',
                            backgroundColor: '#272727',
                            borderWidth: 0,
                            borderColor:Highcharts.getOptions().colors[1]
                        }
                    ],

                    size:'100%',
                    startAngle:0,
                    endAngle:360,
                    center: ['50%', '50%']
                }
            };
            Util.extend(gaugeOptions,this.props.option);
            var chart = Highcharts.chart(this.state.id, gaugeOptions);
        },'HighchartActive')



    }

    render() {

        return (
                <div id={this.state.id}  className='hchart-gauge-active'
                     style={this.props.routes?this.props.routes[1].styleSet:this.props.styleSet}>
                     </div>
        )
    }
}


export default HchartGaugeActive;
