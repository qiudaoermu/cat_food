import React from 'react';
import DashLeft from './component/Left';
import DashCenter from './component/Center';

import Background from './images/757942832.jpg'
import Right from './component/Right';
import Util from '../../utils/util';

class AppDist extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {data:''}

    }
    componentWillMount(){
        let this_ = this;
        if(!ENV.useMockupDate) {
            let dateWS = '';
            Util.ws(ENV['kim-003'].topic,ENV['kim-003'].interval,function (ruturndata) {
                dateWS = ruturndata;
                this_.setState({data:dateWS})
            });
        }
        else
        {
            import('../../../../public/mockJson/kim-003/kim-003.json').then(data=>{
                this.setState({data:data})
            });

        }

        if(ENV.useWarm){
            if (!ENV.useMockupDate) {
              Util.ws(ENV['kim-001'].topicwarm, ENV['kim-003'].interval, (message) => {
                this.setState({warm:data.warm.type})
                this.setState({messageText:data.warm.text})
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
    componentDidMount() {
        //
    }
    render() {
      var style = {
        fontSize:'12px',
        width:'1920px',
        height:'1080px',
        overFlow:'hidden',
        backgroundSize:'100%',
        backgroundRepeat:'no-repeat',
        position:'relative',
        fontFamily:'Microsoft YaHei',
        backgroundImage:`url(${Background})`
      }
        return (

            <div id="appDash" style={style}>
                {this.state.data?<div>
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
