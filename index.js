//Menu Button
const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')
const body = document.querySelector('body')
const navbar = document.getElementById("nav")

menuBtn.addEventListener("click", function(){
    if(!navLinks.classList.contains('show-links')){
        navLinks.classList.add('show-links')
        body.style.overflow = "hidden"    
    }
})

navLinks.addEventListener('click', function(){
    if(navLinks.classList.contains('show-links')){
        navLinks.classList.remove('show-links')
        body.style.overflow = "auto"
    }
})


// Scrolling links to specified location 

const scrollBtn = document.querySelectorAll('.scroll-btn')

scrollBtn.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()
        const id = e.target.getAttribute("href").slice(1)
        const el = document.getElementById(id)

        let topOfSection = el.offsetTop - 95.93
        console.log(el.offsetTop)

        window.scrollTo({
            left: 0,
            top: topOfSection,
            behavior: "smooth"
        })
    })
})


// Dark Mode
// $(".switch").on("click",function(){
//     if($("body").hasClass("dark")){
//         $("body").removeClass("dark")
//     }
//     else{
//         $("body").addClass("dark")
//     }
// })
