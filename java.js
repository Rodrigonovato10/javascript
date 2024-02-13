const convertbutton = document.querySelector(".bottom")
const selecPrimer = document.querySelector(".Selecaotop") // 1º Opção para selecinar a moeda  corversora: "Selecaotop"!
const selecSegund = document.querySelector(".selecaoend")// 2º Opção  para selecionar a moeda convertida: "Selecaoend"!

function convertValues(){

    const inputCurrency = document.querySelector(".input-coin").value  // valor digitado 
    const currencyToValueConvert = document.querySelector(".currency-to-Convert") // valor para converter
    const currencyValuecorvetd = document.querySelector(".currency-Convertd") //valor convertido
    
console.log(selecSegund.value)
    const dolarToday = 4.97
    const euroToday = 5.36

    // 1º Opção para selecinar a moeda  corversora: "Selecaotop"!




    // 2º Opção  para selecionar a moeda convertida: "Selecaoend"!
  
    
   if(selecPrimer == "real"){ 
    console.log(selecPrimer) 
   } if (selecSegund.value === "dolar"){
       currencyValuecorvetd.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format( inputCurrency/dolarToday)
    }
   
   
   
    if(selecSegund.value == "euro"){
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