/// <reference types="cypress" />

context('Cesar', () => {
    beforeEach(() => {
        cy.visit('../../pages/cesar.html');
    });
    it('title should be Cesar', () => {
        cy.get('title')
            .should('have.text', 'Cesar');
    });
    it('form should submit and display result', () => {
        cy.dataCy('cipher-key').type('3');
        cy.dataCy('cipher-message').type('Hello World!');
        cy.dataCy('ciper-button').submit();
        cy.dataCy('cipher-result').should('have.text', 'Khoor Zruog!'); 
    });
});