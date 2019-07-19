import { ListviewHandler } from './listview';
export const screenshotTarget = '#cypress-target';

export function callSampleSpecificTest(component, sample) {
  if (component.toLowerCase() === 'listview') {
    ListviewHandler(component, sample);
  }
}

export function matchScreenShot(imageName) {
    cy.get(screenshotTarget).matchImageSnapshot(imageName);
}
