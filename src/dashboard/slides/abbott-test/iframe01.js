import React from 'react';

class Basic extends React.Component {

    constructor() {
        super();
    }

    setIframeHeight(iframe) {
        if (iframe) {
            var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
            if (iframeWin.document.body) {
                iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
            }
        }
    }

    componentDidMount() {
        var url="http://127.0.0.1:6600/index2.html"
        var ifm = document.getElementById('iframe01');
        ifm.src=url;

        ifm.height='1080px';
        ifm.width='1920px';

    }

    render() {
        var divStyle = {

        }

        return (

            <div id style={divStyle} className='data-line'>
                <iframe id='iframe01' ></iframe>
            </div>
        )
    }
}

export default Basic;
