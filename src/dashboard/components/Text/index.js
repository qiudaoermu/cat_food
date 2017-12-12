/* eslint-disable */
import React from 'react'
import './text.css'
class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }
    componentDidMount() {


    }
    render() {
        return (
            <div className='text' style={this.props.styleSet}>
                {this.props.text}
            </div>
        )
    }
}


export default Text;
