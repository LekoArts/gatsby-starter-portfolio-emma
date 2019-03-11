describe('Home', () => {
  beforeEach(() => {
    cy.visit('/').waitForRouteChange()
  })
  it('navigation renders', () => {
    cy.getByTestId('navigation')
  })
  it('footer renders', () => {
    cy.getByTestId('footer')
  })
  it('link on project item works', () => {
    cy.getByTestId('projectItem-0')
      .click()
      .waitForRouteChange()
      .getByTestId('project-title')
  })
  it('link to first nav item works', () => {
    cy.getByTestId('navItem-0')
      .click()
      .getByTestId('single-title')
  })
  it('title links to homepage', () => {
    cy.getByTestId('navItem-0')
      .click()
      .waitForRouteChange()
      .getByTestId('home-title-link')
      .click()
      .waitForRouteChange()
      .assertRoute('/')
  })
})
