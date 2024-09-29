import homepage from '../support/pageObjects/homepage.page'

describe('Complete items in my toDo list', () => {
    beforeEach(() => {
        cy.visit('/');

        let itemList = ["item 1", "item 2", "item 3"];
        itemList.forEach(item => {
            homepage.inputText(item);
        });
    })

    it('Complete item in toDo list', () => {
        homepage.itemFinish();
        homepage.itemCounter(2)
    })

})