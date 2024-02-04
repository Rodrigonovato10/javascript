const convertbutton = document.querySelector(".bottom")

function convertValues(){

    const inputMoeda = document.querySelector(".input-coin").value

    const dolarToday =4.97

    const meResult = inputMoeda / dolarToday 

console.log(meResult)

}


convertbutton.addEventListener("click", convertValues)