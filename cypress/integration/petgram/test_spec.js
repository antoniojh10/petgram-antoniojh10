/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* global describe, it, cy, Cypress */

describe('Petgram', function () {
  it('Para ver si la app funciona', function () {
    cy.visit('/');
  });

  it('Navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1');
    cy.get('article');
  });

  it('Si podemos navegar con la navbar a la home', function () {
    cy.visit('/pet/1');
    cy.get('nav a').first().click();
    cy.url().should('eq', Cypress.config().baseUrl);
  });

  it('Los usuarios no registrados ven el formulario de registro e inicio de sesión al ir a favs o user', function () {
    cy.visit('/');
    cy.get('nav a').eq(1).click();
    cy.get('form').should('have.length', 2);

    cy.get('nav a').eq(2).click();
    cy.get('form').should('have.length', 2);
  });
});
