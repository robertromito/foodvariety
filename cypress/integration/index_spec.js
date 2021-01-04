const { intros, beforeUpdate } = require("svelte/internal")

describe('Index tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('loads the index page successfully', () => {
        cy.contains('Food Variety Tracker')
    })

    it('has a list of eaters', () => {
        cy.get('[data-qa=in_eater]').should('exist')
    })

    it('has a submit button', () => {
        cy.get('[data-qa=in_food]').should('exist')
    })

    it('has a submit button', () => {
        cy.get('[data-qa=btn_submit]').should('exist')
    })
})