
import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

//import {Modal,Button} from 'antd'
import './warmMassage.css'
class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('baidu')

    }
    render() {
        let  warm = this.props.routes?this.props.routes[1].type:this.props.type;
        let message = this.props.routes?this.props.routes[1].message:this.props.message;
        return (
            <div className='Message'>
                {do{
                    if(warm == 'red') {
                        <Mydialog message={message} color={'red'}/>
                    }else if(warm == 'blue') {
                        <Mydialog message={message} color={'#3385ff'}/>
                    }
                }}
            </div>
        )
    }
}


class Mydialog extends React.Component{
  state={activeOn:true,width:0,height:0}
  handleCancel=()=>{
      this.setState({activeOn:false})
  }
  activeClass(){
    console.log(this.props.color)
    if(this.props.color=='red'){
       return  this.state.activeOn?"dialog-model":'dialog-model-hidden'
    }else{
      return  this.state.activeOn?"dialog-model-warm":'dialog-model-hidden'
    }

  }
  activeModelClass(){
    return  this.state.activeOn?"dialog-model2":'dialog-model-hidden'
  }
  componentDidMount(){

    /*
      var tW = 0
      var tH = 0
      let timeIncrease = setInterval(()=>{
        tW+=50
        tH+=50
        this.setState({width:tW})
        this.setState({height:tH})
        if(tW>=600){
          clearInterval(timeIncrease)
        }
    },1)
    */

  }
  render(){
      var style={
        width:'600px',
        height:'400px',
        position:'absolute',
        top:'50%',
        marginTop:'-200px',
        left:'50%',
        marginLeft:'-300px',
        textAlign:'center',
        borderRadius:'10px',
        backgroundColor:'red',
        zIndex:9999999999,
        opacity:1,
        overflow:'hidden'
      };
      var modelStyles = {
          opacity: 0.85,
          zIndex:2,
          position: 'absolute',
          backgroundColor: '#182738',
          top: '0px',
          left: '0px',
          height: '100%',
          width: '100%',
          transition: 'opacity 0.3s'
        }

    return(
      <div className='dialog' >
        <div className={this.activeModelClass()} style={modelStyles}>
        </div>
        <div
        className={this.activeClass()}
        style={{backgroundColor:this.props.color}}
        >
        <span
          onClick={this.handleCancel}
          style={{display:'block',
          width:'100%',
          height:'40px',
          background:'#fff',
          fontSize:'20px',
          lineHeight:'40px'
          }}>
            <span
              onClick={this.handleCancel}
              style={{
                width:'40px',
                float:'right',
                height:'40px',
                cursor:'pointer',
                textAlign:'center',
                color:'#000'
              }}
              >x
              </span>
        </span>
              <h1
                style={{
                width:'40px',
                height:'40px',
                display:'block',
                margin:'auto',
                lineHeight:'40px',
                marginTop:'50px'
              }}>{this.props.message}</h1>
        </div>
      </div>

    )
  }
}


class testClass extends React.Component{
  componentDidMount(){
    console.log('testClass')
  }

}
// class AntdAlertTest extends React.Component{
//
//    state = {visible:true,model:'',visi:true,display:'block'}
//
//     handleOk = (e) => {
//      this.setState({
//        visi: false,
//      });
//      //this.state.model.props.visible  = false
//     }
//     handleCancel = (e) => {
//       this.setState({display:'none'})
//
//     }
//     componentDidMount(){
//       require.ensure([],(data)=>{
//               let Modal= require('antd/lib/Modal')
//               this.setState({model:
//                 <Modal visible={true}
//                 onOk={this.handleOk}
//                 onCancel={this.handleCancel}
//                 >
//                     <p>Some contents...</p>
//                     <p>Some contents...</p>
//                     <p>Some contents...</p>
//                 </Modal>})
//       })
//     }
//
//     render(){
//       return(
//           <div>
//             <span onClick={this.doSomething}
//
//             style={{width:'200px',height:'40px',backgroundColor:'#fff',display:'block'}}>
//               执行
//             </span>
//             <div style={{display:this.state.display,width:'200px',height:'100px',background:'#fff'}}>
//                   {this.state.model}
//             </div>
//
//           </div>
//
//       )
//     }
// }

class BlueComponent extends React.Component{
    state = {
        isShowingModal: true,
    }
    handleClick = () => this.setState({isShowingModal: true})
    handleClose = () => this.setState({isShowingModal: false})
    render() {
        return (
            <div>
                {this.state.isShowingModal?
                    <ModalContainer onClose={this.handleClose} >
                        <ModalDialog onClose={this.handleClose}
                                     style={{backgroundColor:'blue',width:'300px',color:'#fff',cocheight:'100px',left:'70%',top:'82%',position:'fixed',opacity:0.6}}>
                            <h1>{this.props.message}</h1>
                            <p>More Content. Anything goes here</p>
                        </ModalDialog>
                    </ModalContainer>:''
                }
            </div>
        )

    }
}
class RedComponent extends React.Component{
    state = {
        isShowingModal: true,
    }
    handleClick = () => this.setState({isShowingModal: true})
    handleClose = () => this.setState({isShowingModal: false})
    render() {
        return (
            <div>
                {this.state.isShowingModal?
                    <ModalContainer onClose={this.handleClose} >
                        <ModalDialog onClose={this.handleClose}
                                     style={{width:'500px',height:'250px',color:'#fff',backgroundColor:'red',opacity:0.6}}>
                            <h1>{this.props.message}</h1>
                            <p>More Content. Anything goes here</p>
                        </ModalDialog>
                    </ModalContainer>:''
                }
            </div>
        )

    }
}




export default Message
