

import React from 'react';

import DashLeft from './component/Left';
import DashCenter from './component/Center';
import Right from './component/Right';
import Background from './images/1684652431.jpg'
import Util from '../../utils/util';
import Message from  '../../components/warmMassage'
import Text from '../../components/Text'

class AppDist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:'',messageText:'blue',warm:''}
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
        switch(event.keyCode) {
            case 38:
                //上
                //console.log('top');
                Util.keyboardClick('top');
                break;
            case 40:
                //下
                Util.keyboardClick('bottom');
                break;
            case 37:
                //左
                Util.keyboardClick('left');
                break;
            case 39:
                Util.keyboardClick('right');
                break;
            case 32:
                Util.keyboardClick('space');
                break;
            default:
                break;
        }
    }


    componentDidMount() {
        console.log('kii')
        let this_ = this;
          //是否使用假数据
        if (!ENV.useMockupDate) {
            let dateWS = '';
            Util.ws(ENV['kim-001'].topic, ENV['kim-001'].interval, (ruturndata,message) => {
                dateWS = ruturndata;
                console.log(message);
                this.setState({data: dateWS})
            });
        }
        else {
             import('../../../../public/mockJson/kim-001/kim-001.json').then(data=>{
                this.setState({data:data})

             });


        }
        //是否弹出警告框
        if(ENV.useWarm){
            if (!ENV.useMockupDate) {
              Util.ws(ENV['kim-001'].topic, ENV['kim-001'].interval, (message) => {
                this.setState({warm:message.warm.type})
                this.setState({messageText:message.warm.text})
              });
            }else{

              import('../../../../public/mockJson/kim-001/kim-001.json').then(data=>{

                  this.setState({data:data})
                  this.setState({warm:data.warm.type})
                  this.setState({messageText:data.warm.text})
              });
            }

        }
    }
    render() {

      var style = {
        width:'1920px',
        fontSize:'12px',
        height:'1080px',
        overFlow:'hidden',
        backgroundSize:'100%',
        backgroundRepeat:'no-repeat',
        position:'relative',
        fontFamily:'Microsoft YaHei',
        backgroundImage:`url(${Background})`
      }

        return (


            <div id="appDash"  style={style}>
                {this.state.warm?<Message type={this.state.warm} message={this.state.messageText}/>:''}

                {this.state.data?<div >


                    <DashLeft  data={this.state.data}/>

                    <DashCenter data={this.state.data}/>

                    <Right data={this.state.data}/>
                </div>:''
                }
            </div>


        );
    }
}

export default AppDist;
