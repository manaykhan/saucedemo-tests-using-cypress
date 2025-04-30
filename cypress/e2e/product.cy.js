import InventoryPage from "../pages/inventoryPage";

describe("Product Navigation", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
    cy.wait(2000); 
  });

  it("Should navigate to product page", () => {
    InventoryPage.clickFirstProduct();
    cy.wait(2000); 

    cy.url().should("include", "inventory-item.html");
    cy.wait(1000); 
    
    InventoryPage.getProductTitle().should("exist");
    cy.wait(1000); 

    InventoryPage.getProductDescription().should("exist");
    cy.wait(1000); 
  });

  it("Should add an item to the cart - e2e flow", () => {
    // Step 1: Navigate to product page
    InventoryPage.clickFirstProduct();
    cy.wait(2000);
    cy.url().should("include", "inventory-item.html");
    cy.wait(1000);
    InventoryPage.getProductTitle().should("exist");
    cy.wait(1000);
    InventoryPage.getProductDescription().should("exist");
    cy.wait(1000);

    // Step 2: Go back and add item to cart
    cy.get('[data-test="back-to-products"]').click();
    cy.wait(2000);
    cy.addToCart("Sauce Labs Backpack");
    cy.wait(2000);
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.wait(1000);

    // Step 3: Navigate to cart
    cy.get(".shopping_cart_link").click();
    cy.wait(2000);
    cy.url().should("include", "/cart.html");
    cy.wait(1000);

    // Step 4: Proceed to checkout
    cy.get('[data-test="checkout"]').click();
    cy.wait(2000);
    cy.url().should("include", "/checkout-step-one.html");
    cy.wait(1000);

    // Step 5: Fill checkout info
    cy.get('[data-test="firstName"]').type("Mahnoor", { delay: 100 });
    cy.get('[data-test="lastName"]').type("Khan", { delay: 100 });
    cy.get('[data-test="postalCode"]').type("12345", { delay: 100 });
    cy.wait(1000);
    cy.get('[data-test="continue"]').click();
    cy.wait(2000);
    cy.url().should("include", "/checkout-step-two.html");
    cy.wait(1000);

    // Step 6: Finish the order
    cy.get('[data-test="finish"]').click();
    cy.wait(2000);
    cy.url().should("include", "/checkout-complete.html");
    cy.wait(1000);
    cy.get(".complete-header").should("contain", "Thank you for your order!");
    cy.wait(1000);
  });
});
