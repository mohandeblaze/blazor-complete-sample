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
  cy.wait(200);
  cy.get('#getselecteditem_content').contains('Data 1');
  matchScreenShot(`${sampleName}_getselecteditem`);

  cy.get('#checkitem').click();
  cy.wait(200);
  cy.get('#secondlist').within($el => {
    cy.get('.e-list-item.e-level-1:first').should('have.class', 'e-active');
  });
  matchScreenShot(`${sampleName}_checkitem`);

  cy.get('#uncheckitem').click();
  cy.wait(200);
  cy.get('#secondlist').within($el => {
    cy.get('.e-list-item.e-level-1:first').should('not.have.class', 'e-active');
  });
  matchScreenShot(`${sampleName}_uncheckitem`);

  cy.get('#checkall').click();
  cy.wait(200);
  cy.get('#secondlist').within(() => {
    cy.get('.e-list-item.e-level-1:first').should('have.class', 'e-active');
  });

  cy.get('#secondlist').within(() => {
    cy.get('.e-list-item.e-level-1:last').should('have.class', 'e-active');
  });

  matchScreenShot(`${sampleName}_checkall`);

  cy.get('#uncheckall').click();
  cy.wait(200);
  cy.get('#secondlist').within(() => {
    cy.get('.e-list-item.e-level-1:first').should('not.have.class', 'e-active');
  });

  cy.get('#secondlist').within(() => {
    cy.get('.e-list-item.e-level-1:last').should('not.have.class', 'e-active');
  });

  matchScreenShot(`${sampleName}_uncheckall`);

  cy.get('#thirdlist').within(() => {
    cy.get('.e-list-item.e-level-1:first').click();
  });

  matchScreenShot(`${sampleName}_nestedfirstlevel`);
  cy.get('#goback').click();
  cy.wait(400);
  matchScreenShot(`${sampleName}_nestedafterback`);

  cy.get('#disableitem').click();
  cy.wait(200);
  cy.get('#firstlist')
    .get('.e-list-item.e-level-1:first')
    .should('have.class', 'e-disabled');
  cy.get('#secondlist')
    .get('.e-list-item.e-level-1:first')
    .should('have.class', 'e-disabled');
  cy.get('#thirdlist')
    .get('.e-list-item.e-level-1:first')
    .should('have.class', 'e-disabled');
  matchScreenShot(`${sampleName}_disableditems`);

  cy.get('#enableitem').click();
  cy.wait(200);
  cy.get('#firstlist')
    .get('.e-list-item.e-level-1:first')
    .should('not.have.class', 'e-disabled');
  cy.get('#secondlist')
    .get('.e-list-item.e-level-1:first')
    .should('not.have.class', 'e-disabled');
  cy.get('#thirdlist')
    .get('.e-list-item.e-level-1:first')
    .should('not.have.class', 'e-disabled');
  matchScreenShot(`${sampleName}_enableditems`);

  cy.get('#hideitem').click();
  cy.wait(200);
  cy.get('#firstlist').within(() => {
    cy.get('li')
      .eq(1)
      .should('not.be.visible');
  });

  cy.get('#secondlist').within(() => {
    cy.get('li')
      .eq(1)
      .should('not.be.visible');
  });
  cy.get('#thirdlist').within(() => {
    cy.get('li')
      .eq(1)
      .should('not.be.visible');
  });
  matchScreenShot(`${sampleName}_hideitems`);

  cy.get('#showitem').click();
  cy.wait(200);
  cy.get('#firstlist').within(() => {
    cy.get('li')
      .eq(1)
      .should('be.visible');
  });

  cy.get('#secondlist').within(() => {
    cy.get('li')
      .eq(1)
      .should('be.visible');
  });
  cy.get('#thirdlist').within(() => {
    cy.get('li')
      .eq(1)
      .should('be.visible');
  });
  matchScreenShot(`${sampleName}_showitems`);
}

function propertyBinding(sampleName) {
  matchScreenShot(sampleName);

  cy.get('#changevalue').click();
  cy.wait(200);
  matchScreenShot(`${sampleName}_propertychanged`);
}

function template(sampleName) {
  matchScreenShot(sampleName);
}

function groupTemplate(sampleName) {
  matchScreenShot(sampleName);
}

function templateEvents(sampleName) {
  matchScreenShot(sampleName);

  cy.get('.list-item-text')
    .eq(0)
    .click();
  cy.wait(300);

  matchScreenShot(`${sampleName}_templateevent`);

  cy.get('.list-item-button')
    .eq(0)
    .within(() => {
      cy.get('a').click();
    });
  matchScreenShot(`${sampleName}_templateeventnavigation`);
}

function virtualization(sampleName) {
  matchScreenShot(sampleName);
}

function rtl(sampleName) {
  matchScreenShot(sampleName);
}
