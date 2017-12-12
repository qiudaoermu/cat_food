import React from 'react';

import ChildComponent from './ChildComponent'

class ParentComponent02 extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 0
        }

    }

    //给子组件用来传price用的方法
    changePrice(price01){
        var price02 = price01+200;
        this.setState({price: price02})
    }


    componentDidMount() {
        console.log('seriesArray');
    }

    render() {

        var divStyle = {
            fontSize: 30
        }

        return (

            <div style={divStyle}>
                <ChildComponent changePrice={this.changePrice.bind(this)}/>
                <div>父组件2=={this.state.price}</div>
            </div>
        )
    }
}

export default ParentComponent02;
