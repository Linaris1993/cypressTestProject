export class Transfers {

    fullName(first, last) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
        .type(first)
        .get('[data-qa-node="lastNamedebitSource"]')
        .type(last)
        .click();
        cy.wait(3000)
    }

    typeRecieverCard(receiverCard) {
        cy.get('[data-qa-node="numberreceiver"]')
        .type(receiverCard)
    }

    typeReceiverNameAndLastName(name, lastName) {
        cy.get('[data-qa-node="firstNamereceiver"]')
        .type(name)
        cy.get('[data-qa-node="lastNamereceiver"]')
        .type(lastName)
    }

    typeComment(comment) {
        cy.get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type(comment)
    }

    checkDebitAndReceiverCards(debitCard, receiverCard) {
        cy.get('[data-qa-node="payer-card"]')
        .should('have.text', debitCard)
        .get('[data-qa-node="receiver-card"]')
        .should('have.text', receiverCard)
    }

    checkDebitAmountAndTotalAmount(debitAmount, totalAmount) {
        cy.get('[data-qa-node="payer-amount"]')
        .should('have.text', debitAmount)
        .get('[data-qa-node="total"]')
        .find('div')
        .should('contain.text', totalAmount)
    }

    checkDebitComission(comission) {
        cy.get('[data-qa-node="payer-currency"]')
        .should('have.text', comission)
    }

    checkTotalCurrency(currency) {
        cy.get('[data-qa-node="total"]')
        .find('div')
        .should('contain.text', currency)
    }

    checkComment(comment) {
   cy.get('[data-qa-node="comment"]')
   .should('have.text', comment)
    }
}

export const transfers = new Transfers(); 