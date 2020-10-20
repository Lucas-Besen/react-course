import React from 'react';
import ReactDOM from 'react-dom';
import {Primeiro, Segundo} from './component.jsx'

ReactDOM.render(
<div>
    <Primeiro/>
    <Segundo value='Segundo Componente!'/>
</div>
, document.getElementById('app'))


 