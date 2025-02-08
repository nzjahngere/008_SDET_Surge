describe('Automation Test Store - Navigation and Responsiveness', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/'); // Visit the homepage before each test
    });

    it('Navigation Links Accessibility', () => {
        // Verify that important navigation links are accessible and working
        const navLinks = ['Home', 'Specials', 'Contact Us', 'Login', 'Register'];

        navLinks.forEach((linkText) => {
            cy.contains('a', linkText).should('be.visible').click(); // Click on link
            cy.url().should('include', linkText.toLowerCase().replace(/\s+/g, '')); // Verify URL contains expected path
            cy.go('back'); // Navigate back to homepage
        });
    });

    it('Website Responsiveness - Different Viewports', () => {
        const viewports = [
            { device: 'Mobile', width: 375, height: 812 }, // iPhone X
            { device: 'Tablet', width: 768, height: 1024 }, // iPad
            { device: 'Laptop', width: 1366, height: 768 } // Standard Laptop
        ];

        viewports.forEach((viewport) => {
            cy.viewport(viewport.width, viewport.height);
            cy.log(`Testing on ${viewport.device} resolution`);

            // Ensure the homepage content is still visible
            cy.get('.logo').should('be.visible'); // Verify logo visibility
            cy.get('.nav > ul').should('be.visible'); // Verify navigation menu is accessible
        });
    });

});
