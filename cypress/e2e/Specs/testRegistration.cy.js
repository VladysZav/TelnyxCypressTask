import { MainPage } from "../../Pages/mainPage.cy";
import {RegistrationPage} from '../../Pages/registrationPage.cy';

it('TestCase1, Entering valid registration data', () => {
    const mainPage = new MainPage()
    mainPage.navigate()
    mainPage.acceptButtonClick()
    mainPage.signUpButtonClick()
    const registrationPage = new RegistrationPage()
    registrationPage.enterEmail()
    registrationPage.enterFullName()
    registrationPage.enterPassword()
    registrationPage.agreeButtonClick()
    registrationPage.createButtonClick()
    cy.wait(1000)
    registrationPage.checkRegFormScreenshot()
    
});