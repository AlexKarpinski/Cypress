import AccessoriesPage from "../../../page-objects/hometasks-tests/ui-tests/accessoriesPage"
import SearchResultsPage from "../../../page-objects/hometasks-tests/ui-tests/searchResultsPage"
import ProductPage from "../../../page-objects/hometasks-tests/ui-tests/productPage"
import CartPage from "../../../page-objects/hometasks-tests/ui-tests/cartPage"


describe('REQ_01: User is able to add single and multiple color product to the cart', () => {

    beforeEach(() => {

    })

    it('Positive: User is able to add single color product to the cart', () => {
        cy.fixture('singleColorProduct').then(data => {
            cy.wrap(data).as('productData')
        })
        cy.get('@productData').then((productData) => {
            cy.log("GIVEN User is at Accessories Page")
            AccessoriesPage.open();
            cy.log("WHEN User performs search product by name")
            AccessoriesPage.performSearch(productData.name)
            cy.log("WHEN User selects the product")
            SearchResultsPage.clickProductByDocId(productData.url)
            cy.log("WHEN User click buy")
            ProductPage.addProductToCart(productData.color)
            CartPage.getProductCount().should('have.text', '(1 item)')
            CartPage.getProductName().should('contain.text', productData.name)
            CartPage.getProductPrice().should('have.text', productData.price)
            CartPage.removeCart()
        })
    })

    it('Positive: User is able to add multi color product to the cart', () => {
        cy.fixture('multiColorProduct').then(data => {
            cy.wrap(data).as('productData')
        })
        cy.get('@productData').then((productData) => {
            cy.log("GIVEN User is at Accessories Page")
            AccessoriesPage.open();
            cy.log("WHEN User performs search product by name")
            AccessoriesPage.performSearch(productData.name)
            cy.log("WHEN User selects the product")
            SearchResultsPage.clickProductByDocId(productData.url)
            cy.log("WHEN User click buy")
            ProductPage.addProductToCart(productData.color)
            CartPage.getProductCount().should('have.text', '(1 item)')
            CartPage.getProductName().should('contain.text', productData.name)
            CartPage.getProductPrice().should('have.text', productData.price)
        })
    })
})