/* eslint-disable */
import React from 'react'

import EchartsLine from '../../../components/echarts-line'
//var EchartsLine = require('../../../components/echarts-line');
import Text from  '../../../components/Text'
import Number from '../../../components/Number'
import HchartGaugeActive from '../../../components/hchart-gauge-active'
import RightCirle from '../images/212391.png'
import HchartsPie from   '../../../components/hcharts-pie'
import SvgProgress from  '../../../components/svg-progress/index.js'
//console.log(HchartsPie)
//console.log(SvgProgress)
import Util from '../../../utils/util'
class Right extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        var t =  this.props.data.data.chartsRightTop[0].valueProgross;
        //console.log(t)


    }


    render() {


        var data = Util.turnDataToCanBeUse(this.props.data.data.chartsRightMiddle);
        var xAxisData = data.xAxisData;
        var seriesOne = data.seriesOne;
        var seriseTwo = data.serieTwo;
        return (
            <div>
                <div className="top">
                <SvgProgress
                    styleSet={{
                        width: '512px',
                        height: '21px',
                        left: '1314px',
                        top: '96px'
                    }}

                    BlockStyle={{width:10,height:60,color:'#fec231'}}
                    data={this.props.data.data.chartsRightTop[0].valueProgross}

                />
                        <div style={{
                            position:'absolute',
                            top:'148px',left:'936px',
                            width:'320px',
                            height:'244px'
                        }}>
                            <img src={RightCirle}/>
                        </div>
                        <HchartsPie styleSet={{
                            top: "137px",
                            left: "857px",
                            width:'330px',
                            height:'225px'
                        }}
                        option={{
                            colors:['#dcd7ba','#a7a491','#fff9d6'],
                            series: [{
                                type: 'pie',
                                innerSize: '20%',

                                data: [
                                    {
                                        name: '正常',
                                        y: this.props.data.data.chartsRightTop[1].valueN,
                                    },
                                    {
                                        name: '故障',
                                        y: this.props.data.data.chartsRightTop[2].valueD,
                                    },
                                    {
                                        name: '警告',
                                        y:this.props.data.data.chartsRightTop[3].valueW,
                                    }
                                ]
                            }]

                        }}


                        />
                    <Text text={'运行情况'} styleSet={{
                        width: "157px",
                        height: "28px",
                        left: "1161px",
                        top: "92px",
                        color: "rgb(254, 213, 49)",
                        fontSize: "22px",
                        textAlign: "center"}}/>

                        <Number number={this.props.data.data.chartsRightTop[1].valueN}
                                styleSet={{
                                    width: '202px',
                                    height: '50px',
                                    left: '1188px',
                                    top: '190px',
                                    textAlign: 'center',
                                    color:'#fef8d7',
                                    fontSize:'40px'
                                }}
                        />
                        <Text
                            styleSet={{
                                width: '203px',
                                height: '31px',
                                left: '1187px',
                                top:'256px',
                                color:'#fef8d7',
                                fontSize: '21px',
                                textAlign: 'center'
                            }}
                            text={'正 常'}
                        />

                        <Number number={this.props.data.data.chartsRightTop[3].valueW}
                                styleSet={{
                                    width: '202px',
                                    height: '50px',
                                    left: '1398px',
                                    top: '190px',
                                    textAlign: 'center',
                                    color:'#fef8d7',
                                    fontSize:'40px'
                                }}
                        />
                        <Text
                            styleSet={{
                                width: '203px',
                                height: '31px',
                                left: '1398px',
                                top:'256px',
                                color:'#fef8d7',
                                fontSize: '21px',
                                textAlign: 'center'
                            }}
                            text={'警 告'}
                        />

                        <Number number={this.props.data.data.chartsRightTop[2].valueD}
                            styleSet={{
                                width: '202px',
                                height: '50px',
                                left: '1619px',
                                top: '190px',
                                textAlign: 'center',
                                color:'#fef8d7',
                                fontSize:'40px'
                            }}
                    />
                        <Text
                        styleSet={{
                            width: '203px',
                            height: '31px',
                            left: '1620px',
                            top:'256px',
                            color:'#fef8d7',
                            fontSize: '21px',
                            textAlign: 'center'
                        }}
                        text={'故障'}
                    />

                </div>
                <div className="middle">
                    <Text text={'网络带宽情况'}
                          styleSet={{
                            width: '157px',
                            height: '26px',
                            left: '866px',
                            top: '393px',
                            fontSize: '22px',
                            textAlign: 'center'
                    }}/>
                    <Text text={'（Mbps）'}

                          styleSet={{
                              width: '93px',
                              height: '25px',
                              left: '1010px',
                              top: '396px',
                              fontSize: '18px',
                              textAlign: 'center'
                          }}
                    />
                  <EchartsLine
                      styleSet={{width:'988px',height:'367px',position:'absolute',left:'865px',top:'407px'}}
                      option = {{
                          xAxis : [
                              {
                                  type : 'category',
                                  boundaryGap : false,
                                  axisLine:{lineStyle:{color:'#fff'}},
                                  splitLine:{
                                      show:true,
                                      lineStyle:{
                                          color:['#ffc30e']
                                      }
                                  },
                                  data : xAxisData
                              }
                          ],
                          yAxis : [
                              {
                                  type : 'value',
                                  splitLine:{
                                      show:true,
                                      lineStyle:{
                                          color:['#ffc30e']
                                      }
                                  },
                                  axisLine:{lineStyle:{color:'#fff'}},
                              }
                          ],
                          color:['#ffc30e','#fff'],
                          legend: {
                              data:[this.props.data.data.chartsRightMiddleName[0].name,this.props.data.data.chartsRightMiddleName[1].name],
                              textStyle:{
                                  color:'#fff'
                              },
                              right:'10%'

                          },
                          series : [
                          {
                              name:this.props.data.data.chartsRightMiddleName[0].name,
                              type:'line',
                              stack: '总量',
                              itemStyle:{normal:{color:'#fff'}},
                              lineStyle:{normal:{color:'#fff'}},
                              areaStyle: {normal: {color:'#8d8262'}},
                              symbolSize: 20,
                              data:seriesOne
                          },
                          {
                              name:this.props.data.data.chartsRightMiddleName[1].name,
                              type:'line',
                              stack: '总量',
                              symbolSize: 20,

                              itemStyle:{normal:{color:'#ffc30e'}},
                              lineStyle:{normal:{color:'#ffc30e'}},
                              areaStyle: {normal: {color:'#746849'}},
                              data:seriseTwo
                          }
                      ]}}
                  />
                </div>
                <div className="bottom">
                    <Text
                        text={'虚拟环境'}
                        styleSet={{

                            width: '39px',
                            height: '116px',
                            left: '861px',
                            top: '858px',
                            fontSize: '22px',
                            textAlign: 'center',
                            whiteSpace: 'normal'
                        }}
                    />
                    <Text text={'服务器总量'}
                          styleSet={{
                        position:'absolute',
                        left: '991px',
                        fontSize:'16px',
                        color:'#fef8d7',
                        top: '880px'}}/>
                    <Number
                        number={this.props.data.data.chartsRightBottom[0].serverNum}
                            styleSet={{position:'absolute',
                        left:'971px',
                        top:'916px',
                        width: '122px',
                        height: '40px',
                        fontSize:'39px',
                        color:'#fef8d7',
                        textAlign:'center'
                    }}/>
                    <HchartGaugeActive
                        styleSet={{
                            left: '1199px',
                            top: '832px',
                            color: '#fff',
                            width: '160px',
                            height: '160px'
                        }}
                        option={{
                            yAxis: {
                                tickPositions:[],
                                stops: [
                                    [0.1, '#58acac'], // green
                                    [0.5, '#58acac'], // yellow
                                    [0.9, '#58acac'] // red
                                ],
                                lineWidth:0,
                                min:0,
                                max:100,
                                labels: {
                                    enabled:false,
                                    y: 12
                                }
                            },
                            series: [
                                {
                                    name: 'Speed',
                                    borderColor:'#990000',

                                    data: [this.props.data.data.chartsRightBottom[1].use],
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
                    />
                    <Text
                        text={'CPU使用率'}
                        styleSet={{

                            width: '108px',
                            height: '15px',
                            left: '1230px',
                            top: '922px',

                            color: 'rgb(254, 248, 215)',
                            textAlign: 'center'
                        }}
                    />
                    <Number
                        number={this.props.data.data.chartsRightBottom[1].percent}
                        suffix={'KMKHZ'}
                        styleSet={{
                            width: '169px',
                            height: '25px',
                            left: '1201px',
                            top:'990px',
                            textAlign: 'center',
                            color: '#FEF8D7'
                        }}
                        NumberStyle={{
                            fontSize:'20px'
                        }}

                    />

                    <HchartGaugeActive
                        styleSet={{
                            left: '1435px',
                            top: '832px',
                            color: '#fff',
                            width: '160px',
                            height: '160px'
                        }}
                        option={{
                            yAxis: {
                                tickPositions:[],
                                stops: [
                                    [0.1, '#4481e5'], // green
                                    [0.5, '#4481e5'], // yellow
                                    [0.9, '#4481e5'] // red
                                ],
                                lineWidth:0,
                                min:0,
                                max:100,
                                labels: {
                                    enabled:false,
                                    y: 12
                                }
                            },
                            series: [
                                {
                                    name: 'Speed',
                                    borderColor:'#990000',

                                    data: [this.props.data.data.chartsRightBottom[2].use],
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
                    />
                    <Text
                        text={'内存使用率'}
                        styleSet={{

                            width: '108px',
                            height: '15px',
                            left: '1460px',
                            top: '922px',

                            color: 'rgb(254, 248, 215)',
                            textAlign: 'center'
                        }}
                    />

                    <Number

                        number={this.props.data.data.chartsRightBottom[2].percent}
                        suffix={'G'}
                        styleSet={{
                            width: '204px',
                            height: '25px',
                            left: '1415px',
                            top:'990px',
                            textAlign: 'center',
                            color: '#FEF8D7'
                        }}
                        NumberStyle={{
                            fontSize:'20px'
                        }}

                    />
                    <HchartGaugeActive
                        styleSet={{
                            left: '1665px',
                            top: '832px',
                            color: '#fff',
                            width: '160px',
                            height: '160px'
                        }}
                        option={{
                            dataLabels:{
                                borderWidth: 0,
                                style: {
                                    fontSize: '22px'
                                },
                                y:-20,
                                format: '<span style="text-shadow:none">{point.y}%</span>',
                                shadow: false,
                                color:'#ffffff'
                            },
                            series: [
                                {
                                    name: 'Speed',
                                    borderColor:'#990000',

                                    data: [this.props.data.data.chartsRightBottom[3].use],
                                    dataLabels: {
                                        color:'#600e19',
                                        format: '<div class="gaugetext" ' +
                                        'style="text-align:center;' +
                                        'font-size:18px;color:#fff"><span>{y}%</span></div>'

                                    },
                                    tooltip: {
                                        valueSuffix: ' km/h'
                                    }
                                }],
                            plotOptions:{
                                solidgauge:{
                                    dataLabels:{
                                        borderWidth: 0,
                                        style: {
                                            fontSize: '22px'
                                        },
                                        y:-20,
                                        format: '<span style="text-shadow:none">{point.y}%</span>',
                                        shadow: false,
                                        color:'#fff'
                                    },
                                    innerRadius: "90%",

                                    visible:true,
                                    animation: {
                                        duration: 4000
                                    },

                                    stickyTracking:false
                                    //配置linecap\borderWidth
                                }
                            },
                            tooltip: {
                                enabled:false

                            },
                            yAxis: {
                                tickPositions:[],
                                stops: [
                                    [0.1, '#4cea8d'], // green
                                    [0.5, '#4cea8d'], // yellow
                                    [0.9, '#4cea8d'] // red
                                ],
                                lineWidth:0,
                                min:0,
                                max:100,
                                labels: {
                                    enabled:false,
                                    y: 12
                                }
                            },
                            series:[{
                                name: 'Speed',
                                borderColor:'green',

                                data: [this.props.data.data.chartsRightBottom[3].use],
                                dataLabels: {
                                    color:'#600e19',
                                    format: '<div class="gaugetext" ' +
                                    'style="text-align:center;' +
                                    'font-size:18px;color:#fff"><span>{y}%</span></div>'

                                }

                        }]}}
                    />
                    <Text
                        text={'空间使用率'}
                        styleSet={{

                            width: '108px',
                            height: '15px',
                            left: '1692px',
                            top: '922px',

                            color: 'rgb(254, 248, 215)',
                            textAlign: 'center'
                        }}
                    />

                    <Number
                        number={this.props.data.data.chartsRightBottom[3].percent}
                        suffix={'TB'}
                        styleSet={{
                            width: '204px',
                            height: '25px',
                            left: '1652px',
                            top:'990px',
                            textAlign: 'center',
                            color: '#FEF8D7'
                        }}
                        NumberStyle={{
                            fontSize:'20px'
                        }}

                    />
                </div>

            </div>

        )


    }
}


export default Right;
