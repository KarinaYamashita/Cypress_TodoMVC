import homepagePage from "../support/pageObjects/homepage.page";

describe('Regression test homepage', () => {
    context('Validate homepage', () =>{
        beforeEach(() => {
            cy.visit('/')
        })
        it('Validate input data aria label', () => {
            homepagePage.inputValidate('What needs to be done?')
        })
    })
})