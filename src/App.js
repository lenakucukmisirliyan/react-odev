import logo from './logo.svg';
import './App.css';

import getData from './lib/service';


getData(1).then(data => console.log(data));