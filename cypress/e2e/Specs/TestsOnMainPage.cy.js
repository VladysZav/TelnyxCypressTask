import { MainPage } from "../../Pages/mainPage.cy";

describe('Tests on main page', {}, () => {
    before(() => {
        const mainPage = new MainPage()
        mainPage.navigate()
        mainPage.acceptButtonClick()
      })
    beforeEach(() => {
        const mainPage = new MainPage()
        mainPage.navigate()
      })
    it('TestCase2, Testing the "Login in" button', () => {
        const mainPage = new MainPage()
        mainPage.loginButtonClick()
        cy.get('[class*="Login__Container-fLQnmd"]').should('be.visible') 
        cy.get('[class*="Login__Container-fLQnmd"]').screenshot()
    });
    it('TestCase3, Testing the "Talk to an expert" button', () => {
        const mainPage = new MainPage()
        mainPage.talkExpertButtonClick()
        cy.get('[class*="Text-sc-5o8owa-0 sc-3efef034-2"]').should('be.visible') 
        cy.get('[class="sc-62badcbb-1 kNFjZ"]').screenshot()
    });
    it('TestCase4, Testing the "Call us" button', () => {
        const mainPage = new MainPage()
        mainPage.callButtonClick()
        cy.get('[class*="sc-d9b163cf-9"]').should('be.visible') 
    });
    it('TestCase5, Switch to registration by entering an email on the main page', () => {
        const mainPage = new MainPage()
        mainPage.enterEmailInput()
        mainPage.tryForFreeButtonClick()
        cy.get('[aria-label="signup-form"]').should('be.visible') 
        cy.get('[aria-label="signup-form"]').screenshot()

    });
    it('TestCase6, Testing the "Products" button', () => {
        const mainPage = new MainPage()
        mainPage.productsButtonClick()
        mainPage.allProductsButtonClick()
        cy.get('[class="sc-ce3c78c4-1 dDzYur"]').should('be.visible') 
        cy.get('[class="sc-ce3c78c4-1 dDzYur"]').screenshot()
    });
    it('TestCase7, Testing the "Solutions" button', () => {
        const mainPage = new MainPage()
        mainPage.solutionsButtonClick()
        mainPage.allSolutionsButtonClick()
        cy.get('[class="sc-ce3c78c4-1 dDzYur"]').should('be.visible') 
        cy.get('[class="sc-ce3c78c4-1 dDzYur"]').screenshot()
    });
    it('TestCase8, Testing the "Network" button', () => {
        const mainPage = new MainPage()
        mainPage.networkButtonClick()
        cy.get('[class*="Text-sc-5o8owa-0 sc-e76ce976-4"]').should('be.visible') 
        cy.get('[class*="Text-sc-5o8owa-0 sc-e76ce976-4"]').screenshot()
    });
    it('TestCase9, Testing the "Solutions" button', () => {
        const mainPage = new MainPage()
        mainPage.resourcesButtonClick()
        mainPage.developerDocsButtonClick()
        cy.get('[class*="sc-898943d7-3"]').should('be.visible') 
        cy.get('[class*="sc-898943d7-3"]').screenshot()
    });
    it('TestCase10, Testing the "Pricing" button', () => {
        const mainPage = new MainPage()
        mainPage.pricingButtonClick()
        mainPage.allPricingDocsButtonClick()
        cy.get('[class*="sc-e6b6263e-1"]').should('be.visible') 
        cy.get('[class*="sc-e6b6263e-1"]').screenshot()
    });
})

