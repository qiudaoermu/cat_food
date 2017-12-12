/*eslint-disable no-unused-vars*/
/**
 *  作者: Abbott.liu
 *  时间：2017年11月28日
 *  功能：404组件
 */

import React from 'react';

class BaseComponent extends React.Component {
    _bind(...methods) {
        methods.forEach( (method) => this[method] = this[method].bind(this) );
    }
}

class NotFoundPage extends BaseComponent {
    constructor(props) {
        super(props);
        // this._handleFoo = this._handleFoo.bind(this);
        // this._bind('_handleClick', '_handleFoo');
        this.state = {
            time: 10
        }
    }

    // 倒数
    redirect(){
        let nextTime = this.state.time - 1;

        if(this.state.time<=0){
            let strTime = '无法自动跳转到首页';
            //document.getElementById('num').innerHTML=0;
            document.getElementById('jumpTo').innerHTML=strTime;
            //location.href="http://127.0.0.1:6600/#/";
            //document.getElementById('error').innerHTML=strTime;

        }
        else{
            // console.log(nextTime);
           // document.getElementById('num').innerHTML=nextTime.toString();
            this.setState({ time: nextTime });
        }
    }

    cleanStyle(){
        document.getElementById('app').style.transform = 'none';
        document.getElementsByClassName('notFoundPage')[0].style.backgroundColor = 'white';
    }

    componentDidMount() {
        // this.timer = setInterval(()=> this.redirect(), 1000);
        this.cleanStyle();
    }

    render () {
        var divStyle = {
            fontSize:30,


        }
        var tableStyle ={
            cellSpacing: 0,
            width: '100%',
            border: 0,

        };

        var fontStyle = {
            fontFamily:'Times New Roman',
            fontSize:80
        }

        return (
            <div style={[divStyle, {transform:'none'}]}>
                <table style = {tableStyle}  cellPadding='2' cellSpacing='0'>
                    <tbody>
                    <tr>
                        <td style={{whiteSpace:'nowrap', width: '1%'}} rowSpan='3' >
                            <b>
                                <span style={{...fontStyle, color: '#0039b6'}}>S</span>
                                <span style={{...fontStyle, color: '#c41200'}}>o</span>
                                <span style={{...fontStyle, color: '#f3c518'}}>r</span>
                                <span style={{...fontStyle, color: '#c41200'}}>r</span>
                                <span style={{...fontStyle, color: '#0039b6'}}>y</span>
                            </b>
                        </td>
                        <td>&nbsp;</td>
                    </tr>

                    <tr>
                        <td style={{backgroundColor:'#3366cc'}} >
                            <span style={{fontFamily:'arial,sans-serif', color:'#ffffff', fontSize:30}} ><b>404
                        Error</b>
                    </span>
                        </td>
                    </tr>

                    <tr>
                        <td>　</td>
                    </tr>
                    </tbody>
                </table>




                <blockquote style={{fontSize: 30}}>
                    The requested URL was not found on this server.
                    <ol>
                        <li>请检查您输入的网址是否正确。</li>
                        <li>确认无误有可能我们的页面正在升级或维护。</li>
                        <li>您可以尝试访问以下链接。
                            <ul style={{color: 'red'}}>
                                <li id={'jumpTo'}><span id='num' style={{color: 'red'}}>10</span>秒后自动跳转到主页</li>
                            </ul>
                        </li>
                    </ol>
                    <p></p>
                </blockquote>

            </div>

        );
    }
}

export default NotFoundPage;
