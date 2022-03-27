class HomePage{
    elements = {
        TXT_SEARCH : () => cy.xpath(`//div[@id='desktop-menu']//input[@name='q']`),
        BTN_SUBMIT : () => cy.xpath(`//div[@id='desktop-menu']//input[2]`)
    }

    visit() {
        cy.visit('/');
    }

    searchCity(cityName){
        this.elements.TXT_SEARCH().type(cityName);
        this.elements.BTN_SUBMIT().click();
    }

}
module.exports = new HomePage();