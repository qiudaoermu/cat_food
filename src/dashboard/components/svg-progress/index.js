/* eslint-disable */
import React from 'react'
import './svg-progress.css'
import _ from  '../../utils/util'

class SvgProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {html: ""};
    }
    con(){
        console.log('内部调用')
    }
    componentDidMount() {



        function drawRect(startX,startY,endX,endY,fillColor) {

            startX = (startX>0)?startX:0;
            startY = (startY>0)?startY:0;
            endX = (endX>0)?endX:0;
            endY = (endY>0)?endY:0;

            var pathRoute = 'M'+startX+' '+startY;
            pathRoute += ' L'+endX+' '+startY;
            pathRoute += ' L'+endX+' '+endY;
            pathRoute += ' L'+startX+' '+endY;
            pathRoute += ' Z';

            return '<path d="'+pathRoute+'" fill="'+fillColor+'" stroke-width="0"></path>';
        }
        function drawProgress(options,width,height){
            var svg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style="transform-origin: left top;" shape-rendering="inherit">';



            _.each(options,function(options){
                svg = svg + options;
            });

            svg = svg +'</svg>';

            // var attrs = {style:'width:'+width+'px;height:'+height+'px'};
            //svg.setAttribute(width,'100px')
            //返回html文本,进行填充
            return svg
        }

        var singlewidth =this.props.routes?this.props.routes[1].BlockStyle.width:this.props.BlockStyle.width
        var height=this.props.routes?this.props.routes[1].BlockStyle.height:this.props.BlockStyle.height


        var color = this.props.routes?this.props.routes[1].BlockStyle.color:this.props.BlockStyle.color

        var fullSize = this.props.routes?this.props.routes[1].data:this.props.data
        var options = [];
        for(var i = 0; i<fullSize; i++){
            options.push(drawRect(i*singlewidth,0,i*singlewidth+singlewidth/2,height,color))
        }
        let ProgressRef = this.refs.ProgressRef;
        ProgressRef.innerHTML=drawProgress(options)

    }
    render() {
        return (
            <div className='ProgressSvg' style={this.props.routes?this.props.routes[1].styleSet:this.props.styleSet}

                 ref="ProgressRef"

            >

            </div>
        )
    }
}


export default SvgProgress;
