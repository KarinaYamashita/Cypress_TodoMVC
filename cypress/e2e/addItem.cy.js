import homepage from '../support/pageObjects/homepage.page'

describe('Add items in my toDo list', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Add one item in list', () =>{
    homepage.inputText("item 1");
    homepage.itemCounter(1);
    homepage.itemNumberShowed(1);
  })

  it('Add items in list', () => {
    let itemList = ["item 1", "item 2", "item 3"];
    itemList.forEach(item => {
      homepage.inputText(item);
    });
    homepage.itemCounter(itemList.length);
    homepage.itemNumberShowed(itemList.length);
  })

})