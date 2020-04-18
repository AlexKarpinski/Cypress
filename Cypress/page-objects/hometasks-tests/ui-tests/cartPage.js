class CartPage {

    open() {
        cy.visit('https://store.google.com/us/cart?hl=en-US');
    }

    getProductName() {
        return cy.get('a > .roboto-header-text-9')
    }

    getProductPrice() {
        return cy.get('.text-right')
    }

    getProductName(product) {
        return cy.get(`[data-backend-docid='${product.docId}'] > .row`)
    }

    getProductPrice(product) {
        return cy.get('.text-right').contains(`${product.price}`)
    }

    getProductCount() {
        return cy.get('.navbar-filler > .visible', {timeout: 60000})
    }

    changeProductCount(product) {
        return cy.get(`[data-backend-docid='${product.docId}'] div > .item-qty-selector`, {timeout: 60000}).select('2')
    }

    getResultPrice() {
        return cy.get('.float-right')
    }

    removeCart() {
        cy.visit('https://store.google.com/us/cart')
        cy.get('.button-text').click()
    }
}

export default new CartPage()