import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family'
import Member from './menber'

ReactDOM.render(
   <Family sobre='silva'>
       <Member name='juca'/>
       <Member name='juca2'/>
   </Family>
, document.getElementById('app'))


 