describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/src/app/dashboard/dashboard.component.html')
    cy.contains('dashboard works!')
  })
})
