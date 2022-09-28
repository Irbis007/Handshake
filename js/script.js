document.addEventListener('DOMContentLoaded', () =>{
    const menu = document.querySelector('.header-nav');
    const hamburger = document.querySelector('.menu-toggle');
    const footerNav = document.querySelectorAll('.footer-nav')
    const navBody = document.querySelectorAll('.nav-body')
    const slideContent = document.querySelectorAll('.slider-content')
    const tabs = document.querySelectorAll('.tab')

    hamburger.addEventListener('click', () =>{
        menu.classList.toggle('menu-active')
        hamburger.classList.toggle('hamburger-active')
    })



    footerNav.forEach((item, i) =>{
        item.addEventListener('click', () =>{
            navBody[i].classList.toggle('nav-body-active')
        })
    })



    tabs.forEach((item) => {
        item.addEventListener('click', ()=>{
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)

            tabs.forEach( item => {
                item.classList.remove('active')
            })

            slideContent.forEach( item => {
                item.classList.remove('active')
                console.log('adfv')
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active')
        } )
    })
}) 