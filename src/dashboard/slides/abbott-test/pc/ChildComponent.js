import React from 'react';

class ChildComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            prices: 0
        }
    }

    handleChange() {
        const prices =800;

        //用传过来的changePrice属性(props)，是个函数，呼叫它把price交给父组件中的函数去处理
        this.props.changePrice(prices)

        //子组件处理自己的
        this.setState({
            prices: prices
        })
    }

    render() {

        var divStyle = {
            fontSize: 30
        }

        const { prices } = this.state;

        return (

            <div>
                <button style={divStyle} onClick={this.handleChange.bind(this)} value={'开始增加数字'}>{prices}</button>
            </div>

        )
    }
}

export default ChildComponent;
