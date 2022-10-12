class CatalogMenu {
	constructor() {
		this.classNameActive = " catalog-menu__item-link--active";
	}

	render() {
		let htmlCatalog = "";

		CATALOG_CATEGORIES.forEach(({ id, parentId, name }) => {
			let activeClass = '';
			let linkPath = "";

			if (parentId) {
				linkPath = `/${parentId}/${id}.html`;
			} else {
				linkPath = `/${id}.html`;
            }
            
            if (linkPath == window.location.pathname) {
                activeClass = this.classNameActive;
            }
				htmlCatalog += `
                <li class="catalog-menu__item">
                    <a class="catalog-menu__item-link${activeClass}" href="${linkPath}">${name}</a>
                </li>
            `;
		});

		const html = `
            <div class="sidebar__header catalog-menu__header"> 
                <p class="sidebar__header-text catalog-menu__header-text">Каталог</p>
            </div>
            <div class="sidebar__content catalog-menu__content">
                <ul class="catalog-menu__items">
                    ${htmlCatalog}
                </ul>
            </div>
        `;

		ROOT_CATALOG_MENU.innerHTML = html;
	}
}

const catalogMenuPage = new CatalogMenu();