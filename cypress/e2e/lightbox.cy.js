/// <reference types="cypress" />

context('Lightbox', () => {
    beforeEach(() => {
        cy.visit('../../pages/lightbox.html');
    });
    it('title should be Lightbox, with Tailwind CSS & AlpineJS', () => {
        cy.dataCy('title')
            .should('have.text', 'Lightbox, with Tailwind CSS & AlpineJS');
    });
    it('open lightbox on clic on image', () => {
        cy.dataCy('cipher-open').click();
        cy.dataCy('cipher-lightbox').should('be.visible'); // adapte selon ton HTML
    });
    it('close lightbox on clic outside', () => {
        cy.dataCy('cipher-open').click();
        cy.dataCy('cipher-lightbox').should('be.visible'); // adapte selon ton HTML
        cy.get('body').click(0, 0); // clic en haut à gauche pour fermer
        cy.dataCy('cipher-lightbox').should('not.be.visible'); 
    });
    it('check lightbox like button', () => {
        cy.dataCy('cipher-open').click();
        cy.dataCy('cipher-lightbox').should('be.visible'); 
        cy.dataCy('cipher-like-button').click();
        cy.dataCy('cipher-over-count').should('have.text', '1'); 
        cy.dataCy('cipher-open-count').should('have.text','1'); 
    });
    it('check lightbox like button on second click', () => {
        cy.dataCy('cipher-open').click();
        cy.dataCy('cipher-lightbox').should('be.visible'); 
        cy.dataCy('cipher-like-button').click();
        cy.dataCy('cipher-over-count').should('have.text', '1'); 
        cy.dataCy('cipher-open-count').should('have.text','1'); 
        cy.dataCy('cipher-like-button').click();
        cy.dataCy('cipher-over-count').should('have.text', '0'); 
        cy.dataCy('cipher-open-count').should('have.text','0'); 
    });
});