import { MainPage } from "../../Pages/mainPage.cy";
import {RegistrationPage} from '../../Pages/registrationPage.cy';
const mainPage = new MainPage();
const registrationPage = new RegistrationPage();

it('TestCase1, Entering valid registration data', () => {
    mainPage.navigate()
    mainPage.acceptButtonClick()
    mainPage.signUpButtonClick()
    registrationPage.enterEmail()
    registrationPage.enterFullName()
    registrationPage.enterPassword()
    registrationPage.agreeButtonClick()
    registrationPage.createButtonClick()
    cy.wait(1000)
    registrationPage.checkRegFormScreenshot()    
});
