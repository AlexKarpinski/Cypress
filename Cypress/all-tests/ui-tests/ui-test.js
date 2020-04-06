import  SearchResultsPage from "../../page-objects/ui-tests/searchResultsPage"
import  AccessoriesPage from "../../page-objects/ui-tests/accessoriesPage"

/*describe('Test fors] reqres', () => {
    it('Positive', () => {
        cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US')
        cy.get('.header-search-icon').click()
        cy.get('input[aria-label = "Search Google Store"]').type(`Google Pixel Buds{enter}`)
        cy.get('a[href="/product/pixel_buds"]').should('exist')
    })
})*/

describe('Test fors] reqres', () => {

    beforeEach(() => {
        cy.fixture('product').then(data => {
            cy.wrap(data).as('productData')
        })
    })

    it('Positive: search product', () => {
        cy.get('@productData').then((productData) => {
        cy.log("GIVEN User is at Accessories Page")
        AccessoriesPage.open();
        cy.log("WHEN User performs search product by name")
        AccessoriesPage.performSearch(productData.name)
        SearchResultsPage.getProductByDocId(productData.url)
            .should('exist')
        })
    })
})


