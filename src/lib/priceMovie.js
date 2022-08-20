export const priceMovie = (value) => {
    const price = value === 0 ? "9,90" : (value*2.25).toFixed(2)
    const moviePrice = price.replace('.', ',')

    return moviePrice
}