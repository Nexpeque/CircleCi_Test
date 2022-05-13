import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <div className="CounterControl" onClick={props.clicked}>
        <h1>hola</h1>
        {props.label}
    </div>
);

export default counterControl;
