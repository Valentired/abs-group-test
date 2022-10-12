class Header {
    constructor() {
        this.productsCountValue = CATALOG_ITEMS.length;
    }
    render(count) {
        let productsCount = this.productsCountValue;
        const html = `
            <ul class="breadcrumbs-list">
                <li class="breadcrumbs-list__item">
                    <a href="/">Главная</a>
                </li>
                <li class="breadcrumbs-list__item">
                    <a href="/">Каталог</a>
                </li>
                <li class="breadcrumbs-list__item breadcrumbs-list__item--current">
                    <a>Для легковых автомобилей</a>
                </li>
            </ul>
            <h1 class="page-title">Масла Mobil для легковых автомобилей</h1>
            <div class="header__products-count">
                Найдено ${productsCount} товаров
            </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }

}

const headerPage = new Header;

