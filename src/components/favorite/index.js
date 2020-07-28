import './style.scss';
import { getUser } from '../../service/api'
import ListRepository from './repository'
import ListFavorites from './listfavorite'



export default () => {

    let showRepository = false;
    let addRepositoryList = true;
    let showFavorites = false;
    let addFavoriteList = true;

    const buttonRepositorio = `
    <div id="buttonRepositorio" onCLick="showRepositorio()" class="favorite-div-button">Ver repositorios</div>
    `
    const buttonFavorites = `
    <div id="buttonRepositorio" onCLick="showListFavorites()" class="favorite-div-button">Ver favoritos</div>
    `

    window.showRepositorio = () => {
        showFavorites = false;
        let favorites = document.querySelector(".favorite-table--favorites");
        let repositorios = document.querySelector(".favorite-table--repositorios");
        let centerBox = document.querySelector(".favorite-center--box");
        let idRepository = document.getElementById('repository');
        if(addRepositoryList){
            idRepository.appendChild(ListRepository())
            addRepositoryList= false;
        }
        
        if (!showRepository) {
            repositorios.classList.add("show");
            favorites.classList.remove("show");
            centerBox.classList.remove("favorite-collapse-favorites");
            centerBox.classList.add("favorite-collapse-repository");
            
            showRepository = true;
        } else {
            repositorios.classList.remove("show");
            centerBox.classList.remove("favorite-collapse-favorites");
            centerBox.classList.remove("favorite-collapse-repository");
            showRepository = false;
        }

    }
    window.showListFavorites = () => {
        showRepository = false;
        let favorites = document.querySelector(".favorite-table--favorites");
        let repositorios = document.querySelector(".favorite-table--repositorios");
        let centerBox = document.querySelector(".favorite-center--box");
        let idFavorites = document.getElementById('favorites');
        if(addFavoriteList){
            idFavorites.appendChild(ListFavorites())
            addFavoriteList= false;
        }

        if (!showFavorites) {
            favorites.classList.add("show");
            repositorios.classList.remove("show");
            centerBox.classList.add("favorite-collapse-favorites");
            centerBox.classList.remove("favorite-collapse-repository");
            showFavorites = true;
        } else {
            favorites.classList.remove("show");
            centerBox.classList.remove("favorite-collapse-favorites");
            centerBox.classList.remove("favorite-collapse-repository");
            showFavorites = false;
        }
    }

    let favorite = document.createElement('div');
    getUser().then((response) => {
        favorite.innerHTML = `<div id="desafio" class="favorite">
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
                        ${buttonFavorites}
                        </div>
                    </div>
                <div id="repository" class="favorite-table--repositorios hide">
                </div>
                <div id="favorites" class="favorite-table--favorites hide">              
                </div>
            </div>
            <div class="favorite-footer">
                <span class="favorite-text-footer"> Desafio desenvolvedor frontend Qconcursos.com</span>
            </div>
        </div>
    </div>`
    })

    return favorite;
} 
