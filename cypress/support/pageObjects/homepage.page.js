const element = require('../elements/homepage.elements').ELEMENTS
const item = require('../elements/homepage.elements').ITEMS
const filterItem = require('../elements/homepage.elements').FILTERSITEMS

class Homepage {
    inputValidate(text) {
        cy.get(element.inputNewToDo).should('be.visible')
        .and('have.attr', 'placeholder')
        .and('include', text)
    }

    inputText(item) {
        cy.get(element.inputNewToDo).type(item).type('{enter}');
    }

    itemCounter(number){
        cy.get(filterItem.itemCounter).should('contains.text', number)
    }

    itemNumberShowed(number){
        cy.get(item.itemList).should('have.length', number)
        .and('be.visible')
    }

    itemFinish() {
        cy.get(item.finishItem).first().click().should('be.checked');
    }

    itemsFilter(type) {
        cy.get(filterItem.filtersType).contains(type).and('be.visible').click();
    }

    itemDelete() {
        cy.get(item.itemList).first().find('button').invoke('show').click();
    }
}

export default new Homepage();