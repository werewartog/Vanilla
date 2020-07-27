import {html} from 'lit-html';
import Repositorios from './repositorios';
import {getUser, user} from '../../service/api'
import './style.scss';

const showRepositorio = () => {
    let repositorios = document.querySelector(".favorite-table--repositorios");
    let centerBox = document.querySelector(".favorite-center--box");
    repositorios.classList.toggle("show");
    centerBox.classList.toggle("favorite-center--box--collapse");
}

const Favorite = html `<div id="desafio" class="favorite">
    <div class="favorite-column">
        <div class="favorite-title--box">
            <h1>Titulo</h1>
        </div>
        <div class="favorite-center--box">
            <div class="favorite-image--container">
                <div class="favorite-avatar-box"></div>
                <h3>Heguitta</h3>
            </div>
            <div class="favorite-list--container">
                <div class="favorite-list-repos">
                    <span>Repositórios:</span>
                    <span>Seguidores:</span>
                    <span>Seguindo: </span>
                </div>
                <div class="favorite-list-repos--button">
                    <div class="favorite-div-button" @click=${showRepositorio}>Ver repositório</div>
                    <div class="favorite-div-button">Ver favoritos</div>
                </div>
            </div>
            <div class="favorite-table--repositorios hide">
                ${Repositorios}
            </div>
        </div>
        <div class="favorite-footer">
            <span class="favorite-text-footer"> Desafio desenvolvedor frontend Qconcursos.com</span>
        </div>
    </div>
</div>`

export default Favorite;