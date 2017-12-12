/* eslint-disable */
import React from 'react'


import './hchart-gauge-advanced.css'

import Util from '../../utils/util'




class Hchart_Gauge_Advancad extends React.Component {
    constructor(props) {
        super(props);
        var random = Math.random()*100
        this.state = {id: "Hchart_Gauge_Advancad"+Util.clourse()};
    }
    componentDidMount() {



        require.ensure([], require=>{
            var Highcharts = require('highcharts/highcharts');
            var highchartsMore = require('highcharts/highcharts-more');
            var solidGauge = require('highcharts/modules/solid-gauge');
            highchartsMore(Highcharts);
            solidGauge(Highcharts);
            var gaugeOptions = {
                chart: {
                    type: 'solidgauge',
                    backgroundColor: 'rgba(0,0,0,0)',
                },
                title: null,
                pane: {
                    center: ['50%', '50%'],
                    size: '100%',
                    startAngle: -150,
                    endAngle: 150,
                    background: {
                        backgroundColor: Highcharts.Color('#fff').setOpacity(0.1).get(),
                        borderColor:'#f4e7b0',
                        innerRadius: '80%',
                        outerRadius: '100%',
                        shape: 'arc',
                        borderWidth:0
                    }
                },
                tooltip: {
                    enabled: false
                },
                // the value axis
                yAxis: {
                    stops: [
                        [0.1, '#bac81e'], // green
                        [0.5, '#DDDF0D'], // yellow
                        [0.9, '#DF5353'] // red
                    ],
                    lineWidth: 0,
                    minorTickInterval: null,
                    tickPixelInterval: 400,
                    tickWidth: 0,
                    labels: {
                        enabled:false,
                        y: 12
                    },
                    min:0,
                    max:100
                },
                credits: {
                    enabled: false
                },
                series: [
                    {
                        name: 'Speed',
                        borderColor:'#990000',

                        data: [50],
                        dataLabels: {
                            color:'#600e19',
                            format: '<div class="gaugetext" ' +
                            'style="text-align:center;' +
                            'font-size:18px;color:#fff"><span>{y}℃</span></div>'

                        },
                        tooltip: {
                            valueSuffix: ' km/h'
                        }
                    }],
                plotOptions: {
                    solidgauge: {
                        borderWidth:'0px',
                        dataLabels: {
                            y: -12,
                            borderWidth: 0,
                            useHTML: true
                        },
                        innerRadius: "85%",
                        linecap: 'round'
                    }
                }
            };
            Util.extend(gaugeOptions,this.props.option);
            var chart = Highcharts.chart(this.state.id, gaugeOptions);
        },'HighchartsAdvanced')
    }



    render() {

        return (
                <div id={this.state.id}
                     className="Hchart_Gauge_Advancad"

                     style={this.props.styleSet}></div>
        )
    }
}


export default Hchart_Gauge_Advancad;
