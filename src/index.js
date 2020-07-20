import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import movies from './reducers';

const store = createStore(movies);



ReactDOM.render(<App store = {store}/>,document.getElementById('root'));
