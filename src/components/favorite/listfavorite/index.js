import {getUserRepoFav} from '../../../service/api'
import './style.scss'

export default () => {
    let favorites = document.createElement('div');
    getUserRepoFav().then((response) => {
        console.log(response)
        favorites.innerHTML = `
        <div class="listFavorite-container">
            <div>
                <h4> Lista de favoritos </h4>
            </div>
            <div class="favorites-overflow">
                <table class="listFavorite-table">
                ${
                    response.items.map((item) => (
                    `
                            <tr class="listFavorite-table--background">
                                <td class="listFavorite-line">${item.login}</td>
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
    return favorites;

}