import React from 'react';
//import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import ModalContainer from 'react-modal-dialog/lib/ModalContainer'
import ModalDialog from 'react-modal-dialog/lib/ModalDialog'

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //console.log('baidu')
    }
    render() {

        return (
            <div>
                <ModalContainer onClose={this.handleClose}>
                    <ModalDialog onClose={this.handleClose}>
                        <h1>欢迎来到我的世界</h1>
                        <p>More Content. Anything goes here</p>
                    </ModalDialog>
                </ModalContainer>
            </div>

        )
    }
}

module.exports= Hello;





// function BlueComponent(message){
//   //console.log(message.message)
//   var style={
//     width:'600px',
//     height:'400px',
//     backgroundColor:'#fff',
//     position:'absolute',
//     top:'50%',
//     marginTop:'-200px',
//     left:'50%',
//     marginLeft:'-300px',
//     textAlign:'center',
//     lineHeight:'400px',
//     fontSize:'100px',
//     borderRadius:'20px',
//     zIndex:100
//
//   }
//   return(
//     <div style={style}>
//
//       <ModalContainer onClose={this.handleClose} >
//         <ModalDialog onClose={this.handleClose} style={{top:'20px'}}>
//           <h1>  {message.message}</h1>
//           <p>More Content. Anything goes here</p>
//         </ModalDialog>
//       </ModalContainer>
//     </div>
//   )
// }

// function RedComponent(){
//   return(
//     <div>
//       BlueComponent
//     </div>
//   )
// }
//
// function GreenComponent(){
//   return(
//     <div>
//       BlueComponent
//     </div>
//   )
// }



