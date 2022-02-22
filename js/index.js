import ApiUrl from './ApiShort.js'

const inputEarch = document.getElementById('inputEarch')

const enviar = document.getElementById('enviarEarch')

enviar.addEventListener("click", function(){
    ApiUrl(inputEarch.value)
})

