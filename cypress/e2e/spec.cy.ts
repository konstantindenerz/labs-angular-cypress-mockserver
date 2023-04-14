import {OVERVIEW} from './mocks/overview.mocks';

describe('My First Test with overview', () => {
  beforeEach(() => {
    cy.intercept('**', (request) => {
      request.headers['cypress-scope'] = OVERVIEW.scope;
    });
  })

  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains(' "list": [ [ 0, ')
  })
})
