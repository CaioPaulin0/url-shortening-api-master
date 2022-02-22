import objDiv from './objDiv.js'

import borderRed from './borderRed.js'

const shortLinks = document.querySelector('.adShortLinks')

export default function api(link){
    let url = `https://api.shrtco.de/v2/shorten?url=${link}`

    const obj = fetch(url).then(function(response){
        response.json().then(function(data){
            const objData = data

            console.log(objData)

            if(objData.ok === false){
                borderRed('hsl(0, 87%, 67%)')
            } else{
                borderRed('transparent')
                shortLinks.appendChild(objDiv(objData.result.full_short_link, objData.result.original_link))
            }
        })
    })
    
    return
    
}

