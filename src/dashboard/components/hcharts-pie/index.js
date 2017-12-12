/* eslint-disable */
import React from 'react'


import './hcharts-pie.css'

import Util from '../../utils/util'



class HchartsPie extends React.Component {
    constructor(props) {
        super(props);


        this.state = {id: "Hchart_PieId"+Util.clourse()};
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
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    backgroundColor:'rgba(0,0,0,0)'
                },
                credits: {
                    enabled: false
                }, tooltip: {
                    enabled: false
                },
                title: null,

                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true
                        },
                        showInLegend: false
                    }
                },
                series: [{
                    type: 'pie',
                    innerSize: '20%',

                    data: [
                        {
                            name: 'Chrome',
                            y: 12.8,
                        },
                        {
                            name: 'Safari',
                            y: 12.8,
                        },
                        {
                            name: 'Chrome',
                            y: 12.8,
                        }
                    ]
                }]
            };
            Util.extend(gaugeOptions,this.props.option);
            var chart = Highcharts.chart(this.state.id, gaugeOptions);
        },'HighchartsPie')

    }



    render() {

        return (
            <div id={this.state.id}
                 className="Hchart_Pie"

                 style={this.props.styleSet}></div>
        )
    }
}


export default HchartsPie;
