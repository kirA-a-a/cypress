import {correctEmail, notCorrectPassword} from "../../data/data";

it('authorization stay fail', () => {
    cy.visit('https://staya.dog/');
    cy.get('.header-bottom__right--link', {timeout: 80000}).click();
    cy.get('.auth-form > form > [type="email"]').type(correctEmail);
    cy.get('.auth-form > form > [type="password"]').type(notCorrectPassword);
    cy.get('.auth-form__submit').click();
    cy.get('.error-label').should('have.text', 'Невозможно войти с предоставленными учетными данными.');
});
