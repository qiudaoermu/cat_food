import React from 'react';


/**
 * 描述：HOC 工厂实现方法 Echarts
 * 作者：Abbott.liu
 * 时间：2017年12月1日
 */
export const Foundation = (WrappedComponent) => {

    class NewComponent extends WrappedComponent {
        constructor() {
            super();
        }

        _init() {
            // 参数设置
            var doc = document.getElementsByClassName(this.state.extendStyle.className)[0];
            /*
            var optionECharts = {
                title: {
                    text: 'ECharts 入门测试开始'
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
            };
            */

            return import(/* webpackChunkName: "echarts" */ 'echarts').then(echarts => {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(doc);
                // 指定图表的配置项和数据
                var option = this.state.optionECharts;
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }).catch(error => 'An error occurred while loading the component');
        }
        /*
        showJson(){
            var test;
            if(window.XMLHttpRequest){
                test = new XMLHttpRequest();
            }else if(window.ActiveXObject){
                test = new window.ActiveXObject();
            }else{
                console.log("请升级至最新版本的浏览器");
            }
            if(test !=null){
                test.open("GET","components/bar01/json.json",true);
                test.send(null);
                test.onreadystatechange=function(){
                    if(test.readyState==4&&test.status==200){
                        var obj = JSON.parse(test.responseText);
                        for (var name in obj){
                            console.log(obj[name].key);
                        }
                    }
                };

            }
        }
        */

        componentWillReceiveProps(nextProps) {
            console.log('WillReceive')
            console.log(this.state.isRed)
        }

        componentDidMount() {
            this._init()
        }

        componentWillMount() {
            //this.showJson();
            console.log(this.state.optionECharts)

        }



        render() {

            const newProps = {
                name: "cqm",
                value: "testData",
            }
            /*
            var divECharts = {
                width: this.state.style.width,
                height: this.state.style.height
            }
            */

            var divECharts = {


            }

            for(var stateStyle in this.state.extendStyle)
            {
                //console.log(stateStyle);
                //console.log(this.state.style[stateStyle]);
                divECharts[stateStyle] = this.state.extendStyle[stateStyle];
            }



            return (

                    <div>
                        <div className={this.state.extendStyle.className} style={divECharts}>

                        </div>

                        <WrappedComponent {...this.props} {...newProps}/>

                    </div>

            )
        }
    }

    return NewComponent

}


