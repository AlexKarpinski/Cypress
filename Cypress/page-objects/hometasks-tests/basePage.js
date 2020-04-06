class BasePage {
    open() {
        cy.visit('https://www.xe.com/currencyconverter');
    }

    get searchInput() {
        return cy.get('.converterForm').within(() => {
            cy.get('.converterform-field-wrap:last')
        });
    }

    get searchButton() {
        return cy.get('button[data-test-id="converter-submit-button"]');
    }
}

export default new BasePage();