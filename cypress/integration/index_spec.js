const { intros } = require("svelte/internal")

describe('Index tests', () => {
    it('loads the index page successfully', () => {
        cy.visit('/')
        cy.contains('Food Variety')
    })
})