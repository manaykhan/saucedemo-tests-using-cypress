class InventoryPage {
  clickFirstProduct() {
    cy.get(".inventory_item_name").first().click();
  }

  getProductTitle() {
    return cy.get(".inventory_details_name");
  }

  getProductDescription() {
    return cy.get(".inventory_details_desc");
  }
}

export default new InventoryPage();
