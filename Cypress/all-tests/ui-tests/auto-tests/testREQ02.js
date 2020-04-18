import AccessoriesPage from "../../../page-objects/hometasks-tests/ui-tests/accessoriesPage"
import SearchResultsPage from "../../../page-objects/hometasks-tests/ui-tests/searchResultsPage"
import ProductPage from "../../../page-objects/hometasks-tests/ui-tests/productPage"
import CartPage from "../../../page-objects/hometasks-tests/ui-tests/cartPage"

describe('REQ_02: User story: User is able to change the quantity of products in the card', () => {

    const TESTING_PRODUCTS = [{productData: 'singleColorProduct'},
        {productData: 'storeProducts'}]

    beforeEach(() => {
        TESTING_PRODUCTS.forEach(product => {
            cy.fixture(product.productData).then(data => {
                cy.wrap(data).as('productData')
                cy.get('@productData').then((productData) => {
                    cy.log("GIVEN User is at Accessories Page")
                    AccessoriesPage.open();
                    cy.log("WHEN User performs search product by name")
                    AccessoriesPage.performSearch(productData.name)
                    cy.log("WHEN User selects the product")
                    SearchResultsPage.clickProductByDocId(productData.url)
                    cy.log("WHEN User click buy")
                    ProductPage.addProductToCart(productData)
                })
            })
        })
    })

    it('Positive: User is able to change the quantity of products in the cart', () => {
        cy.log("GIVEN User is at Cart Page")
        CartPage.open()
        CartPage.getProductCount().should('have.text', ` (${TESTING_PRODUCTS.length} items) `)
        TESTING_PRODUCTS.forEach(dataSet => {
            cy.fixture(dataSet.productData).then(data => {
                cy.wrap(data).as('productData')
            })
            cy.get('@productData').then((productData) => {
                CartPage.getProductName(productData).should('contain.text', productData.name)
                CartPage.getProductPrice(productData).should('have.text', productData.price)
                if (productData.hasOwnProperty('color')) CartPage.getProductName().should('contain.text', productData.color)
                CartPage.changeProductCount(productData)
            })
        })
        CartPage.getResultPrice().should('have.text', '$317.98')

    })
})




