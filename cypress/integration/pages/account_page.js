const aPSelectors = {
  "logo in page": ".logo",
};

function buttonlogo(elementName) {
  cy.get(aPSelectors[elementName]).click();
}

module.exports = { buttonlogo };
