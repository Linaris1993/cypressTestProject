/// <reference types="Cypress" />

import { basePage } from "../support/pages/basePage";
import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { transfers } from "../support/pages/transfers";

describe('POM tests', () => {

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
 });

 it('Money transfer between foreign cards', () => {
      basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
      basePage.typeDebitCardData('4552331448138217', '0524', '111')
      basePage.fullName('Shayne', 'McConnell')
      transfers.typeRecieverCard('5309233034765085')
      transfers.typeReceiverNameAndLastName('Juliana', 'Jansenn')
      basePage.typeAmount('3000')
      transfers.typeComment('Cypress test')
      cy.wait(2000)
      basePage.submitPayment()
      transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085')
      transfers.checkDebitAmountAndTotalAmount('3 000 UAH', '3 170.49')
      transfers.checkDebitComission('170.49 UAH')
      transfers.checkTotalCurrency('UAH')
      transfers.checkComment('Cypress test')
 })
});