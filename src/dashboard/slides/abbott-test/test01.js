import React from 'react';
import Foundation from '../../components/ECharts-Container';

class AbbottTest extends React.Component {
    constructor() {
        super();

        this.state = {
            width: 800,
            height:800,
            isRed: true,
            className01: 'data-ec1',
            classPosition01:{

            },
            className02: 'data-ec2',
            classPosition02:{

            },
            optionECharts: {
                title: {
                    text: 'ECharts 我的世界里面由你'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
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

    render() {
        var divStyle ={

        }

        var redStyle = {
            display: 'block',
            width: 500,
            height: 500
        };


        var  blueStyle= {
            display: 'none'
        };


        return (

            <div style={divStyle} className='data-line'>
                <div onClick={this.handleClick} >
                    <Foundation defaultProps={this.state.optionECharts}
                                height={this.state.height}
                                width={this.state.width}
                                classValue={this.state.className01}
                    />
                </div>

                <div style={this.state.isRed ? redStyle: blueStyle}>
                    <Foundation defaultProps={this.state.optionECharts}
                                height={this.state.height}
                                width={this.state.width}
                                classValue={this.state.className02}
                    />
                </div>

            </div>
        )
    }
}

export default AbbottTest;
