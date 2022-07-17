describe('Search elements', () => {
    beforeEach('Open browser', () => {
        cy.visit('http://automationpractice.com/');
    });
    
    it('sesarch for elements with multiple results', () => {
        
        cy.search('dress');

        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.resultTitle).should('contain', 'dress');
        })
    });

    it('Search for elements with no results', () => {
        
        cy.search('qerty');

        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.badResultTitle).should('contain', 'No results were found for your search');
        })
    });

    it('Search from a text file', () => {
        cy.readFile('cypress/support/search.txt').then((text)=>{
            cy.search(text);
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.resultTitle).should('contain', 'chiffon');
        }) 
    });
});