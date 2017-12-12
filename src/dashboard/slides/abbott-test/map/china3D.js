import React from 'react';

import echarts from 'echarts';
import 'echarts-gl';
import '../../../components/Database/china.js';

import $ from 'jquery';

//import world from './world-population.json';


class Basic extends React.Component {

    constructor() {
        super();

        this.state = {
            option: {

            }

        }
        // 使用刚指定的配置项和数据显示图表。
        //myChart.setOption(option);


    }

    handleClick(){
        console.log('点击')
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        //var myChart = echarts.init(document.getElementById('cs1'));

        // 指定图表的配置项和数据

        var chart = echarts.init(document.getElementById('main'));

        $.getJSON('mockJson/mapJs/world-population.json', function (populationData) {

            var max = -Infinity;
            var min = Infinity;
            populationData.forEach(function (item) {
                max = Math.max(Math.log(item.value), max);
                min = Math.min(Math.log(item.value), min);
            });

            var regions = populationData.map(function (item) {
                return {
                    name: item.name,
                    height: (Math.log(item.value) - min) / (max - min) * 3
                };
            })

            chart.setOption({
                backgroundColor: '#cdcfd5',
                tooltip: {},
                geo3D: {
                    map: 'china',
                    shading: 'lambert',

                    environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#00aaff' // 天空颜色
                        }, {
                            offset: 0.6, color: '#998866' // 地面颜色
                        }, {
                            offset: 1, color: '#998866' // 地面颜色
                        }]
                    ),

                    lambertMaterial: {
                        detailTexture: 'asset/woods.jpg',
                        textureTiling: 20
                    },

                    postEffect: {
                        enable: true,
                        screenSpaceAmbientOcclusion: {
                            enable: true,
                            radius: 3,
                            intensity: 2
                        }
                    },
                    groundPlane: {
                        show: true
                    },
                    light: {
                        main: {
                            intensity: 1,
                            shadow: true,
                            shadowQuality: 'high',
                            alpha: 30
                        },
                        ambient: {
                            intensity: 0
                        },
                        ambientCubemap: {
                            texture: 'asset/canyon.hdr',
                            exposure: 2,
                            diffuseIntensity: 0.3
                        }
                    },

                    debug: {
                        wireframe: {
                            lineStyle: {
                                width: 0.5
                            },
                            show: true
                        }
                    },

                    viewControl: {
                        distance: 50
                    },

                    itemStyle: {
                        // borderColor: '#222',
                        // borderWidth: 1
                    },

                    regionHeight: 0.5,

                    regions: regions
                },
                series: []
            });

            chart.on('click', function (e) {
                console.log(e);
            });
        });
    }


    render() {
        let divStyle = {
            width: 1200,
            height: 800
        }



        return (

            <div className='examples'>
                <div className='parent'>
                    <label> 3D版中国地图 </label>
                    <div id={'main'} style={divStyle}></div>

                </div>
            </div>
        )
    }
}

export default Basic;
