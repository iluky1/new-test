const navSlide = () => {
    const atvnav = document.querySelector ('.atvnav');
    const nav = document.querySelector ('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    //Toggle Nav
    atvnav.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
    }); 
    //Animate Links
    navLinks.forEach((link, index)=>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
        console.log(index /  7);
    });

    
}

navSlide();