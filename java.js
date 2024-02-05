const convertbutton = document.querySelector(".bottom")

function convertValues(){

    const inputCurrency = document.querySelector(".input-coin").value  // valor digitado 
    const currencyToValueConvert = document.querySelector(".currency-to-Convert") // valor para converter
    const currencyValuecorvetd = document.querySelector(".currency-Convertd") //valor convertido

    const dolarToday =4.97

    const meResult = inputCurrency / dolarToday 

    currencyToValueConvert.innerHTML = new Intl.NumberFormat("pr-BR",{
        style: "currency",
        currency: "BRL",
    }).format(inputCurrency)

    currencyValuecorvetd.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD",
    }).format(meResult)


}


convertbutton.addEventListener("click", convertValues)