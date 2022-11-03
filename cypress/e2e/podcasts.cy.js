describe('Podcast app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays list of movies', () => {
    cy.intercept('/userlists/27998').as('podcastsRequest')

    // wait for the network request to complete
    cy.wait('@podcastsRequest')

    cy.get('[data-test="podcastList"]')
      .find('li')
      .its('length')
      .should('eq', 20)
  })

  it('it can navigate to detail page & display correct podcast', () => {
    cy.intercept('GET', `/podcasts/*`).as('podcastDetail')

    cy.get('[data-test="podcastList"]').find('li').first().click()
    cy.location('pathname').should('contain', '/podcast/')

    cy.wait('@podcastDetail').then((xhr) => {
      cy.get('[data-test="details"]')
        .find('img')
        .should('have.attr', 'src', `${xhr.response.body.image_url}`)

      cy.findByText(`${xhr.response.body.title}`).should('exist')
      cy.findByText(
        `A podcast with ${xhr.response.body.number_of_episodes} episodes`,
      )

      cy.findByText(`${xhr.response.body.description}`)
      cy.get('[data-test="latest-episodes"]')
        .find('img')
        .should('have.attr', 'src', `${xhr.response.body.image_url}`)

      cy.get('[data-test="latest-episodes"]').findByText(
        xhr.response.body.latest_episode.title,
      )

      cy.get('[data-test="ctas"]').within(() => {
        cy.findByRole('button', { name: 'Follow' }).should('not.be.disabled')
        cy.findByRole('button', { name: 'Rate' }).should('not.be.disabled')
      })
    })
  })

  it('Logo should navigate back to home page when clicked', () => {
    cy.get('[data-test="logo"]').click()
    cy.location('pathname').should('eq', '/')
  })
})
