class ProductPage {

    get searchBuyButtonForSingleColorProduct() {
        return cy.get('button[class="primary transaction button"]:first', {timeout: 30000});
    }

    get searchBuyButtonForMultiColorProduct() {
        return cy.get('button[class="button primary transaction"]:first', {timeout: 30000});
    }

    addProductToCart(product) {
        if(product.hasOwnProperty('color')) {
            this.searchBuyButtonForMultiColorProduct.click({force: true})
            cy.get(`[role="button"]:contains("${product.color}")`, {timeout:30000}).click()
        } else this.searchBuyButtonForSingleColorProduct.click({force: true})

    }
}
export default new ProductPage()