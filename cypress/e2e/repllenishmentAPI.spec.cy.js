/// <reference types="Cypress" />

import { archivePage } from "../support/pages/archive";
import { basePage } from "../support/pages/basePage";
import { mobileReplenishment } from "../support/pages/mobileReplenishment";

beforeEach('setup success responce with stub', ()=> {
    cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check?', 
    {fixture: 'confirmResponse/success.json'})
})

describe('Mock and Stub tests', () => {

it('Replemishment of mobile phone number', () => {
      basePage.open('https://next.privat24.ua/mobile?lang=en')
      mobileReplenishment.typePhoneNumber('686979712')
      basePage.typeAmount('1')
      basePage.typeDebitCardData('4552331448138217', '0524', '111')
      cy.wait(3000)
      basePage.submitPayment()
      basePage.fullName('Shayne', 'McConnell')
      mobileReplenishment.checkDebitCard('4552 **** **** 8217')
      mobileReplenishment.checkDebitAmount('1')
      mobileReplenishment.checkDebitAmountAndComission('2')
      mobileReplenishment.checkReceiverAmount('1')
      mobileReplenishment.checkPaymentCurrency('UAH')
      cy.contains('Confirm')
      .click()
 })

 it('check  success state of payment in the archive | public session', () => {
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive', 
    {fixture: 'archiveResponse/success.json'})

        basePage.open('https://next.privat24.ua?lang=en');
        archivePage.selectArchiveMenu();
 })

 
 it.only('check error state of payment in the archive | public session', () => {
    cy.intercept('https://next.privat24.ua/api/p24/pub/archive', 
    {fixture: 'archiveResponse/error.json'})

        basePage.open('https://next.privat24.ua?lang=en');
        archivePage.selectArchiveMenu();
 })

 cy.wait(2000).get('tbody').toMatchImageSnapshot();

});