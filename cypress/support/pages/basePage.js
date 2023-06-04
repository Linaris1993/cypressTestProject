export class BasePage {

    open(url) {
        cy.visit(url)
    }

    typeAmount(amount) {
        cy.get('[data-qa-node="amount"]')
        .clear()
        .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv) {
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        .get('[data-qa-node="expiredebitSource"]')
        .clear()
        .type(expDate)
        .get('[data-qa-node="cvvdebitSource"]')
        .clear()
        .type(cvv)
    }

    submitPayment() {
        cy.get('button[type="submit"]')
        cy.click()
    }

    fullName(first, last) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
        .type(first)
        .get('[data-qa-node="lastNamedebitSource"]')
        .type(last)
        .click();
        cy.wait(3000)
    }
}

export const basePage = new BasePage();