import { MainPage } from "../../Pages/mainPage.cy";
const mainPage = new MainPage();

describe('Tests on main page', {}, () => {
    before(() => {
        mainPage.navigate()
        mainPage.acceptButtonClick()
      })
    beforeEach(() => {
        mainPage.navigate()
      })
    it('TestCase2, Testing the "Login in" button', () => {
        mainPage.loginButtonClick()
        cy.get('[class*="Login__Container-fLQnmd"]').should('be.visible') 
    });
    it('TestCase3, Testing the "Talk to an expert" button', () => {
        mainPage.talkExpertButtonClick()
        cy.get('[class*="Text-sc-5o8owa-0 sc-3efef034-2"]').should('be.visible') 
    });
    it('TestCase4, Testing the "Call us" button', () => {
        mainPage.callButtonClick()
        cy.get('[class*="sc-d9b163cf-9"]').should('be.visible') 
    });
    it('TestCase5, Switch to registration by entering an email on the main page', () => {
        mainPage.enterEmailInput()
        mainPage.tryForFreeButtonClick()
        cy.get('[aria-label="signup-form"]').should('be.visible') 

    });
    it('TestCase6, Testing the "Products" button', () => {
        mainPage.productsButtonClick()
        mainPage.allProductsButtonClick()
        cy.get('[class="sc-ce3c78c4-1 dDzYur"]').should('be.visible') 
    });
    it('TestCase7, Testing the "Solutions" button', () => {
        mainPage.solutionsButtonClick()
        mainPage.allSolutionsButtonClick()
        cy.get('[class="sc-ce3c78c4-1 dDzYur"]').should('be.visible') 
    });
    it('TestCase8, Testing the "Network" button', () => {
        mainPage.networkButtonClick()
        cy.get('[class*="Text-sc-5o8owa-0 sc-e76ce976-4"]').should('be.visible') 
    });
    it('TestCase9, Testing the "Solutions" button', () => {
        mainPage.resourcesButtonClick()
        mainPage.developerDocsButtonClick()
        cy.get('[class*="sc-898943d7-3"]').should('be.visible') 
    });
    it('TestCase10, Testing the "Pricing" button', () => {
        mainPage.pricingButtonClick()
        mainPage.allPricingDocsButtonClick()
        cy.get('[class*="sc-e6b6263e-1"]').should('be.visible') 
    });
})

