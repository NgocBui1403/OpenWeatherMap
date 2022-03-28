import HomePage from '../pageObjects/homePage'

describe('Verify searching for a city', () => {

   //TC01-Verify that navigating to search page after enter the city's name
   //Visit: https://openweathermap.org/
   //Click the search textbox
   //Type the city's name
   //Press Enter
   //Verify the search page is loaded
   
    it('Navigate to search page', () => {
        const txt = "Ha Noi";
        HomePage.visit();
        HomePage.enter(txt);
        HomePage.submit();
        cy.url().should('be.equal',  Cypress.config().baseUrl + 'find?q=' + txt.replace(' ', '+'))

    })

   
    

})