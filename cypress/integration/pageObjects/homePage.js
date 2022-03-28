import cityPage from '../pageObjects/cityPage';

class HomePage{

    constructor(){

    }

    elements = {
        TXT_SEARCH : () => cy.xpath(`//div[@id='desktop-menu']//input[@name='q']`)
    }

    visit() {
        cy.visit('/');
    }

    enter(cityName){
        cy.wait(4000)
        this.elements.TXT_SEARCH().type(cityName);
        return this;
    }

    submit(){
       this.elements.TXT_SEARCH().type('{enter}');
    }

}
module.exports = new HomePage();