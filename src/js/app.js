import '../constants/catalog'
import '../constants/root'
import '../utils/localStorageUtil'
import '../components/Products/Products'
import '../components/CatalogMenu/CatalogMenu'
import '../components/ShoppingCart/ShoppingCart'
import '../components/Header/Header'

import {headerPage} from '../components/Header/Header'
import { productsPage } from "../components/Products/Products";
import { catalogMenuPage } from "../components/CatalogMenu/CatalogMenu";
import { shoppingCartPage } from "../components/ShoppingCart/ShoppingCart";



function componentsRender() {
    headerPage.render();
	productsPage.render();
    catalogMenuPage.render();
    shoppingCartPage.render()
}

componentsRender();

function componenstHandler() {
    productsPage.handleClickOnCartBtn();
}

componenstHandler();