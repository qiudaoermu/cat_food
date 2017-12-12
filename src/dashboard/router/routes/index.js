import React, {Component} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

const DisplayScreen = (nextState,callback)=>{
    require.ensure([],(require)=>{
        callback(null,require('../../slides/displayScreen').default);
    },'DisplayScreen');
}

const DisplayScreen01 = (nextState,callback)=>{
    require.ensure([],(require)=>{
        callback(null,require('../../slides/displayScreen-01').default);
    },'DisplayScreen01');
}

const DisplayScreen02 = (nextState,callback)=>{
    require.ensure([],(require)=>{
        callback(null,require('../../slides/displayScreen-02').default);
    },'DisplayScreen02');
}

const Kim001 = (nextState,callback) => {
    require.ensure([],(require)=>{
        callback(null,require('../../slides/kim-001').default);
    },'Kim001');
}

const Kim002 = (nextState,callback) => {
    require.ensure([],(require)=>{
        callback(null,require('../../slides/kim-002').default);
    },'Kim002');
}

const Kim003 = (nextState,callback) => {
    require.ensure([],(require)=>{
        callback(null,require('../../slides/kim-003').default);
    },'Kim003');
}

const BasicRouter = () => (

	<Router history={hashHistory}>
        <Route path='/' getComponent={
            (nextState,callback)=>{
                require.ensure([],(require)=>{
                    callback(null,require('../../slides/carouselScreen').default);
                },'CarouselScreen');
            }} />
        <Route path='/kim001' getComponent={Kim001} />
		<Route path="/display" getComponent={DisplayScreen} />
        <Route path='/kim002' getComponent={Kim002} />
        <Route path='/kim003' getComponent={Kim003} />
		<Route path='/first' getComponent={DisplayScreen01} />
		<Route path='/second' getComponent={DisplayScreen02} />
        <Route path='/abbott' getComponent={
            (nextState,callback)=>{
                require.ensure([],(require)=>{
                    callback(null,require('../../slides/abbott-test/pie/pie02').default);
                },'AbbottTest');
            }} />
        {/* 其他重定向到 404 */}
		<Route path='/404' getComponent={
            (nextState,callback)=>{
                require.ensure([],(require)=>{
                    callback(null,require('../404').default);
                },'NotFound');
            }} />
        {/* 其他重定向到 404 */}
		<Redirect from='*' to='/404'/>

	</Router>

);


/*
if(checkUrl(pattern_jh, whref)){
    var hrefs = whref.split('#');
    console.log(hrefs);
    var str_href = '';
    for(var i =0;i<hrefs.length;i++){
        str_href += hrefs[i];
    }
    console.log(str_href);
    str_href.replace(/\/\//, '/')
    window.location.href = str_href;
}
*/

export default BasicRouter;
