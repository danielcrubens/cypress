describe('Transações',()=>{
 //hooks -> executar antes ou depois/ de cada ou de todos os teste
  //beefor
  //after
  //beforeEach
  //afterEach
  
  beforeEach(()=>{
    cy.visit("https://devfinance-agilizei.netlify.app/")
  
  })

  it('Cadastrar uma entrada', () => {
    criarTransacao('Freela', 250)
    
    cy.get('tbody tr td.description').should('have.text', 'Freela')
  })

  it('Cadastrar uma saída', () => {
    criarTransacao('Cinema', -40)

    cy.get('tbody tr td.description').should('have.text', 'Cinema')
  })

  it('Exluir transação',()=>{
    criarTransacao('Freela',100)
    criarTransacao('Mesada',10)

    cy.contains('.description','Freela')
    .parent()
    .find('img')
    .click()

    cy.get('tbody tr').should('have.length',1)
  })
  
})

function criarTransacao(descricao, valor) {
  cy.contains("Nova Transação").click()
  cy.get('#description').type(descricao)
  cy.get('#amount').type(valor)
  cy.get('#date').type('2023-03-11')
  cy.contains('button', 'Salvar').click()

}