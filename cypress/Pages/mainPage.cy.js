export  class MainPage{
    navigate = () => {
        cy.visit("https://telnyx.com/")
        }
    acceptButtonClick= () => cy.get('button').contains('Accept and close').click()
    signUpButtonClick= () => cy.get('ul>div>a').click({ force: true })
    loginButtonClick= () => cy.get('[class*=" blLdCs"]').contains('Log In').click()
    talkExpertButtonClick= () => cy.get('[href="/contact-us"]').contains('Talk to an expert').click()
    callButtonClick= () => cy.get('[class*="Text-sc-5o8owa-0 sc-28d89a84-0 s"]').click()
    enterEmailInput= () => cy.get('[type="email"]').type('example@email.com')
    tryForFreeButtonClick= () => cy.get('[class="sc-5d3a275a-2 krPznm"]').click()
    productsButtonClick= () => cy.get('li>span').contains('Products').click()
    allProductsButtonClick= () => cy.get('[class*="sc-f97529d6-0 bjUuRN sc-b74bae4-0 s"]').contains('See all Products').click({ force: true })
    solutionsButtonClick= () => cy.get('li>span').contains('Solutions').click()
    allSolutionsButtonClick= () => cy.get('[class*="sc-f97529d6-0 bjUuRN sc-b74bae4-0 s"]').contains('See all Solutions').click({ force: true })
    networkButtonClick= () => cy.get('li>span').contains('Network').click()
    resourcesButtonClick= () => cy.get('[class*="sc-7b3980dc-6"]').contains('Resources').click()
    developerDocsButtonClick= () => cy.get('[class*="sc-7b3980dc-1 "]').contains('Developer Docs').click({ force: true })
    pricingButtonClick= () => cy.get('[class*="sc-7b3980dc-6"]').contains('Pricing').click()
    allPricingDocsButtonClick= () => cy.get('[class*="sc-f97529d6-0 bjUuRN sc-b74bae4-0 s"]').contains('See all Pricing').click({ force: true })

    
}