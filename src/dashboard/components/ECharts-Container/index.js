import React from 'react';

/**
 * 描述：Echarts 外层构造组件
 * 作者：Abbott.liu
 * 时间：2017年12月2日
 */


class Foundation extends React.Component {

    constructor() {
        super();
    }

    _init() {
            // 参数设置
        var doc = document.getElementsByClassName(this.props.classValue)[0]
            //var optionECharts = this.props.defaultProps;
        return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts => {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(doc);
            // 指定图表的配置项和数据
            var option = this.props.defaultProps;
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }).catch(error => 'An error occurred while loading the component');
    }

        showJson() {
            var test;
            if (window.XMLHttpRequest) {
                test = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                test = new window.ActiveXObject();
            } else {
                console.log("请升级至最新版本的浏览器");
            }
            if (test != null) {
                test.open("GET", "./json.json", true);
                test.send(null);
                test.onreadystatechange = function () {
                    if (test.readyState == 4 && test.status == 200) {
                        var obj = JSON.parse(test.responseText);
                        for (var name in obj) {
                            console(obj[name].key);
                        }
                    }
                };

            }
        }

        componentDidMount() {
            //console.log(this.defaultProps)
            //console.log(this.state.defaultProps)
            //console.log(this.props.defaultProps)
            //console.log(this.props.defaultProps)
            this._init()
        }


        componentWillMount() {
            //this.showJson();


        }


        render() {
            return (
                <div className={this.props.classValue} style={{width: this.props.width, height: this.props.height}}>

                </div>


            )
        }
    }


export default Foundation;
