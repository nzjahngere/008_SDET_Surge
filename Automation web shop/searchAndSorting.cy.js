describe('Automation Test Store - Search, Filtering, and Sorting Features', () => {

    beforeEach(() => {
        cy.visit('https://automationteststore.com/'); // Visit the homepage before each test
    });

    it('Search Functionality', () => {
        cy.get('input[name="filter_keyword"]').type('fragrance{enter}'); // Enter search term and press enter

        // Verify search results contain the expected keyword
        cy.get('.prdocutname').each(($el) => {
            cy.wrap($el).should('contain.text', 'Fragrance');
        });
    });

    it('Product Filtering', () => {
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=36'); // Visit a category page

        // Select a filter option (e.g., Brand or Price Range)
        cy.get('a').contains('Gucci').click(); // Example: Filter by brand "Gucci"

        // Verify that filtered results contain the brand name
        cy.get('.prdocutname').each(($el) => {
            cy.wrap($el).should('contain.text', 'Gucci');
        });
    });

    it('Product Sorting Feature', () => {
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=36'); // Visit a category page

        // Select a sorting option (e.g., Price: Low to High)
        cy.get('select[name="sort"]').select('price_asc'); // Select "Price Low to High"

        // Verify the products are sorted correctly
        let prices = [];
        cy.get('.oneprice').each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                prices.push(parseFloat(text.replace('$', '')));
            });
        }).then(() => {
            // Verify that prices are in ascending order
            const sortedPrices = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sortedPrices);
        });
    });

});
