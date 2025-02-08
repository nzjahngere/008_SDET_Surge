describe('Automation Test Store - Cart Functionality', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/'); // Visit the homepage before each test
    });

    it('Add to Cart', () => {
        cy.get('.prdocutname').first().click(); // Click on the first product
        cy.get('button[title="Add to Cart"]').click(); // Click Add to Cart button

        // Verify product is added to cart
        cy.get('.block_7 > a').click(); // Click on cart icon
        cy.get('.cart').should('contain', 'Your shopping cart contains');
    });

    it('Items Quantity Update', () => {
        cy.get('.prdocutname').first().click(); // Click on a product
        cy.get('input[name="quantity"]').clear().type('2'); // Change quantity to 2
        cy.get('button[title="Add to Cart"]').click(); // Add to cart

        // Verify quantity update in cart
        cy.get('.block_7 > a').click(); // Open cart
        cy.get('.input-group input').should('have.value', '2');
    });

    it('Update Cart', () => {
        cy.get('.block_7 > a').click(); // Open cart
        cy.get('.input-group input').clear().type('3'); // Change quantity to 3
        cy.get('button[title="Update"]').click(); // Click update button

        // Verify cart is updated
        cy.get('.input-group input').should('have.value', '3');
    });

    it('Remove from Cart', () => {
        cy.get('.block_7 > a').click(); // Open cart
        cy.get('.fa-trash-o').click(); // Click remove icon

        // Verify cart is empty
        cy.get('.contentpanel').should('contain', 'Your shopping cart is empty!');
    });

});
