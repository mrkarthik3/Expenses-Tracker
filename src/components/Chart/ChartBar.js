import React from 'react';
import './ChartBar.css'

const ChartBar = props => {
    let barFillHeight = '0%';

    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%';
    }
    return (
    <div className="chart-bar">
        <div className="chart-bar__inner">

            <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
    )
}

export default ChartBar;

            /* To set styles, style (normal html attribute to set style) is used
              and its value is set to an object. In that object, you pass CSS
              properties and values as this objects key-value pairs
              For properties that have "-" Eg. background-color... 
              Put it in double-quotes "background-color" OR 
              use camel case backgroundColor as key inside the object */