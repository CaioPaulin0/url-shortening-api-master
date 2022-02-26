import ApiUrl from './ApiShort.js'

import { menuMobile } from './menuToggle.js'

const inputEarch = document.getElementById('inputEarch')

const enviar = document.getElementById('enviarEarch')

enviar.addEventListener("click", function(){
    ApiUrl(inputEarch.value)
})

