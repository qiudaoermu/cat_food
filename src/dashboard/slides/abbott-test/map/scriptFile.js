import React from 'react';

class Basic extends React.Component {

    constructor() {
        super();

    }


    componentDidMount() {
        /*
        (function(){
            document.write('<script type="text/javascript" src="mockJson/mapJs/te.js">' + '</script>');
        })();
        */


        var scriptFile = document.createElement('script');

        scriptFile.setAttribute("type","text/javascript");

        scriptFile.setAttribute("src",'mockJson/mapJs/te.js');

        document.getElementsByTagName("head")[0].appendChild(scriptFile);
    }

    render() {
        let divStyle = {

        }

        return (
            <div style={divStyle} className='data-line'>
                <div id={'cd'}></div>
            </div>
        )
    }
}

export default Basic;
