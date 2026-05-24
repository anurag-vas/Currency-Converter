const currencyFirstE1 = document.getElementById("currency-first");

const worthFirstE1 = document.getElementById("worth-first");

const currencySecondE1 = document.getElementById("currency-second");

const worthSecondE1 = document.getElementById("worth-second");

const exchangeRateE1 = document.getElementById("exchange-rate");

updateRate();

function updateRate() {

    fetch(
        `https://v6.exchangerate-api.com/v6/0a15728c4e417a181860202d/latest/${currencyFirstE1.value}`)
        .then((res) => res.json())                          //API data comes in raw format. res.json() converts it into JavaScript object.
        .then((data)=>{                                     //Now all API data is stored inside variable data
        const rates = data.conversion_rates[currencySecondE1.value];
        console.log(rates);
        exchangeRateE1.innerText = `1 ${currencyFirstE1.value} = ${rates} ${currencySecondE1.value}`;
        worthSecondE1.value = (worthFirstE1.value * rates).toFixed(2) //Multiplies entered amount by exchange  keeps 2 decimal places
});
} 

currencyFirstE1.addEventListener("change", updateRate)

currencySecondE1.addEventListener("change", updateRate)

worthFirstE1.addEventListener("input", updateRate)