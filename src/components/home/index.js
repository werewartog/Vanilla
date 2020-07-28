import { html, directive } from 'lit-html';
import './style.scss'
import facebookIcon from '../../../assets/img/facebook.js';
import githubIcon from '../../../assets/img/github.js';
import linkedinIcon from '../../../assets/img/linkedin.js';
import { getUser } from '../../service/api'

export default () => {
    const home = document.createElement('div');
    getUser().then((response) => {
        home.innerHTML = `<div id="home" class="home">
                <div class="home-column">
                    <div class="home-opacity"></div>
                        <div class="home-row-header">
                            <div class="home-header-name">
                                <span>
                                    ${response.name || response.login}
                                </span>
                            </div>
                            <div class="home-menu">
                                <a href="#home"><span>
                                        Home
                                    </span>
                                </a>
                                <a href="#sobre">
                                    <span>
                                        Sobre
                                    </span>
                                </a>
                                <a href="#desafio">    
                                    <span>
                                        Desafio
                                    </span>
                                </a>
                            </div>
                        </div>
                    <div class="home-center--text">
                        <div>
                            <span class="home-text-big">
                                Desenvolvedor front end.
                            </span>
                        </div>
                        <div>
                            <span class="home-text-small">
                                Desenvolvedor front end.
                            </span>
                        </div>
                    </div>
                    <div class="home-footer">
                        ${facebookIcon().innerHTML}
                        ${githubIcon().innerHTML}
                        ${linkedinIcon().innerHTML} 
                    </div>
                </div>
            </div>`
    })
    return home;
}
