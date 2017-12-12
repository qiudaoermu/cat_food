/* eslint-disable */
import React from 'react'
import './style.css'
import background from './images/background.png'
/**
 * 作者: Abbott.liu
 * 时间：2017年11月28日
 * 功能：默认设置显示界面
 */

// {this.state.show && ( )}
class RightList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show : false
        };
    }

    handleClick() {
        this.setState({show:!this.state.show});
        event.stopPropagation()
        event.preventDefault()


        // 点击按钮改变样式
        //console.log('点击帮助列表');
    }


    componentDidMount() { // 初始化render之后只执行一次

        //console.log('定时器结尾');
        //document.getElementById('parent').style['fontSize'] = '85px';

    }


    render() {
        const { shortCutJSON } = this.props;
        //console.log('shortCutJSON')
        //console.log(shortCutJSON)
        var shortCut = [];
        var shortCutIndex = [];
        for(var shortCutKey in shortCutJSON){
            var shortCutStr = shortCutKey + '快捷键  '+ shortCutJSON[shortCutKey];
            shortCut.push(shortCutStr)
        }
        //console.log(shortCut)
        for(var i = 0; i < shortCut.length; i++) {
            shortCutIndex.push(i);
        }

        return (
            <div id = 'help'
                style={{ }}
                onClick={this.handleClick.bind(this)}
            >

                    <div  id='helplist' style={{
                        backgroundImage: 'url(' + background + ')',
                        height: 800,
                        width: 500,
                        color: '#000',
                        textAlign: 'center',
                        left: 0
                    }}>
                        <ul>
                            {
                                shortCutIndex.map( data => {
                                    return (<li key={data}>{shortCut[data]}</li>)
                                })
                            }

                        </ul>

                    </div>

            </div>
        )
    }
}


export default RightList;
