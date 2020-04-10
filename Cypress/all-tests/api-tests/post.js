 describe('POST request', () => {
//Request URL: https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916 
    it('create pet', () => {
        cy.fixture('pet').then(pet => {
            cy.request({
                method: 'POST', url: '/pet', failOnStatusCode: false, body: pet
            }).then(response => {
                expect(response.status).to.eq(200)
            })
        })
    })
})