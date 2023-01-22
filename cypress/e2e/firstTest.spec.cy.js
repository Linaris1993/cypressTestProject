/// <reference types="Cypress" />
//contains used mostly for text search (buttons, links and etc)

it('look for sigh-in btn', () => {
    cy.visit("https://next.privat24.ua/mobile?lang=en");
    cy.contains('Sign in');
});

it('look tag with sign-in text', () => {
    cy.visit("https://next.privat24.ua/mobile?lang=en");
    cy.contains('div', 'Sign in');
});

it('look for text not case sensitive', () => {
    cy.visit("https://next.privat24.ua/mobile?lang=en");
    cy.contains('SIGN IN', {matchCase: false}); //will find sign in with small letters
});

it.only('look for text not case sensitive', () => {
    cy.visit("https://next.privat24.ua/mobile?lang=en");
    cy.get('footer').contains('Go to old version');
});