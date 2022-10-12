class Products {
    constructor() {
        this.classNameActive = "product__cart-btn--active";
        this.lableAdd = "Добавить в корзину";
        this.lableRemove = "Удалить из корзины";
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
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

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        CATALOG_ITEMS.forEach(({ id, name, price, img }) => {
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
                        <button class="product__cart-btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">
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
    }
}

const productsPage = new Products();

