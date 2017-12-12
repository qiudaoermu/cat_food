import React from 'react';

class Basic extends React.Component {

    constructor() {
        super();

    }

    handleClick(){
        console.log('点击')
    }

    componentWillMount() {

        var div01 = document.createElement('div');
        div01.setAttribute('id', 'wo');

        document.getElementsByTagName("body")[0].appendChild(div01);


        var scriptFile3 = document.createElement('script');

        scriptFile3.setAttribute("type", "text/javascript");

        scriptFile3.setAttribute("src", 'mockJson/mapJs/te.js');

        document.getElementsByTagName("body")[0].appendChild(scriptFile3);

        var scriptFile5 = document.createElement('script');

        scriptFile5.setAttribute("type", "text/javascript");

        scriptFile5.setAttribute("src", 'mockJson/mapJs/echarts-3.7.2.js');

        document.getElementsByTagName("body")[0].appendChild(scriptFile5);

        var scriptFile6 = document.createElement('script');

        scriptFile6.setAttribute("type", "text/javascript");

        scriptFile6.setAttribute("src", 'mockJson/mapJs/jquery-3.2.1.js');

        document.getElementsByTagName("body")[0].appendChild(scriptFile6);

        var scriptFile7 = document.createElement('script');

        scriptFile7.setAttribute("type", "text/javascript");

        scriptFile7.setAttribute("src", 'http://echarts.baidu.com/resource/echarts-gl-latest/dist/echarts-gl.min.js');
        document.getElementsByTagName("body")[0].appendChild(scriptFile7);

        var scriptFile8 = document.createElement('script');

        scriptFile8.setAttribute("type", "text/javascript");

        scriptFile8.setAttribute("src", 'mockJson/mapJs/te111.js');

        document.getElementsByTagName("body")[0].appendChild(scriptFile8);

    }

    componentDidMount() {


        //
    }

    render() {
        let divStyle = {

        }



        return (

            <div style={divStyle} id={'data01'} className='data-line' onClick={this.handleClick}>

            </div>
        )
    }
}

export default Basic;
