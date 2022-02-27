const menuMobile = document.getElementById('menuHamb')


menuMobile.addEventListener('click',function(){
    
    const menuMobileCont = document.querySelector('.menuMobileCont')

    menuMobileCont.classList.toggle('active')
})

export {menuMobile}