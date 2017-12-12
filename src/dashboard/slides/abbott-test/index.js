import React from 'react';

class Basic extends React.Component {

    constructor() {
        super();

        let geoCoordMap ={
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936]
        }

        var seriesArray = [];

        for(var i in geoCoordMap){
            seriesArray.push(geoCoordMap[i])
        }
        this.handleClick=this.handleClick.bind(this)
        this.state = {
            optionECharts: {
                series: seriesArray
            }
        }
    }

    handleClick(){
        console.log('点击')
    }

    componentDidMount() {
        console.log('seriesArray');
        console.log(this.state.optionECharts.series);
    }

    render() {
        let divStyle = {

        }



        return (

            <div style={divStyle} className='data-line' onClick={this.handleClick}>

            </div>
        )
    }
}

export default Basic;
