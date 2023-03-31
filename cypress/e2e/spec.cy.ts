describe('My First Test with overview', () => {
  beforeEach(() => {
    cy.intercept('**', (request) => {
      request.headers['cypress-scope'] = 'overview';
    });
  })

  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains(' "list": [ [ 0, ')
  })
})
