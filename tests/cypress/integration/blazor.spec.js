/// <reference types="Cypress" />
const routes = require('../fixtures/routes.json');
import { callSampleSpecificTest } from '../utils';

export const screenshotTarget = '#cypress-target';
const basePath = 'https://localhost:5001';
const components = Object.keys(routes);

components.forEach(component => {
  const samples = routes[component];
  samples.forEach(sample => {
    describe(component, () => {
      it(sample, () => {
        cy.visit(basePath + sample);
        cy.get('.e-lib', { timeout: 5000 });
        callSampleSpecificTest(component, sample);
        // cy.get(screenshotTarget).matchImageSnapshot(sample);
      });
    });
  });
});
