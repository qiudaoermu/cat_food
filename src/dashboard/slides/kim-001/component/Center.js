import React from 'react';

import Number from '../../../components/Number';
import Framer from '../../../components/Framer';
import Text from '../../../components/Text';
import HchartGaugeActive from '../../../components/hchart-gauge-active';

class Center extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }

    componentDidMount() {
        //console.log(this.props.data.data.chart5[0].percent)
    }

    render() {
        return (
            <div>
                <div className='cupuse'>
                    <HchartGaugeActive
                        styleSet=
                            {{
                                position: 'absolute',
                                left: '286px',
                                top: '184px',
                                fontSize: '30px',
                                color: '#fff',
                                width: '268px',
                                height: '129px'
                            }}
                        option={{
                            yAxis: {
                                tickPositions:[],
                                stops: [
                                    [0.1, '#62caca'], // green
                                    [0.5, '#62caca'], // yellow
                                    [0.9, '#62caca'] // red
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

                                    data: [this.props.data.data.chart5[0].percent],
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
                        styleSet={{
                            width: '108px',
                            height: '15px',
                            left: '366px',
                            top: '253px',
                            color: 'rgb(254, 248, 215)',
                            textAlign: 'center'
                        }}
                        text={'CPU使用率'}


                    />
                    <div className='cpuUsage'>
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '513px',
                                    top: '226px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[0].all}
                            suffix={'KMKHZ'}

                        />
                        <div style={{
                            position: 'absolute',
                            left: '513px',
                            top: '251px',
                            fontSize: '14px',
                            color: '#fef8d7'
                        }}>CPU总量
                        </div>
                    </div>
                    <div className="hasUse">
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '613px',
                                    top: '226px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[0].hasUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '603px',
                            top: '256px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '623px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '251px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                    <div className="hasNotUse">
                        <Number

                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '713px',
                                    top: '226px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[0].notUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '713px',
                            top: '256px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '730px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '251px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                </div>

                <div className='coreuse'>
                    <HchartGaugeActive
                        styleSet=
                            {{
                                position: 'absolute',
                                left: '286px',
                                top: '316px',
                                fontSize: '30px',
                                color: '#fff',
                                width: '268px',
                                height: '129px'
                            }}
                        option={{
                            yAxis: {
                                tickPositions:[],
                                stops: [
                                    [0.1, '#1ecd66'], // green
                                    [0.5, '#1ecd66'], // yellow
                                    [0.9, '#1ecd66'] // red
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

                                    data: [this.props.data.data.chart5[1].percent],
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
                        styleSet={{
                            width: '108px',
                            height: '15px',
                            left: '366px',
                            top: '383px',
                            color: 'rgb(254, 248, 215)',
                            textAlign: 'center'
                        }}
                        text={'内核池使用'}


                    />
                    <div className='cpuUsage'>
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '513px',
                                    top: '352px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[1].all}
                            suffix={'KMKHZ'}

                        />
                        <div style={{
                            position: 'absolute',
                            left: '513px',
                            top: '382px',
                            fontSize: '14px',
                            color: '#fef8d7'
                        }}>CPU总量
                        </div>
                    </div>
                    <div className="hasUse">
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '613px',
                                    top: '352px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[1].hasUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '603px',
                            top: '382px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '623px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '382px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                    <div className="hasNotUse">
                        <Number

                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '713px',
                                    top: '352px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[1].notUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '713px',
                            top: '382px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '730px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '382px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                </div>

                <div className='memeryUse'>
                    <HchartGaugeActive
                        styleSet=
                            {{
                                position: 'absolute',
                                left: '286px',
                                top: '526px',
                                fontSize: '30px',
                                color: '#fff',
                                width: '268px',
                                height: '129px'
                            }}
                        option={{
                            yAxis: {
                                tickPositions:[],
                                stops: [
                                    [0.1, '#3e71c7'], // green
                                    [0.5, '#3e71c7'], // yellow
                                    [0.9, '#3e71c7'] // red
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

                                    data: [this.props.data.data.chart5[2].percent],
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
                        styleSet={{
                            width: '108px',
                            height: '15px',
                            left: '366px',
                            top: '595px',
                            color: 'rgb(254, 248, 215)',
                            textAlign: 'center'
                        }}
                        text={'内存使用率'}


                    />
                    <div className='cpuUsage'>
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '513px',
                                    top: '564px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[2].all}
                            suffix={'KMKHZ'}

                        />
                        <div style={{
                            position: 'absolute',
                            left: '513px',
                            top: '592px',
                            fontSize: '14px',
                            color: '#fef8d7'
                        }}>CPU总量
                        </div>
                    </div>
                    <div className="hasUse">
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '613px',
                                    top: '564px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[2].hasUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '603px',
                            top: '597px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '623px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '592px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                    <div className="hasNotUse">
                        <Number

                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '713px',
                                    top: '564px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[2].notUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '713px',
                            top: '597px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '730px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '592px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                </div>

                <div className='BlockUse'>
                    <HchartGaugeActive
                        styleSet=
                            {{
                                position: 'absolute',
                                left: '286px',
                                top: '744px',
                                fontSize: '30px',
                                color: '#fff',
                                width: '268px',
                                height: '129px'
                            }}
                        option={{
                            yAxis: {
                                tickPositions:[],
                                stops: [
                                    [0.1, '#c26fe9'], // green
                                    [0.5, '#c26fe9'], // yellow
                                    [0.9, '#c26fe9'] // red
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

                                    data: [this.props.data.data.chart5[3].percent],
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
                        styleSet={{
                            width: '108px',
                            height: '15px',
                            left: '366px',
                            top: '813px',
                            color: 'rgb(254, 248, 215)',
                            textAlign: 'center'
                        }}
                        text={'块存储使用'}
                    />
                    <div className='cpuUsage'>
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '513px',
                                    top: '781px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[3].all}
                            suffix={'KMKHZ'}

                        />
                        <div style={{
                            position: 'absolute',
                            left: '513px',
                            top: '809px',
                            fontSize: '14px',
                            color: '#fef8d7'
                        }}>CPU总量
                        </div>
                    </div>
                    <div className="hasUse">
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '613px',
                                    top: '781px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[3].hasuse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '603px',
                            top: '813px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '623px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '809px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                    <div className="hasNotUse">
                        <Number

                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '713px',
                                    top: '781px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[3].notUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '713px',
                            top: '813px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '730px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '809px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                </div>

                <div className='targetUse'>
                    <HchartGaugeActive
                        styleSet=
                            {{
                                position: 'absolute',
                                left: '286px',
                                top: '876px',
                                fontSize: '30px',
                                color: '#fff',
                                width: '268px',
                                height: '129px'
                            }}
                        option={{
                            yAxis: {
                                tickPositions:[],
                                stops: [
                                    [0.1, '#ea4cb0'], // green
                                    [0.5, '#ea4cb0'], // yellow
                                    [0.9, '#ea4cb0'] // red
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

                                    data: [this.props.data.data.chart5[4].percent],
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
                        styleSet={{
                            width: '50px',
                            height: '32px',
                            left: '394px',
                            top: '942px',
                            color: 'rgb(254, 248, 215)',
                            textAlign: 'center'
                        }}
                        text={'对象存储使用'}
                    />
                    <div className='cpuUsage'>
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '513px',
                                    top: '913px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[4].all}
                            suffix={'KMKHZ'}

                        />
                        <div style={{
                            position: 'absolute',
                            left: '513px',
                            top: '941px',
                            fontSize: '14px',
                            color: '#fef8d7'
                        }}>CPU总量
                        </div>
                    </div>
                    <div className="hasUse">
                        <Number
                            className='serverNumberData'
                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '613px',
                                    top: '913px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[4].hasUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '603px',
                            top: '945px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '623px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '941px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                    <div className="hasNotUse">
                        <Number

                            styleSet=
                                {{
                                    position: 'absolute',
                                    left: '713px',
                                    top: '913px',
                                    fontSize: '12px',
                                    color: '#fef8d7'
                                }}

                            number={this.props.data.data.chart5[4].notUse}
                            suffix={'KMKHZ'}

                        />
                        <Framer styleSet={{
                            width: '12px',
                            height: '12px',
                            position: 'absolute',
                            left: '713px',
                            top: '945px'
                        }}/>
                        <Text
                            styleSet={{

                                height: '12px',
                                position: 'absolute',
                                left: '730px',
                                fontSize: '14px',
                                color: '#fef8d7',
                                top: '941px'
                            }}
                            text={'已使用'}
                        />
                    </div>
                </div>

            </div>);

    }
}


export default Center;
