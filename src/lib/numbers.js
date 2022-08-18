export const numbers = {
  price (value) {
    console.log(value)
    const moviePrice = value.replace('.', ',')

    return moviePrice
  },

  card({value}) {
    const cardNumber = String(value)
    const cardNumberFormated = `${cardNumber.slice(0,3)} ${cardNumber.slice(4,7)} ${cardNumber.slice(8,11)} ${cardNumber.slice(12,15)}`

    return cardNumberFormated
  }
}