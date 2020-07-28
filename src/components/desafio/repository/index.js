import {getUserRepo} from '../../../service/api'
import './style.scss'

export default () => {
    let repository = document.createElement('div');
    getUserRepo().then((response) => {
        repository.innerHTML = `
        <div class="repository-container">
            <div>
                <h4> Lista de repositórios </h4>
            </div>
            <div class="repository-overflow">
                <table class="repository-table">
                ${
                    response.map((item) => (
                            `
                            <tr class="repository-table--background">
                                <td class="repository-line">${item.name}</td>
                            </tr>        
                            `
                        )
                        ).join('')   
                }
                </table>
            </div>
        </div>
        `;
    });
    return repository;

}