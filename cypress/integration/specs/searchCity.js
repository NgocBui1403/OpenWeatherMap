import CityPage from '../pageObjects/cityPage';
import HomePage from '../pageObjects/homePage'
import SearchPage from '../pageObjects/searchPage';

describe('Verify searching for a city', () => {
    const cities = require('../../fixtures/cities')
    cities.forEach((city) => {
    //TC01-Verify that navigating to search page after enter the city's name
        it('should navigate to search page when searching the ' + city.name, () => {

            //Visit: https://openweathermap.org/
            HomePage.visit();

            //Enter the searched keyword
            HomePage.enter(city.name);
            HomePage.submit();

            //Verify after entering the searched keyword, it should navigate to the correct URL
            cy.url().should('include',  Cypress.config().baseUrl + 'find?q=');

            //Verify with the searched keyword has the returned result
            SearchPage.getNumberResults().then( result => {
                expect(result).to.be.greaterThan(0)
            })

            //verify the first result link contains the searched keyword
            SearchPage.getTextContentOnLink(1).should('be.oneOf', city.expected);
        });

        it('should navigate to city page when click on the result link', () => {

            //Click on the first result link
            SearchPage.clickTheResultLink(1);

            //Verify after navigating to the city page, it should navigate to the correct URL
            cy.url().should('include',  Cypress.config().baseUrl + 'city');

            //Verify the city's name is correct
            CityPage.getCityName().should('be.oneOf', city.expected);

            //Get current day and month
            cy.getCurrentDate().then( curDate => {
                //Verify the current date
                cy.wait(4000);
                CityPage.getDate().should('contain', curDate);
            });
            
            //Verify that temperature
            CityPage.getTemparature().invoke('text').then((text) => {
                var splitText = text.split('°C')[0]
                expect(splitText).to.match(/^[0-9]*$/);           
            })
            
        });
    })
    

})