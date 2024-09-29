import homepage from '../support/pageObjects/homepage.page'

describe('Delete items in my toDo list', () => {
    beforeEach(() => {
        cy.visit('/');

        let itemList = ["item 1", "item 2", "item 3"];
        itemList.forEach(item => {
            homepage.inputText(item);
        });
    })

    it('Delete one item in toDo list', () => {
        homepage.itemDelete();
        homepage.itemNumberShowed(2);
    })

})