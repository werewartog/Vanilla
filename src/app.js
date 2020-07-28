import { html } from 'lit-html';
import Home from './components/home'
import Desafio from './components/desafio'
import About from './components/about'
import './style.scss'
const App = () => html`<wc-app>
    ${Home()}
    ${About()}
    ${Desafio()}
<wc-app/>`

export default App;