/* eslint-disable */
import './table.css'
import React from 'react'




function renderThs(def){
    var tools = [];
    for( var i = 0; i <def.length; i++ ){
        tools.push(<td key={i} >{def[i].key}</td>);
    }
    return tools;
};

    var toolsrenderTds = [];
const renderTds = (data,columns) => {


    if(columns){
        　for(var t=0;t<columns.length;t++){
             for(var i in data){
                 for(var j in columns[t]){
                     if(columns[t][j]==i&&columns[t].cell){
                         toolsrenderTds.push(<td key={columns[t][j]}>{columns[t].cell(data[i])}</td>);
                         delete data[i]
                     }
                 }
             };
          }
        for(var q in data){
            toolsrenderTds.push(<td key={q}>{data[q]}</td>);
        }
    }else{
        for(var q in data){
            toolsrenderTds.push(<td key={q}>{data[q]}</td>);
        }
    }
    console.log(toolsrenderTds)
    return toolsrenderTds;
};

const renderRows = (data,columns) => {
    var toolstr = [];
    var flag = '';
    for(var i=0;i<columns.length;i++){
        if(columns[i].cell){

            flag=i
        }
    }
    console.log(data);
    for(var i=0;i<data.length;i++){
            toolstr.push(<tr key={i} >{renderTds(data[i],columns)}</tr>);
    };
    console.log(toolstr)
    return toolstr;
};



function Table(props) {
  console.log(props)
    const data = props.routes?props.routes[1].data:props.data;
    const columns = props.routes?props.routes[1].columns:props.columns;
    const styleSet = props.routes?props.routes[1].styleSet:props.styleSet;
    return (
        <div >

             <table className="base-table" style={styleSet}>
                    <thead>
                        <tr className="table-thead-tr">
                            {renderThs(columns)}
                        </tr>
                    </thead>
                    <tbody>

                            {renderRows(data,columns)}
                    </tbody>
            </table>
        </div>
    );

}
export default Table;
