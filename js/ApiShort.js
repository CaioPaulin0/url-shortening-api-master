import objDiv from './objDiv.js'

import borderRed from './borderRed.js'

const shortLinks = document.querySelector('.adShortLinks')

const error = document.querySelector('.errorText')

export default function api(link){
    let url = `https://api.shrtco.de/v2/shorten?url=${link}`

    const obj = fetch(url).then(response =>{
        response.json().then(data =>{
            const objData = data

            console.log(objData)

            if(objData.ok === false){
                borderRed('hsl(0, 87%, 67%)')
                error.innerHTML = 'Please add a link'             
            } else{
                borderRed('transparent')
                shortLinks.appendChild(objDiv(objData.result.full_short_link, objData.result.original_link))
                error.innerHTML = ''
            }
        })
    })
    
    return
    
}

