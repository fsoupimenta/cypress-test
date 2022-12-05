const specTitle = require("cypress-sonarqube-reporter/specTitle");

describe(specTitle('My First Test'), () => {
  it('Does not do much!', () => {
      cy.visit(Cypress.env('BASE_URL'))
      cy.get('.add-task-input').type('Malhar')
      cy.get('.button').click()
      cy.get('.container > :nth-child(2)').should('contain', 'Estudar Programação')
      cy.get('.container > :nth-child(3)').should('contain', 'Ler Livros')
      cy.get('.container > :nth-child(4)').should('be.visible')
      .and('contain', 'Malhar')
  })
})