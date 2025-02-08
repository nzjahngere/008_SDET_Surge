describe('Automation Test Store - Checkout Process', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/'); // Visit the homepage before each test
    });

    it('Proceeding to Checkout', () => {
        cy.get('.prdocutname').first().click(); // Click on the first product
        cy.get('[class="cart"]').click(); // Add product to cart
        cy.get('.block_7 > a').click(); // Open cart
        cy.get('a').contains('Checkout').click(); // Click on Checkout button

        // Verify navigation to checkout page
        cy.url().should('include', 'checkout');
    });

    it('Price Display Verification', () => {
        cy.get('.prdocutname').first().click(); // Click on a product
        cy.get('.oneprice').invoke('text').then((price) => {
            cy.get('button[title="Add to Cart"]').click(); // Add to cart
            cy.get('.block_7 > a').click(); // Open cart

            // Verify product price in cart matches the displayed price
            cy.get('.total_price').should('contain', price);
        });
    });

    it('Payment Gateway & Transactions', () => {
        cy.get('.prdocutname').first().click(); // Select a product
        cy.get('button[title="Add to Cart"]').click();
        cy.get('.block_7 > a').click(); // Open cart
        cy.get('a').contains('Checkout').click(); // Proceed to checkout

        // Fill in checkout details
        cy.get('#guestFrm_firstname').type('John');
        cy.get('#guestFrm_lastname').type('Doe');
        cy.get('#guestFrm_email').type('john.doe@example.com');
        cy.get('#guestFrm_address_1').type('123 Main Street');
        cy.get('#guestFrm_city').type('New York');
        cy.get('#guestFrm_postcode').type('10001');
        cy.get('#guestFrm_country_id').select('United States');
        cy.get('#guestFrm_zone_id').select('New York');
        cy.get('button[title="Continue"]').click(); // Continue checkout

        // Select payment method and confirm order
        cy.get('input[name="payment_address"]').check(); // Select payment method
        cy.get('#checkout_btn').click(); // Confirm payment

        // Verify successful transaction
        cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');
    });

    it('Order Confirmation', () => {
        cy.get('.block_7 > a').click(); // Open cart
        cy.get('a').contains('Checkout').click(); // Proceed to checkout

        // Verify order confirmation message
        cy.get('.maintext').should('contain', 'Your Order Has Been Processed!');
    });

});
