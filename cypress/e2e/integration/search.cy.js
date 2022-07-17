describe('Search elements', () => {
    beforeEach('Open browser', () => {
        cy.visit('http://automationpractice.com/');
    });
    
    it('sesarch for elements with multiple results', () => {
        
        cy.fixture('index').then((index)=>{
            cy.get(index.searchField).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.resultTitle).should('contain', 'dress');
        })
    });

    it('Search for elements with no results', () => {
        cy.fixture('index').then((index)=>{
            cy.get(index.searchField).type('qerty');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.badResultTitle).should('contain', 'No results were found for your search');
        })
    });
});