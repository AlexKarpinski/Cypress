describe('Test fors] reqres', () => {
    beforeEach(() => {
        // cy.visit('https://example.cypress.io/commands/actions')
    })

    // https://on.cypress.io/interacting-with-elements

    it('create user', () => {
        cy.fixture('user').then(user => {
            cy.request('POST', '/api/users', user).then(response => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', user.name)
                expect(response.body).to.have.property('job', user.job)
            })
        })
    })

    it('Negative:POST request - login unsuccessful', () => {
        cy.request({
            method: 'POST', url: '/api/login', failOnStatusCode: false, body:
                {
                    "email": "peter@klaven"
                }
        }).then(response => {
            expect(response.status).to.eq(400)
        })
    })
})
