import Chance from 'chance'
import {difference, intersection, isSuperSet, union} from "../../utils/helper";

it('', () => {
    let setA = new Set([1, 2, 3, 4]);
    let setB = new Set([2, 3]);
    let setC = new Set([3, 4, 5, 6]);

    cy.log(isSuperSet(setA, setB));   // => true
    cy.log(union(setA, setC));        // => Set [1, 2, 3, 4, 5, 6]
    cy.log(intersection(setA, setC)); // => Set [3, 4]
    cy.log(difference(setA, setC));
})








