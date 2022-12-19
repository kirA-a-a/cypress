import {correctEmail, correctPassword} from "../../data/data";

it('authorization stay', () => {
    cy.visit('https://staya.dog/');
    cy.get('.header-bottom__right--link', {timeout: 80000}).click();
    cy.get('.auth-form > form > [type="email"]').type(correctEmail);
    cy.get('.auth-form > form > [type="password"]').type(correctPassword);
    cy.get('.auth-form__submit').click();
    cy.get('.profile-orders__title').should('have.text', 'Мои заказы');
});
