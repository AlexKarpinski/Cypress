describe('Get products', () => {
    beforeEach(() => {

    })

    it('it', () => {
        cy.request('GET', 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916')
            .then(response => {
                let productsArray = response.body.products;
                cy.log(productsArray.length)
                for (let prop in productsArray[0]) {
                    cy.log(prop + ': ' + productsArray[0][prop])
                }
            })
    })
})

describe('Get products', () => {
    beforeEach(() => {
        cy.request('GET', 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916')
            .then((response) => {
                cy.wrap(response.body.products).as("productsArray");

            })
    })

    it('before with wrap', () => {
        cy.get('@productsArray')
            .then(productsArray => {
                cy.log(productsArray[0].length)
                for (let prop in productsArray[0]) {
                    cy.log(prop + ': ' + productsArray[0][prop])
                }
            })
    })
})

describe('Get products', () => {
    beforeEach(() => {
        cy.request('GET', 'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916')
            .its('body.products').as('products')
    })

    it('before with its', function() {
                cy.log(this.products[0].length)
                 for (let prop in this.products[0]) {
                     cy.log(prop + ': ' + this.products[0][prop])
                 }
            })
    })






