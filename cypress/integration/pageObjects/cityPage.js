class CityPage{
    constructor(){

    }

    getCityName(){
        return cy.xpath(`//h2`);
    }

    getDate(){
        return cy.xpath(`//span[@class='orange-text']`);
    }

}
module.exports = new CityPage();