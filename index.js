//Menu Button
const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')
const body = document.querySelector('body')

menuBtn.addEventListener("click", function(){
    if(navLinks.classList.contains('show-links')){
        navLinks.classList.remove('show-links')
        body.style.overflow = "auto"
    }
    else{
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

// Scrolling Links (Needs fixing)

// navLinks.forEach(function(link){
//     link.addEventListener("click", function(){
//         e.preventDefault()
        
//         //To direct user to specified section
//         const sectionId = e.currentTarget.getAttribute('href').slice(1)
//         const element = document.getElementById(sectionId)
//         let sectionStart = element.offsetTop
//         window.scrollTo({
//             left:0,
//             top: sectionStart
//         })
//     })
// })



// Dark Mode
// $(".inner-switch").on("click",function(){
//     if($("body").hasClass("dark")){
//         $("body").removeClass("dark")
//         $(".inner-switch").text("OFF")
//     }
//     else{
//         $("body").addClass("dark")
//         $(".inner-switch").text("ON")
//     }
// })
