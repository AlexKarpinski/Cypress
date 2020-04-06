import Chance from 'chance'

it('if', () => {

    let person = {age: chance.age()}

    let whoThisPerson = (person) => {
        if (person.age < 18) {
            person.type = 'child'
        } else if (person.age >= 18 && person.age <= 35) {
            person.type = 'teen'
        } else if (person.age >= 36 && person.age <= 55) {
            person.type = 'adult'
        } else if (person.age >= 56) {
            person.type = 'senior'
        } else cy.log('error')
        cy.log(person)
    }
    whoThisPerson(person)
})

it('switch', () => {

    let person = {age: chance.age()}

    let whoThisPerson = (person) => {
        switch (true) {
            case (person.age < 18) :
                person.type = 'child'
                break;
            case (person.age >= 18 && person.age <= 35):
                person.type = 'teen'
                break;
            case (person.age >= 36 && person.age <= 55):
                person.type = 'adult'
                break;
            case (person.age >= 56):
                person.type = 'senior'
                break;
            default:
                cy.log('error')
        }
        cy.log(person)
    }
    whoThisPerson(person)
})

it('?', () => {

    let person = {age: chance.age()}

    let whoThisPerson = (person) => {
        person.type = (person.age < 18) ? 'child' :
            (person.age >= 18 && person.age <= 35) ? 'teen' :
                (person.age >= 36 && person.age <= 55) ? 'adult' :
                    (person.age >= 56) ? 'senior' : cy.log('error');
        cy.log(person)
    }
    whoThisPerson(person)
})