class SearchPage{

    constructor(){

    }
    
    elements = {
        TBL_RESULT : () => cy.xpath(`//table[@class='table']`)
    }

    
}
module.exports = new SearchPage();