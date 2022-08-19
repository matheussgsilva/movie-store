export const numbers = {
  price (value) {
    const price = value === 0 ? "9,90" : (value*2.25).toFixed(2)
    const moviePrice = price.replace('.', ',')

    return moviePrice
  },

  card(value) {
    const cardNumber = String(value)
    const cardNumberFormated = `${cardNumber.slice(0,3)} ${cardNumber.slice(4,7)} ${cardNumber.slice(8,11)} ${cardNumber.slice(12,15)}`

    return cardNumberFormated
  }
}