class SearchPage{

    constructor(){

    }
    
    getNumberResults(){
        return cy.get('body')
            .then($body => {
                if ($body.find('.table').length) {
                    return $body.find('.table tr').length;
                }
                if ($body.find('.alert').length) {
                    return 0;
                }
                return -1;
            })

    }
 
    getTextContentOnLink(index){
        return cy.xpath(`(((//table//tr)[`+ index +`])//a)[1]`).invoke('text');
    }

    clickTheResultLink(index){
        return cy.xpath(`(((//table//tr)[`+ index +`])//a)[1]`).click();
    }
    
}
module.exports = new SearchPage();