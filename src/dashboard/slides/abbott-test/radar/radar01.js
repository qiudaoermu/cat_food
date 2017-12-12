import React from 'react';
import Foundation from '../../../components/ECharts-Container';

/**
 * 雷达图例子
 */
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
                    text: '基础雷达图'
                },
                tooltip: {},
                legend: {
                    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: '销售（sales）', max: 6500},
                        { name: '管理（Administration）', max: 16000},
                        { name: '信息技术（Information Techology）', max: 30000},
                        { name: '客服（Customer Support）', max: 38000},
                        { name: '研发（Development）', max: 52000},
                        { name: '市场（Marketing）', max: 25000}
                    ]
                },
                series: [{
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : '预算分配（Allocated Budget）'
                        },
                        {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : '实际开销（Actual Spending）'
                        }
                    ]
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


            </div>
        )
    }
}

export default AbbottTest;
