describe('Home Page', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://ghibliapi.herokuapp.com/films', {
      fixture: 'sampleFilm.json'
    })
    .visit('http://localhost:3000')
  });

  it('On load, a user should see a nav bar', () => {
    cy.get('h1').should('have.text', 'Ghibli My Movies')
    .get('.home-btn').should('exist')
    .get('.my-favorites-btn').should('exist')
    .get('h2').should('have.text', 'Studio Ghibli Films')
  })

  it('On load, a user should see a list of films', () => {
    cy.get('.all-film-container') 
    .get('.title').first().should('have.text', 'Castle in the Sky')
    .get('.release-date').first().should('have.text', '1986')
  })
})