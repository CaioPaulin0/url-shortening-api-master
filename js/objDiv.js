

export default function ul(aTexto,spanTexto){
    const ul = document.createElement('ul')

    ul.setAttribute('class', 'adShortLinksLu')

    ul.appendChild(li(aTexto,spanTexto))

    return ul
}

function a(texto){
      const a = document.createElement('a')
      
      a.setAttribute('href', texto)
      a.innerHTML = texto

      return a
}

function button(){
    const button = document.createElement('button')

    button.innerHTML = "copy"

    button.addEventListener('click',function(){
           button.innerHTML = 'copied!'
           button.style.backgroundColor = "#3b3054"
           element.select('texto')
        
    })

    return button
}

function li(aTexto,spanTexto){
    const li = document.createElement('li')

    const div = document.createElement('div')

    const span = document.createElement('span')

    span.innerHTML = spanTexto

    
    li.setAttribute('class', 'cardShort')
    
    li.appendChild(span)
    
    div.appendChild(a(aTexto))
    
    div.appendChild(button())

    li.appendChild(div)
    
    return li
    
}
