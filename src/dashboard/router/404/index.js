/**
 *  作者: Abbott.liu
 *  时间：2017年11月17日
 *  功能：404错误
 */

import React from 'react';
import NotFoundPageContainer from './containers';
import './css/web.css';

class NotFound extends React.Component {

    render () {
        var divStyle = {
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 1000,
            backgroundColor:'red',
            transform:'none'
        }

        return (
            <div className={'notFoundPage'} style={divStyle}>
                <NotFoundPageContainer />
            </div>
        );
    }
}

export default NotFound;
