const homeSelector = {
  "screenshot test": "columns-container",
};

function picture(elementName) {
  cy.matchImageSnapshot(elementName);
}

module.exports = picture;
