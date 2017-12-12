/* eslint-disable */
import React from 'react'

class Framer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};
    }
    componentDidMount() {
    }
    render() {
        return (
            <div style={this.props.styleSet}>
                <svg width="100%" height="100%">
                    <rect width="100%" height="100%"
                          style={{stroke:'rgb(254,194,49)'}}
                    >
                    </rect>
                </svg>

            </div>

        )
    }
}

export default Framer;
