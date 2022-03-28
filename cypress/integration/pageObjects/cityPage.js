class CityPage{
    constructor(){

    }

    getCityName(){
        return cy.xpath(`//h2`).invoke('text').then((text) => { return text.trim();})
    }

    getDate(){
        return cy.xpath(`//span[@class='orange-text']`);
    }

    getTemparature(){
        return cy.xpath(`//span[@class='heading']`);
    }


}
module.exports = new CityPage();