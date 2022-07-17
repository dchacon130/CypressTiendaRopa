describe('Login', () => {
    
    beforeEach('open url', () => {
        cy.visit('http://automationpractice.com/');
    });

    it('Login with incorrect email', () => {
        cy.login('diego@gmail.com', 'password', 'Authentication failed.')  ;
    });
    
});