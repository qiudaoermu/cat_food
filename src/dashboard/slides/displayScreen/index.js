/**
 * 展示大屏页面
 */
import './style/main.css';

import React from 'react';
import DashLeft from './component/Left';
import DashCenter from './component/Center';
import Right from './component/Right';


class DisplayScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:'',
            currentComponent:null
        }
    }
    /*
        作者：Abbott.liu
        描述：点击键盘事件
     */
    handleKeyDown(event){
        // 将停止事件的传播
        event.stopPropagation();
        // 阻止元素发生默认的行为
        event.preventDefault();
        //console.log('点击键盘事件');
    }


    promptWarm = () => {
        require.ensure(['../../components/warmDialog'], (require) => {
            const Message = require('../../components/warmDialog');
            this.setState({
                currentComponent:<Message />
            })
        },'promptWarm')
    }

    componentDidMount() {
        let this_ = this;
        let date = '';

       if(ENV['displayScreen'].topic) {
           let dateWS = '';
               Util.ws(ENV['displayScreen'].topic, ENV['displayScreen'].interval, returnData=> {
               dateWS = returnData;
               this.setState({data:dateWS})
           });
       }
       else
       {

           import('../../../../public/mockJson/kim-001/kim-001.json').then(data=>{
            //import('../../../../public/mockJson/kim-001/kim-001.json').then(data=>{
                this.setState({data:data})
            });

       }



    }
    render() {

        return (

            <div id="appDash">
                <span onClick={this.promptWarm} >
                    按需加载模块
                </span>
                {this.state.currentComponent}
                {
                    this.state.data?
                        <div >
                            <DashLeft  data={this.state.data}/>

                            <DashCenter data={this.state.data}/>

                            <Right data={this.state.data}/>
                        </div>:''
                }
            </div>


        );
    }
}

export default DisplayScreen;




