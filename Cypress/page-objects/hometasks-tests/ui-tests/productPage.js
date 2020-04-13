class ProductPage {

    get searchBuyButtonForSingleColorProduct() {
        return cy.get('button[class="primary transaction button"]:first');
    }

    get searchBuyButtonForMultiColorProduct() {
        return cy.get('button[class="button primary transaction"]:first');
    }

    addProductToCart(isHasColor) {
        if(isHasColor!==true) {
            this.searchBuyButtonForSingleColorProduct.click({force: true})
        } else if (isHasColor===true) {
            this.searchBuyButtonForMultiColorProduct.click({force: true})
            cy.get('[role="button"][aria-label=" Clearly White  Is $69.  Add to cart  "]').click()
        }
    }
}

export default new ProductPage()