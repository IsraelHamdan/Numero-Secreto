function validaChute(chute) {
   // em teoria era pra transformar o numero de string para numero 
   const numero = +chute
   // verifica se o numero é um NaN, caso for ele exibira a mensagem
   if(chuteInvalido(numero)) {
      elementoChute.innerHTML += '<div> Valor inválido </div> '
      return
   }
   // verifica se o numero esta entre o valor minimo e o valor maximo
   if(rangeChute(numero)) {
      elementoChute.innerHTML += `
      <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
      `
      return
   }

   //verifica se o chute está correto

   if (numero === numSecreto) {
      document.body.innerHTML = `
         <h2 class = "titulo__acertou">Você acertou!</h2>
         <h3 class = "titulo__descricao"> O número secreto era ${numSecreto} </h3> 

         <button id ="jogar-novamente" class = "btn-jogar"> 
            Jogar novamente <i class="fa-solid fa-repeat"></i>
         </button>
     `
   } else if (numero > numSecreto) {
      //quando o numero for menor que o numero secreto
      elementoChute.innerHTML += `
         <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>
      ` 
   } else {
      //quando o numero for maior que o numero secreto
      elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i> </div>
   `
   }

} 

function chuteInvalido(numero) {
   return Number.isNaN(numero)
}

function rangeChute(numero)  {
   return numero  > maiorValor || numero < menorValor
}

document.body.addEventListener('click' , e => {
   if(e.target.id == 'jogar-novamente') {
      window.location.reload()
   }
})
