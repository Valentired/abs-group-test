import { CATALOG_ITEMS } from '../../constants/catalog'
import { localStorageUtil } from "../../utils/localStorageUtil";
import { ROOT_PRODUCTS } from "../../constants/root";
import { shoppingCartPage } from '../ShoppingCart/ShoppingCart'

export class Products {
    constructor() {
        this.classNameActive = "product__cart-btn--active";
        this.lableAdd = "Добавить в корзину";
        this.lableRemove = "Удалить из корзины";
    }

    handleSetLocationStorage(element, id) {
        const { isAddedProduct, products } = localStorageUtil.putProducts(id);

        if (isAddedProduct) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.lableRemove;
		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.lableAdd;
		}

        shoppingCartPage.render(products.length);

        if (element.classList.contains("shopping-cart__item-close")) {
            productsPage.render()
		}
    }

    handleClickOnCartBtn() {
        const productCartBtn = document.querySelectorAll("#product-cart-btn");

        productCartBtn.forEach(element => {
            element.addEventListener("click", (e) => {
				const productId = e.target.getAttribute("data-product-id");
				productsPage.handleSetLocationStorage(e.target, productId);
			});
        });

        
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        CATALOG_ITEMS.forEach(({ id, name, img }) => {
			let activeClass = "";
			let activeText = "";

			if (productsStore.indexOf(id) === -1) {
				activeText = this.lableAdd;
			} else {
				activeClass = " " + this.classNameActive;
				activeText = this.lableRemove;
			}
			htmlCatalog += `
                <li class="product">
                    <div class="product__wrapper">
                        <img class="product__img" src="${img}">
                        <span class="product__name">${name}</span>
                        <button id="product-cart-btn" data-product-id="${id}" class="product__cart-btn${activeClass}">
                            ${activeText}
                        </button>
                    </div>
                </li>
            `;
		});
        
        const html = `
            <ul class="products__wrapper">
                ${htmlCatalog};
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;

        productsPage.handleClickOnCartBtn();
    }
}


export const productsPage = new Products();
