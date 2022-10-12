import { CATALOG_ITEMS } from '../../constants/catalog';
import { localStorageUtil } from '../../utils/localStorageUtil'
import { ROOT_SHOPPING } from '../../constants/root';
import {productsPage} from '../Products/Products'

class ShoppingCart {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    handleClickOnCartDel() {
        const productCartDel = document.querySelectorAll("#shopping_cart_item_close");

        productCartDel.forEach(element => {
            element.addEventListener("click", (e) => {
                const elemClicked = e.target;
                let elemId = elemClicked.getAttribute("data-product-id");
                productsPage.handleSetLocationStorage(elemClicked, elemId);
            });
        });

    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";

        CATALOG_ITEMS.forEach(({ id, name }) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
                    <li class="shopping-cart__item">
                       <span>${name}</span>
                       <img id="shopping_cart_item_close" class="shopping-cart__item-close" data-product-id="${id}" src="./dist/images/icons/close-icon.png">
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

        shoppingCartPage.handleClickOnCartDel();
  }   
}

export const shoppingCartPage = new ShoppingCart();