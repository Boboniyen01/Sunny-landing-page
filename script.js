let hamburgerIcon = document.querySelector('.side-drawer-icon ')
let secondhamburgerIcon = document.querySelector('.side-drawer-icon-2 ')
let mainTag  = document.querySelector('.main-tag')
console.log(mainTag)
console.log(secondhamburgerIcon)
let sideDrawer = document.getElementById('side-drawer')

function displaySideDrawer(){
    sideDrawer.style.display='flex'
    sideDrawer.classList.add('set')
    secondhamburgerIcon.style.display='block'
       hamburgerIcon.style.display='none'
       mainTag.classList.add('backdrop')
   
}


function closeSideDrawer(){
    sideDrawer.style.display='none'
     secondhamburgerIcon.style.display='none'
       hamburgerIcon.style.display='block'      
       mainTag.classList.remove('backdrop')
}
hamburgerIcon.addEventListener('click' , displaySideDrawer)
secondhamburgerIcon.addEventListener('click' , closeSideDrawer)
