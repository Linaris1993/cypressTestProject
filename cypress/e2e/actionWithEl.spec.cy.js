/// <reference types="Cypress" />

it('type', () => {
cy.visit('https://next.privat24.ua/mobile?lang=en')
.get('[data-qa-node="phone-number"]')
.clear()
.type(11223344)
});

it('focus', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .focus()
});

it('blur', () => { //highlight for validation errors
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .focus()
    .blur()
});

it('clear', () => { //highlight for validation errors
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="amount"]')
    .type(11223344)
    .wait(20000)
    .clear()
});

it('submit', () => { //submitt is only for forms, for btns use click()l
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('form[method="post"]')
    .submit()
});

it('click', () => { 
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-value="manual"]')
    .click();
});

it('right click', () => { 
    cy.visit('https://example.cypress.io/commands/actions')
    .contains('Right click to edit')
    .rightclick()
});

it('double click', () => { 
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Elements/dblclick_event/_samples_/Examples')
    .dblclick()
});

it('check and uncheck', () => { 
    cy.visit('https://next.privat24.ua/')
   .get('#switch-input')
   .check({force:true})
   .wait(20000)
   .uncheck({force:true})
});

it('select', () => { 
    cy.visit('https://facebook.com/r.php?locale=en_US')
    .get('#month')
    .select('Feb')
    .get('#dayh')
    .select('12')
    .get('#year')
    .select('1991')
});


it('scroll into the view', () => { 
    cy.visit('https://next.privat24.ua/mobile?lang=en')
   .get('[data-qa-node="lang"]')
   .wait(20000)
   .scrollIntoView()
});

it('scroll to X and Y', () => { 
    cy.visit('https://next.privat24.ua/mobile?lang=en')
   cy.scrollTo(0, 500)
});

it.only('trigger', () => { 
    cy.visit('https://next.privat24.ua/?lang=en')
    .contains('Services')
    .wait(2000)
    .trigger('mouseover')
});