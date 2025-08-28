let cervejas = ["Guiness", "Desperados", "Becks"]

function transformar(item){
   return `<tr><td>${item}</td></tr>`
}

function carregarDiv(){
   let div = document.getElementById("meuamor")
   let linhas = cervejas.map(transformar).join("\n")
   div.innerHTML = `<table border="1">${linhas}</table>`
}

document.getElementById("botaoCarregar")
  .addEventListener("click", carregarDiv)

let botaoOrdenar = document.createElement("button")
botaoOrdenar.innerText = "Ordenar cervejas"
botaoOrdenar.addEventListener("click", function(){
   cervejas.sort()
   carregarDiv()
})
document.body.appendChild(botaoOrdenar)

let botaoShuffle = document.createElement("button")
botaoShuffle.innerText = "Embaralhar cervejas"
botaoShuffle.addEventListener("click", function(){
   cervejas.sort(() => Math.random() - 0.5)
   carregarDiv()
})
document.body.appendChild(botaoShuffle)