const should = require('should')
const findCrush = require('../findCrushs')

describe('Crushs list test', () => {
  it('shohuld sum 2 and 3 and return 5', () => {
    findCrush.sumCrushs(2,3).should.be.equal(5)
  })
  it('Should sum 10 + 10 and return 20', () => {
    findCrush.sumCrushs(10,10).should.be.equal(20)
  })
  it('Should return a not found message', () => {
    findCrush.findCrush('Joselito').should.be.equal('Não existe este crush na sua lista')
  })
  it('Should return a crush', () => {
    findCrush.findCrush('Bruno Landin').should.be.equal('Bruno Landin').and.be.a.String();
  })
  it('Should not find a crush with invalid value', () => {
    findCrush.findCrush(15646).should.be.equal('O tipo do texto é invalido')
  })
  it('Should not find a crush with empty value', () => {
    findCrush.findCrush().should.be.equal('O valor de busca está vazio')
  })  
})