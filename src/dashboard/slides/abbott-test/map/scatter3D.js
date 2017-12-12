import React from 'react';

import echarts from 'echarts';
import 'echarts-gl';


import $ from 'jquery';

//import world from './world-population.json';
import dataBackground from './data-background.jpg';
import dataStripes from './data-stripes.jpg';
//import dataY6 from './data-Y6.hdr';



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
        /*

        var scriptFile1 = document.createElement('script');
        scriptFile1.setAttribute("type","text/javascript");
        scriptFile1.setAttribute("src",'mockJson/mapJs/t1.js');
        document.getElementsByTagName("head")[0].appendChild(scriptFile1);


        var scriptFile2 = document.createElement('script');
        scriptFile2.setAttribute("type","text/javascript");
        scriptFile2.setAttribute("src",'mockJson/mapJs/t2.js');
        document.getElementsByTagName("head")[0].appendChild(scriptFile2);

        */
        // 基于准备好的dom，初始化echarts实例
        //var myChart = echarts.init(document.getElementById('cs1'));

        // 指定图表的配置项和数据

        var image01 = 'mockJson/mapJs/data-Y6.hdr';

        var myChart = echarts.init(document.getElementById('main'));


        $.getJSON('mockJson/mapJs/dataScatter3D.json', function (data) {
            var airports = data.airports.map(function (item) {
                return {
                    coord: [item[3], item[4]]
                }
            });
            function getAirportCoord(idx) {
                return [data.airports[idx][3], data.airports[idx][4]];
            }

            // Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
            var routesGroupByAirline = {};
            data.routes.forEach(function (route) {
                var airline = data.airlines[route[0]];
                var airlineName = airline[0];
                if (!routesGroupByAirline[airlineName]) {
                    routesGroupByAirline[airlineName] = [];
                }
                routesGroupByAirline[airlineName].push(route);
            });

            var pointsData = [];
            data.routes.forEach(function (airline) {
                pointsData.push(getAirportCoord(airline[1]));
                pointsData.push(getAirportCoord(airline[2]));
            });

            var series = data.airlines.map(function (airline) {
                var airlineName = airline[0];
                var routes = routesGroupByAirline[airlineName];

                if (!routes) {
                    return null;
                }
                return {
                    type: 'lines3D',
                    name: airlineName,

                    effect: {
                        show: true,
                        trailWidth: 2,
                        trailLength: 0.15,
                        trailOpacity: 1,
                        trailColor: 'rgb(30, 30, 60)'
                    },

                    lineStyle: {
                        width: 1,
                        color: 'rgb(50, 50, 150)',
                        // color: 'rgb(118, 233, 241)',
                        opacity: 0.1
                    },
                    blendMode: 'lighter',

                    data: routes.map(function (item) {
                        return [airports[item[1]].coord, airports[item[2]].coord];
                    })
                };
            }).filter(function (series) {
                return !!series;
            });
            series.push({
                type: 'scatter3D',
                coordinateSystem: 'globe',
                blendMode: 'lighter',
                symbolSize: 2,
                itemStyle: {
                    color: 'rgb(50, 50, 150)',
                    opacity: 0.2
                },
                data: pointsData
            });

            myChart.setOption({
                legend: {
                    selectedMode: 'single',
                    left: 'left',
                    data: Object.keys(routesGroupByAirline),
                    orient: 'vertical',
                    textStyle: {
                        color: '#fff'
                    }
                },
                globe: {

                    environment: dataBackground,

                    heightTexture: dataStripes,

                    displacementScale: 0.1,
                    displacementQuality: 'high',

                    baseColor: '#000',

                    shading: 'realistic',
                    realisticMaterial: {
                        roughness: 0.2,
                        metalness: 0
                    },

                    postEffect: {
                        enable: true,
                        depthOfField: {
                            enable: false,
                            focalDistance: 150
                        }
                    },
                    temporalSuperSampling: {
                        enable: true
                    },
                    light: {
                        ambient: {
                            intensity: 0
                        },
                        main: {
                            intensity: 0.1,
                            shadow: false
                        },
                        ambientCubemap: {
                            texture: image01,
                            exposure: 1,
                            diffuseIntensity: 0.5,
                            specularIntensity: 2
                        }
                    },
                    viewControl: {
                        autoRotate: false
                    },
                    silent: true
                },
                series: series
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
