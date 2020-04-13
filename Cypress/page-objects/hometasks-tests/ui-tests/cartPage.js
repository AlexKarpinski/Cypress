class CartPage {

    getProductName() {
        return cy.get('a > .roboto-header-text-9')
    }

    getProductPrice() {
        return cy.get('.text-right')
    }

    getProductCount() {
        return cy.get('.navbar-filler > .visible')
    }

    removeCart() {
        return cy.get('.button-text').click()
    }
}

export default new CartPage()