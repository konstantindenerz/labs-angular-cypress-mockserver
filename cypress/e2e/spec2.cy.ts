describe('My First Test with baseline', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains(' "list": []')
  })
})
