class SearchResultsPage {
    clickProductByDocId(docId) {
        return cy.get(`a[href="/product/${docId}"]`).click({force: true});
        //cy.get('.row').find(`a[href="/product/${docId}"]`).click({force: true});
    }
}

export default new SearchResultsPage()