
import { homepageSelectors } from '../pages/home-page';

describe('HomePage Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    });

  it('Should display the header and footer', () => {
    cy.get(homepageSelectors.header).should('exist');
    cy.get(homepageSelectors.footer).should('exist');
  });

  it('Should display the correct title and description', () => {
    cy.get(homepageSelectors.title).contains('Generating dream rooms using AI').should('be.visible');
    cy.get(homepageSelectors.description).contains('Take a picture of your room and see how your room looks in different themes.')
      .should('be.visible');
  });

  it('Should have a working link to Vercel and Dream page', () => {
    cy.get(homepageSelectors.vercelButton)
      .should('have.attr', 'href', 'https://vercel.fyi/roomGPT')
      .and('have.attr', 'target', '_blank');

    cy.get(homepageSelectors.generateRoomButton).click();
    cy.url().should('include', '/dream');
  });

  it('Should display the images correctly', () => {
    cy.get(homepageSelectors.originalRoomImage).should('be.visible');
    cy.get(homepageSelectors.generatedRoomImage).should('be.visible');
  });

  it('Should validate the Vercel link button', () => {
    cy.get(homepageSelectors.vercelButton)
      .should('exist')
      .should('have.attr', 'href', 'https://vercel.fyi/roomGPT')
      .and('have.attr', 'target', '_blank');
  });

  it('Should validate the Generate Dream Room button', () => {
    cy.get(homepageSelectors.generateRoomButton).should('exist').click();
    cy.url().should('include', '/dream');
  });
});