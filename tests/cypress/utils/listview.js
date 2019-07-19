/// <reference types="Cypress" />

import { matchScreenShot } from './index';

const SampleMapping = {
  '/Listview/11SimpleList': simpleList,
  '/Listview/12CheckList': checkList,
  '/Listview/13GroupList': groupList,
  '/Listview/14RemoteList': remoteList,
  '/Listview/15Events': events,
  '/Listview/16PublicMethods': publicMethods,
  '/Listview/17PropertyBinding': propertyBinding,
  '/Listview/': template,
  '/Listview/19GroupTemplate': groupTemplate,
  '/Listview/21TemplateEvents': templateEvents,
  '/Listview/22Virtualization': virtualization,
  '/Listview/23RTL': rtl
};

export function ListviewHandler(component, sample) {
  const waitTime = sample.toLowerCase().indexOf('remote') >= 0 ? 15000 : 5000;
  cy.get('.e-list-item ', { timeout: waitTime });
  if (sample.toLowerCase().indexOf('template') >= 0) {
    cy.wait(1500);
  }
  const sampleMethodName = SampleMapping[sample];
  if (sampleMethodName) {
    sampleMethodName(sample);
  }
}

function simpleList(sampleName) {
  matchScreenShot(sampleName);
  cy.get('.e-list-item.e-level-1:first')
    .click()
    .should('have.class', 'e-active');
  matchScreenShot(`${sampleName}_selected`);
}

function checkList(sampleName) {
  matchScreenShot(sampleName);
  cy.get('.e-list-item.e-level-1:first')
    .click()
    .should('have.class', 'e-active');
  matchScreenShot(`${sampleName}_checked`);
}

function groupList(sampleName) {
  matchScreenShot(sampleName);
  cy.get('.e-list-item.e-level-1:first')
    .click()
    .should('have.class', 'e-active');
  matchScreenShot(`${sampleName}_selected`);
}

function remoteList(sampleName) {
  matchScreenShot(sampleName);
}

function events(sampleName) {
  matchScreenShot(sampleName);
  cy.get('.e-list-item.e-level-1:first')
    .click()
    .should('have.class', 'e-active');
  matchScreenShot(`${sampleName}_selected`);
  cy.get('#selected-item').contains('1');
}

function publicMethods(sampleName) {
  matchScreenShot(sampleName);
  cy.get('#firstlist')
    .get('.e-list-item.e-level-1:first')
    .click()
    .should('have.class', 'e-active');
  cy.get('#getselecteditem').click();
  cy.get('#getselecteditem_content').contains('Data 1');
  matchScreenShot(`${sampleName}_getselecteditem`);

  cy.get('#checkitem').click();
  cy.get('#secondlist')
    .get('.e-list-item.e-level-1:first')
    .should('have.class', 'e-active');
  matchScreenShot(`${sampleName}_checkitem`);
}

function propertyBinding(sampleName) {}

function template(sampleName) {}

function groupTemplate(sampleName) {}

function templateEvents(sampleName) {}

function virtualization(sampleName) {}

function rtl(sampleName) {}
