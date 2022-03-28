import CityPage from '../pageObjects/cityPage';
import HomePage from '../pageObjects/homePage'
import SearchPage from '../pageObjects/searchPage';

describe('Verify searching for a city ', () => {
    const noneCity = require('../../fixtures/noneCities')
    noneCity.forEach((noneCity) => {
    //TC01-Verify that navigating to search page after enter the none city's name
        it('should navigate to search page when searching the ' + noneCity.name, () => {

            //Visit: https://openweathermap.org/
            HomePage.visit();

            //Enter the searched keyword
            HomePage.enter(noneCity.name);
            HomePage.submit();

            //Verify after entering the searched keyword, it should navigate to the correct URL
            cy.url().should('include',  Cypress.config().baseUrl + 'find?q=');

            //Verify with the searched keyword has the returned result
            SearchPage.getNumberResults().then( result => {
                expect(result).equal(0)
            })

            //verify the first result link contains the searched keyword
            SearchPage.getAlert().should('contain', noneCity.expected);
        });
        
    })
    

})