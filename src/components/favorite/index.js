import './style.scss';
import {getUser} from '../../service/api'



export default () => {


    const buttonRepositorio = `
    <div id="buttonRepositorio" onCLick="showRepositorio()" class="favorite-div-button">Ver favoritos</div>
    `
    window.showRepositorio = () => {
        let repositorios = document.querySelector(".favorite-table--repositorios");
        let centerBox = document.querySelector(".favorite-center--box");
        repositorios.classList.toggle("show");
        centerBox.classList.toggle("favorite-center--box--collapse");
    }
    
    let repositorios = document.createElement('div');
    getUser().then((response) => {
        console.log(response)
        repositorios.innerHTML = `<div id="desafio" class="favorite">
        <div class="favorite-column">
            <div class="favorite-title--box">
                <h1>Titulo</h1>
            </div>
            <div class="favorite-center--box">
                <div class="favorite-image--container">
                    <div class="favorite-avatar-box" style="background: url(${response.avatar_url})"></div>
                    <h3>${response.name || response.login}</h3>
                </div>
                <div class="favorite-list--container">
                    <div class="favorite-list-repos">
                        <span>Repositórios: ${response.public_repos}</span>
                        <span>Seguidores: ${response.followers}</span>
                        <span>Seguindo: ${response.following}</span>
                    </div>
                    <div class="favorite-list-repos--button">
                        ${buttonRepositorio}
                        <div class="favorite-div-button">Ver repositório</div>
                        </div>
                    </div>
                <div id="repositorio" class="favorite-table--repositorios hide">
                    <div>
                        <h2> Lista de reposítórios </h2>
                    </div>
                    <div class="repositorios-overflow">
                        <table>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                            </tr>
                            <tr>
                                <td>Alfreds Futterkiste</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="favorite-footer">
                <span class="favorite-text-footer"> Desafio desenvolvedor frontend Qconcursos.com</span>
            </div>
        </div>
    </div>`
    })

    return repositorios;
} 
