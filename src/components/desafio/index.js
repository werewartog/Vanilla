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
    <div id="buttonRepositorio" onCLick="showRepositorio()" class="desafio-div-button">Ver repositorios</div>
    `
    const buttonFavorites = `
    <div id="buttonFavorite" onCLick="showListFavorites()" class="desafio-div-button">Ver favoritos</div>
    `

    window.showRepositorio = () => {
        showFavorites = false;
        let favorites = document.querySelector(".desafio-table--favorites");
        let repositorios = document.querySelector(".desafio-table--repositorios");
        let centerBox = document.querySelector(".desafio-center--box");
        let buttonRep = document.getElementById("buttonRepositorio");
        let buttonFav = document.getElementById("buttonFavorite");
        let idRepository = document.getElementById('repository');
        if(addRepositoryList){
            idRepository.appendChild(ListRepository())
            addRepositoryList= false;
        }
        
        if (!showRepository) {
            repositorios.classList.add("show");
            buttonRep.classList.add("desafio-div-button-focus")
            buttonFav.classList.remove("desafio-div-button-focus")
            favorites.classList.remove("show");
            centerBox.classList.remove("desafio-collapse-favorites");
            centerBox.classList.add("desafio-collapse-repository");
            
            showRepository = true;
        } else {
            repositorios.classList.remove("show");
            buttonRep.classList.remove("desafio-div-button-focus")
            buttonFav.classList.remove("desafio-div-button-focus")
            centerBox.classList.remove("desafio-collapse-favorites");
            centerBox.classList.remove("desafio-collapse-repository");
            showRepository = false;
        }

    }
    window.showListFavorites = () => {
        showRepository = false;
        let favorites = document.querySelector(".desafio-table--favorites");
        let repositorios = document.querySelector(".desafio-table--repositorios");
        let centerBox = document.querySelector(".desafio-center--box");
        let buttonRep = document.getElementById("buttonRepositorio");
        let buttonFav = document.getElementById("buttonFavorite");
        let idFavorites = document.getElementById('favorites');
        if(addFavoriteList){
            idFavorites.appendChild(ListFavorites())
            addFavoriteList= false;
        }

        if (!showFavorites) {
            favorites.classList.add("show");
            repositorios.classList.remove("show");
            buttonRep.classList.remove("desafio-div-button-focus")
            buttonFav.classList.add("desafio-div-button-focus")
            centerBox.classList.add("desafio-collapse-favorites");
            centerBox.classList.remove("desafio-collapse-repository");
            showFavorites = true;
        } else {
            favorites.classList.remove("show");
            buttonRep.classList.remove("desafio-div-button-focus")
            buttonFav.classList.remove("desafio-div-button-focus")
            centerBox.classList.remove("desafio-collapse-favorites");
            centerBox.classList.remove("desafio-collapse-repository");
            showFavorites = false;
        }
    }

    let desafio = document.createElement('div');
    getUser().then((response) => {
        desafio.innerHTML = `<div id="desafio" class="desafio">
        <div class="desafio-column">
            <div class="desafio-title--box">
                <h1>Desafio</h1>
            </div>
            <div class="desafio-center--box">
                <div class="desafio-image--container">
                    <div class="desafio-avatar-box" style="background: url(${response.avatar_url})"></div>
                    <h3>${response.name || response.login}</h3>
                </div>
                <div class="desafio-list--container">
                    <div class="desafio-list-repos">
                        <span>Repositórios: ${response.public_repos}</span>
                        <span>Seguidores: ${response.followers}</span>
                        <span>Seguindo: ${response.following}</span>
                    </div>
                    <div class="desafio-list-repos--button">
                        ${buttonRepositorio}
                        ${buttonFavorites}
                        </div>
                    </div>
                <div id="repository" class="desafio-table--repositorios hide">
                </div>
                <div id="favorites" class="desafio-table--favorites hide">              
                </div>
            </div>
            <div class="desafio-footer">
                <span class="desafio-text-footer"> Desafio desenvolvedor frontend Qconcursos.com</span>
            </div>
        </div>
    </div>`
    })

    return desafio;
} 
