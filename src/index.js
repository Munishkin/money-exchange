// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) return {};
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    let nextValue = {
        50: 25,
        25: 10,
        10: 5,
        5: 1
    }
    let values = {
        50: 'H',
        25: 'Q',
        10: 'D',
        5: 'N',
        1: 'P'
    }
    let exchange = {};
    let remainder = 0;
    let calculateCoins = function (currency, denomination) {
        if (currency / denomination >= 1) {
            exchange[values[denomination]] = Math.floor(currency / denomination);
            remainder = currency - exchange[values[denomination]] * denomination;
            if (remainder > 0) {
                calculateCoins(remainder, nextValue[denomination]);
            }
        } else {
            calculateCoins(currency, nextValue[denomination]);
        }
    }
    calculateCoins(currency, 50);

    return exchange;
}
