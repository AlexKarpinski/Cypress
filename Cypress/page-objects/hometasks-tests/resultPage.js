class ResultPage {

    get searchValue() {
        return  cy.get('h1[id = "main-heading"]');
    }
}
export default new ResultPage();