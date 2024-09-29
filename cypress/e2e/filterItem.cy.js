import homepage from '../support/pageObjects/homepage.page'

describe('Filter items in my toDo list', () => {
  beforeEach(() => {
    cy.visit('/');

    let itemList = ["item 1", "item 2", "item 3"];
    itemList.forEach(item => {
      homepage.inputText(item);
    });
    homepage.itemFinish();
  })

  it('Filter actives item in toDo list', () =>{
    homepage.itemsFilter("Active")
    homepage.itemCounter(2);
    homepage.itemNumberShowed(2);
  })

  it('Filter completes item in toDo list', () =>{
    homepage.itemsFilter("Completed")
    homepage.itemNumberShowed(1);
  })


})