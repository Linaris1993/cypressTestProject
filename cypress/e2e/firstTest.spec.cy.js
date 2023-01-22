/// <reference types="Cypress" />

describe('first test', () => {

it('By ID', () => {
cy.visit('https://facebook.com')
cy.get('#email')
});

it('By Class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('.ds-input')
}); 

it('By Tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('nav')
});

it('By Tag Value', () => {
    cy.visit('https://facebook.com')
    cy.get('[name="pass"]')
});

it('By Different Tag ', () => {
    cy.visit('https://facebook.com')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});

it('By Different Types', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('button[type="button"][title="close banner"]')
});

it('By Contains name', () => {
    cy.visit('https://next.privat24.ua/');
    cy.get('*[class^="card"]') //searching any selector where class name starts from 'card'
});

it('Using get with find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open');
    cy.get('tbody').find('td').find('div').find('button').eq('0');
});

it.only('Using get with find and Eq', () => {
    cy.viewport(1800, 700);
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
    cy.get('ul').find('li').find('[href="#Syntax"]');

});

});