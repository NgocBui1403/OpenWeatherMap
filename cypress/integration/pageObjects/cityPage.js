class CityPage{
    constructor(){

    }

    getCityName(){
        return cy.xpath(`//h2`);
    }

    getDate(){
        return cy.xpath(`//span[@class='orange-text']`);
    }

    getTemparature(){
        return cy.xpath(`//span[@class='heading']`);
    }


}
module.exports = new CityPage();