class CartPage {

    getProductName() {
        return cy.get('a > .roboto-header-text-9')
    }

    getProductPrice() {
        return cy.get('.text-right')
    }

    getProductCount() {
        return cy.get('.navbar-filler > .visible', {timeout: 60000})
    }

    removeCart() {
        cy.visit('https://store.google.com/us/cart')
        cy.get('.button-text').click()
    }
}

export default new CartPage()