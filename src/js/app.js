function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
	productsPage.render();

    catalogMenuPage.render();

    shoppingCartPage.render()
}

render();