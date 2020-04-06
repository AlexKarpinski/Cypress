import BasePage from "../../../page-objects/hometasks-tests/basePage"
import ResultPage from "../../../page-objects/hometasks-tests/resultPage"
import * as currencyDate from "../../../fixtures/currency"
import Chance from 'chance'

describe('Test convert', () => {
    beforeEach(() => {
    })

    it('Positive convert', () => {
        let currency = chance.pickone(currencyDate.rates);
        BasePage.open()
        BasePage.searchInput.click().type(currency.shortName + `{enter}`)
        BasePage.searchButton.click({force: true})
        ResultPage.searchValue.should('contain.text', currency.rate)
    })
})





