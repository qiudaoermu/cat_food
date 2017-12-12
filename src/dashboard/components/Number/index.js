/* eslint-disable */
import React from 'react'
import './number.css'
class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className='number' style={this.props.styleSet}>
                <span  className='title' style={this.props.NumberStyle}>

                    {this.props.routes?this.props.routes[1].number:this.props.number}
                </span>
                <span  className='envriment' style={this.props.suffixStyle}>

                    {this.props.routes?this.props.routes[1].suffix:this.props.suffix}
                </span>
            </div>
        )
    }
}


export default Number;
