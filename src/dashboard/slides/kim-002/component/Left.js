/* eslint-disable */
import React from 'react'

import Hchart_Gauge_Advancad from '../../../components/hchart-gauge-advanced'
import Text from '../../../components/Text'
// import '../style/main.css'
import station from '../images/214_03.png'
import Number from "../../../components/Number/index";
class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }

    componentDidMount() {
       // console.log(this.props.data.data.chart1[0].name)

    }


    render() {
        return (
            <div  style={{width: 1071, height: 661}}>
                <Text
                    styleSet=
                        {{position: 'absolute', color: '#fed531', fontSize: '22px', left: '236px', top: '45px'}}
                    text={'数据中心'}
                />
                <Text
                    styleSet=
                        {{position: 'absolute', color: '#000', fontSize: '22px', left: '102px', top: '102px'}}

                    text={'物理环境'}
                />
                <Text
                    styleSet={{position: 'absolute', color: '#fff', fontSize: '22px', left: '119px', top: '220px'}}
                    text={this.props.data.data.chart1[0].name}
                />
                <Number className='serverNumberData' styleSet=
                    {{
                        position: 'absolute',
                        left: '163px',
                        top: '260px',
                        fontSize: '30px',
                        color: '#fff'
                    }}
                        number={this.props.data.data.chart1[0].value}

                />

                <Hchart_Gauge_Advancad
                    option={{
                        yAxis: {
                            stops: [
                                [0.1, '#fec231'], // green
                                [0.5, '#fec231'], // yellow
                                [0.9, '#fec231'] // red
                            ],
                            labels: {
                                enabled:false,
                                y: 12
                            },
                            min:0,
                            max:100
                        },
                        series: [
                            {
                                name: 'Speed',
                                borderColor:'#990000',

                                data: [this.props.data.data.chart2],
                                dataLabels: {
                                    color:'#600e19',
                                    format: '<div class="gaugetext" ' +
                                    'style="text-align:center;' +
                                    'font-size:18px;color:#fff"><span>{y}%</span></div>'

                                },
                                tooltip: {
                                    valueSuffix: ' km/h'
                                }
                            }]
                    }}
                    styleSet=
                        {{
                            left: '18px',
                            top: '394px',
                            fontSize: '30px',
                            color: '#fff',
                            width: '215px',
                            height: '110px'
                        }}/>

                <Text
                    styleSet=
                        {{position: 'absolute', color: '#fef8d7', fontSize: '16px', left: '191px', top: '439px'}}

                    text={' 机房湿度'}
                />


                <Hchart_Gauge_Advancad

                                        option={{
                                            yAxis: {
                                                stops: [
                                                    [0.1, '#fec231'],
                                                    [0.5, '#fec231'],
                                                    [0.9, '#fec231']
                                                ],
                                                labels: {
                                                    enabled:false,
                                                    y: 12
                                                },
                                                min:0,
                                                max:100
                                            },
                                            series: [
                                                {
                                                    name: 'Speed',
                                                    borderColor:'#990000',

                                                    data: [this.props.data.data.chart3],
                                                    dataLabels: {
                                                        color:'#600e19',
                                                        format: '<div class="gaugetext" ' +
                                                        'style="text-align:center;' +
                                                        'font-size:18px;color:#fff"><span>{y}%</span></div>'

                                                    },
                                                    tooltip: {
                                                        valueSuffix: ' km/h'
                                                    }
                                                }]
                                        }}
                                        styleSet=
                                           {{
                                               left: '18px',
                                               top: '525px',
                                               fontSize: '30px',
                                               color: '#fff',
                                               width: '215px',
                                               height: '110px'
                                           }}/>

                <Text styleSet=
                          {{position: 'absolute', color: '#fef8d7', fontSize: '16px', left: '191px', top: '569px'}}
                      text={' 机房湿度'}
                />
                <div className="station"
                     style={{position:'absolute',left:"72px",top:'675px'}}>
                    <img src={station}/>
                    <span>

                    </span>

                </div>

                <Number number={this.props.data.data.chart4[0].value} styleSet={{
                    left:'88px',
                    top:'694px',
                    width: '63px',
                    height: '42px',
                    textAlign:'center',
                    fontSize:'39px',
                    color:'#fef8d7'
                }}/>
                <Text text={'活 动'} styleSet={{
                    left:'73px',
                    top:'744px',
                    width: '94px',
                    height: '30px',
                    textAlign:'center',
                    fontSize:'16px',
                    color:'#fef8d7'
                }}/>

                <Number number={this.props.data.data.chart4[1].value} styleSet={{
                    left:'206px',
                    top:'694px',
                    width: '63px',
                    height: '42px',
                    textAlign:'center',
                    fontSize:'39px',
                    color:'#fef8d7'
                }}/>
                <Text text={'丢失'} styleSet={{
                    left:'190px',
                    top:'744px',
                    width: '94px',
                    height: '30px',
                    textAlign:'center',
                    fontSize:'16px',
                    color:'#fef8d7'
                }}/>

                <Number number={this.props.data.data.chart4[2].value} styleSet={{
                    left:'88px',
                    top:'812px',
                    width: '63px',
                    height: '42px',
                    textAlign:'center',
                    fontSize:'39px',
                    color:'#fef8d7'
                }}/>
                <Text text={'停 用'} styleSet={{
                    left:'73px',
                    top:'862px',
                    width: '94px',
                    height: '30px',
                    textAlign:'center',
                    fontSize:'16px',
                    color:'#fef8d7'
                }}/>


                <Number number={this.props.data.data.chart4[3].value} styleSet={{
                    left:'206px',
                    top:'812px',
                    width: '63px',
                    height: '42px',
                    textAlign:'center',
                    fontSize:'39px',
                    color:'#fef8d7'
                }}/>
                <Text text={'待重启'} styleSet={{
                    left:'190px',
                    top:'862px',
                    width: '94px',
                    height: '30px',
                    textAlign:'center',
                    fontSize:'16px',
                    color:'#fef8d7'
                }}/>



                <Number number={this.props.data.data.chart4[4].value} styleSet={{
                    left:'88px',
                    top:'925px',
                    width: '63px',
                    height: '42px',
                    textAlign:'center',
                    fontSize:'39px',
                    color:'#fef8d7'
                }}/>
                <Text text={'非健康'} styleSet={{
                    left:'73px',
                    top:'975px',
                    width: '94px',
                    height: '30px',
                    textAlign:'center',
                    fontSize:'16px',
                    color:'#fef8d7'
                }}/>

                <Number number={this.props.data.data.chart4[5].value} styleSet={{
                    left:'206px',
                    top:'925px',
                    width: '63px',
                    height: '42px',
                    textAlign:'center',
                    fontSize:'39px',
                    color:'#fef8d7'
                }}/>
                <Text text={'重启'} styleSet={{
                    left:'190px',
                    top:'975px',
                    width: '94px',
                    height: '30px',
                    textAlign:'center',
                    fontSize:'16px',
                    color:'#fef8d7'
                }}/>
            </div>

        )


    }
}


export default Left;
