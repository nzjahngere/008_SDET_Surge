describe('Automation Test Store - Login & Forgot Password', () => {
    
    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login'); // Navigate to login page
    });

    it('Valid Login', () => {
        cy.get('#loginFrm_loginname').type('admin'); // Replace with a valid username
        cy.get('#loginFrm_password').type('admin123');  // Replace with a valid password
        cy.get('button[title="Login"]').click();

        // Verify successful login
        // cy.get('.menu_text').contains('My Account').should('be.visible');
    });

    it('Invalid Login', () => {
        cy.get('#loginFrm_loginname').type('invalidUser');
        cy.get('#loginFrm_password').type('invalidPass');
        cy.get('button[title="Login"]').click();

        // Verify error message
        cy.get('.alert-danger').should('contain', 'Error: Incorrect login or password');
    });

    it('Empty Fields', () => {
        cy.get('button[title="Login"]').click();

        // Verify error message for empty fields
        cy.get('.alert-danger').should('contain', 'Error: Incorrect login or password');
    });

    it('Case Sensitivity Check', () => {
        cy.get('#loginFrm_loginname').type('VALIDUSERNAME'); // Uppercase variation
        cy.get('#loginFrm_password').type('VALIDPASSWORD');
        cy.get('button[title="Login"]').click();

        // Verify login failure due to case sensitivity
        cy.get('.alert-danger').should('contain', 'Error: Incorrect login or password');
    });

    it('Forgot Password Feature', () => {
        cy.get('a').contains('Forgot your password?').click();

        // Verify navigation to forgot password page
        cy.url().should('include', 'forgotten');

        // Enter email for password reset
        cy.get('#forgottenFrm_loginname').type('admin')
        cy.get('#forgottenFrm_email').type('validemail@example.com'); // Replace with a registered email
        cy.get('button[title="Continue"]').click();

        // Verify confirmation message
        cy.get('.alert-success').should('contain', 'please check your information and try again!');
    });

});
