import { CATALOG_ITEMS } from '../../constants/catalog';
import { localStorageUtil } from '../../utils/localStorageUtil'
import { ROOT_SHOPPING } from '../../constants/root';

class ShoppingCart {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";

        CATALOG_ITEMS.forEach(({ id, name }) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
                    <li class="shopping-cart__item">
                       <span>${name}</span>
                       <img class="shopping-cart__item-close" src="./dist/images/icons/close-icon.png" onclick="productsPage.handleSetLocationStorage(this, '${id}')">
                    </li>
                `;
			}
		});
        const html = `
            <div class="sidebar__header shopping-cart__header"> 
                <p class="sidebar__header-text shopping-cart__header-text">Корзина (${productsStore.length})</p>
            </div>
            <div class="sidebar__content shopping-cart__content">
                <ul class="shopping-cart__items">
                    ${htmlCatalog}
                </ul>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
  }   
}

export const shoppingCartPage = new ShoppingCart();