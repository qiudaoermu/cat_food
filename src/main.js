/*eslint-disable no-unused-vars*/
//import './dashboard/styles/index'
import React from 'react';
import ReactDOM from 'react-dom';
import './dashboard/styles/index.css'
import RouterContainer from './dashboard/router';
import App from  './dashboard/utils/application';

/*---------------
／	  全屏缩放    ／
---------------*/

App.resizeWindow('app');

ReactDOM.render(
	<RouterContainer />,
    document.getElementById('app')
);
