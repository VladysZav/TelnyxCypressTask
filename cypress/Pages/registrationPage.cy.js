export class RegistrationPage{
    //scrollToRegistrationForm= () => cy.get('[aria-label="signup-form"]').scrollTo()
    emailGenerator() {
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let string = '';
        for (let i = 0; i < 10; i++) {
            string += chars[Math.floor(Math.random() * chars.length)];            
        }
        console.log(string + '@gmail.com');
        return string + '@gmail.com';       
    }
    enterEmail= () => cy.get('[id="email"]').type(this.emailGenerator())
    enterFullName= () => cy.get('[id="full_name"]').type('Some Name')
    enterPassword= () => cy.get('[id="password"]').type('Qwertyuiop1*')
    agreeButtonClick= () => cy.get('[aria-labelledby="terms-label"]').click()
    createButtonClick= () => cy.get('[type="submit"]').click()
    checkRegFormScreenshot= () => cy.get('[aria-label="signup-form"]').screenshot()
}