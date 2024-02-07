const convertbutton = document.querySelector(".bottom")
const selecPrimaria = document.querySelector(".selecaoend")// Selecionar as moedas para converte
function convertValues(){

    const inputCurrency = document.querySelector(".input-coin").value  // valor digitado 
    const currencyToValueConvert = document.querySelector(".currency-to-Convert") // valor para converter
    const currencyValuecorvetd = document.querySelector(".currency-Convertd") //valor convertido
    
    console.log(selecPrimaria.value)
    const dolarToday = 4.97
    const euroToday = 5.36
    
    

    if(selecPrimaria.value == "dolar"){
        currencyValuecorvetd.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(inputCurrency/dolarToday)
    }
   if(selecPrimaria.value == "euro"){
    currencyValuecorvetd.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR",
    }).format(inputCurrency/euroToday)
   }
   
   currencyToValueConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL",
}).format(inputCurrency)
}



convertbutton.addEventListener("click", convertValues)