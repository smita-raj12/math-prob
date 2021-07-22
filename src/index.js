import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mulnum from './mathprob.js';


$(document).ready(function() {
    let mulNum= new Mulnum();
    mulNum.multiples();
    
    let fibNum = new Mulnum();
    fibNum.fibonacci();
});  
