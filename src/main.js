import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Markdown from './app/Markdown';

const render = () => {
    ReactDOM.render(
        <Markdown/>,
        document.getElementById('root')
    )
};

render();
