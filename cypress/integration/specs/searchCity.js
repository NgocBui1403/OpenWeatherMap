import CityPage from '../pageObjects/cityPage';
import HomePage from '../pageObjects/homePage'
import SearchPage from '../pageObjects/searchPage';

describe('Verify searching for a city', () => {

   //TC01-Verify that navigating to search page after enter the city's name
    it('should navigate to search page', () => {
        const txt = "Ha Noi";

        //Visit: https://openweathermap.org/
        HomePage.visit();

        //Enter the searched keyword
        HomePage.enter(txt);
        HomePage.submit();

        //Verify after entering the searched keyword, it should navigate to the correct URL
        cy.url().should('be.equal',  Cypress.config().baseUrl + 'find?q=' + txt.replace(' ', '+'));

        //Verify with the searched keyword has the returned result
        SearchPage.getNumberResults().should('eq', 1);

        //verify the first result link contains the searched keyword
        SearchPage.getTextContentOnLink(1).should('contain', txt);
    })

    it('should navigate to city page when click on the result link', () => {

        //Click on the first result link
        SearchPage.clickTheResultLink(1);

        //Verify after navigating to the city page, it should navigate to the correct URL
        cy.url().should('include',  Cypress.config().baseUrl + 'city');

        //Verify the city's name is correct
        CityPage.getCityName().should('contain', 'Hanoi');

        //Get current day and month
        const curDate = new Date();
        const curDay = curDate.getDate();
        const curMonth = curDate.toLocaleString('default', {month :'short'});

        //Verify the current date
        cy.wait(4000)
        CityPage.getDate().should('contain', curMonth + ' ' + curDay);

    })
    

})