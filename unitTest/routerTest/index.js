import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory,Link} from 'react-router';

import './maintest.css'


import echartsLine from '../../src/dashboard/components/echarts-line'
import echartPie from '../../src/dashboard/components/echarts-pie'
import hchartGuageActive from '../../src/dashboard/components/hchart-gauge-active'
import hchartGuageAdvanc from '../../src/dashboard/components/hchart-gauge-advanced'
import hchartPie from '../../src/dashboard/components/hcharts-pie'
import number from '../../src/dashboard/components/Number'
import svgProgress from '../../src/dashboard/components/svg-progress'
import MyDialog from  '../../src/dashboard/components/warmMassage'
const Home = () => (
  <div>
    <h2>
      <ul>
         <li className='echartPie'><Link to="/echartPie">echartPie</Link></li>
         <li className='echartLine'><Link to="/echartsLine">echartsLine</Link></li>
         <li className='hchartGuageActive'><Link to="/hchartGuageActive">hchartGuageActive</Link></li>
         <li className='hchartGuageAdvanc'><Link to="/hchartGuageAdvanc">hchartGuageAdvanc</Link></li>
         <li className='hchartPie'><Link to="/hchartPie">hchartPie</Link></li>
         <li className='number'><Link to="/number">number</Link></li>
         <li className='svgProgress'><Link to="/svgProgress">svgProgress</Link></li>
         <li className='MyDialog'><Link to="/MyDialog">MyDialog</Link></li>
      </ul>
    </h2>
  </div>
)

const BasicRouter = () => (

	<Router history={hashHistory}>
    <div>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/echartPie" component={echartPie} styleSet={{width:'300px',height:'300px'}}/>
        <Route path="/echartsLine" component={echartsLine} styleSet={{width:'700px',height:'400px'}}/>
        <Route path="/hchartGuageActive" component={hchartGuageActive} styleSet={{width:'700px',height:'400px'}} />
        <Route path="/hchartGuageAdvanc" component={hchartGuageAdvanc} styleSet={{width:'700px',height:'400px'}} />
        <Route path="/hchartPie" component={hchartPie} styleSet={{width:'700px',height:'400px'}} />
        <Route path="/number" component={number} number={3} suffix = {'%'} />
        <Route path="/svgProgress" component={svgProgress}
         styleSet={{width:10,height:60,color:'#ccffcc'}} data = {30}
         styleSet={{
             width: '512px',
             height: '21px',
             left: '314px',
             top: '96px'
         }}

         BlockStyle={{width:10,height:60,color:'#fec231'}}
         data={30}

         />
         <Route path="/MyDialog" component={MyDialog}
         type={'red'}
         message = {'hello'}
         />
    </div>
	</Router>

);


ReactDOM.render(
  <BasicRouter/>,document.getElementById('apptest')
)
