class SearchPage{

    constructor(){

    }
    
    getNumberResults(){
        cy.wait(4000)
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
        return cy.xpath(`(((//table//tr)[`+ index +`])//a)[1]`).invoke('text').then((text) => { return text.trim(); });
    }

    clickTheResultLink(index){
        return cy.xpath(`(((//table//tr)[`+ index +`])//a)[1]`).click();
    }
    
}
module.exports = new SearchPage();