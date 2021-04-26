import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css' // all browsers will have the same styles
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import Provider from './Provider';


ReactDOM.render(<Provider />, document.getElementById('app'))

