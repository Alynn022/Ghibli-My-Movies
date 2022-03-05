describe('User Flow', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://ghibliapi.herokuapp.com/films', {
      fixture: 'sampleFilm.json'
    })
    .visit('http://localhost:3000')
  });

  it('should be able to select a film and view more details on the film', () => {
    cy.get('.film-info-btn').first().click() 
    .get('.film-details-view').should('exist')
    .get('.title').should('have.text', 'Castle in the Sky')
    .get('img').first().should('exist')
    .get('.film-details').should('exist')
    .get('.description').should('have.text', 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa\'s science to make himself ruler of the world.' )
    .get('.director').should('have.text', 'Director: Hayao Miyazaki')
    .get('.producer').should('have.text', 'Producer: Isao Takahata')
    .get('.release-year').should('have.text', 'Release Year: 1986')
    .get('.runtime').should('have.text', 'Runtime: 124 minutes')
  })

  it('should be able to favorite a film', () => {
    cy.get('.favorite-btn').first().click()
    .get('.')
  })

  // it('should be able to view a list a of favorite films', () => {

  // })

  // it('should be able to view more details on film within the favorite film view', 
  //   () => {

  // })

  // it('should be able to go home from the favorite films view', () => {

  // })




})