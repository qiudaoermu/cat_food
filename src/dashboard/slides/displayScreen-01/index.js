import React from 'react';
import './styles/main.css';
import App from '../../utils/application';

/* eslint-disable */
function getJquery() {
    return import(/* webpackChunkName: "jquery" */ 'jquery').then($ => {
        //$('#mov').css('color','red');
        //document.getElementById('mov').style['font-size'] = '205px';
    }).catch(error => 'An error occurred while loading the component');
}


class Labor extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove() {
        App.mouseMove('mov', this, event);
    }

    componentDidMount() {
        // 按需加载 jquery 模块
        getJquery().then(component => { /* no-unused-vars */

        });

        // 按需加载 ECharts 模块
        getECharts().then(component => { /* no-unused-vars */

        });
    }
    /* eslint-enable */

    render() {
        //console.log(this.state.data)
        return (
            <div>
                <div id="mov" onMouseMove={this.handleMouseMove}></div>
            </div>


        );
    }
}

export default Labor;
