import {html} from 'lit-html';
import Home from './components/home'
import Favorite from './components/favorite'
import About from './components/about'
import {getUser} from './service/api'
import './style.scss'
const App = () => html `<wc-app>
    ${Home()}
    ${About}
    ${Favorite}
<wc-app/>`

export default App;