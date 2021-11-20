//Menu Button
const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')
const body = document.querySelector('body')
const navbar = document.getElementById("nav")
const logo = document.querySelector('.logo')

logo.addEventListener('click', function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior:"smooth"
    })
})

menuBtn.addEventListener("click", function(){
    if(!navLinks.classList.contains('show-links')){
        navLinks.classList.add('show-links')
        body.style.overflow = "hidden"    
    }
    else{
        navLinks.classList.remove('show-links')
        body.style.overflow = "auto"
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

        let topOfSection = el.offsetTop - 90
        console.log(el.offsetTop)

        window.scrollTo({
            left: 0,
            top: topOfSection,
            behavior: "smooth"
        })
    })
})


//About Us Section with local data
const aboutUs = [
    {
      name: 'Our Story',
      job: "",
      description: 'Our company was established in November 2020 in Houston, Texas. We specialize in Dry Van loads for the time being. However, we are looking forward to expand our operations! Owned and operated by Victor Gonzalez and Glorivette Gueits, whether you want one of our drivers to pick up your loads, want to rent one of our trailers, or become part of our company, please do not hesitate to contact us!',
      img: 'img/logo1.jpg',

    },
    {
      name: 'Glorivette Gueits Rivera',
      job: 'Accounts Manager/Owner',
      description: "I handle documentation regarding driver's PODs, Insurance, BOLs, Rate Confirmations, Financing, among others.",
      img: 'img/glory.jpg',
    },
    {
      name: 'Victor Gonzalez Velazquez',
      job: 'Driver/Owner',
      description: "I operate my truck and manage drivers that join our team.",
      img: 'img/Victor.jpg',
    },
    {
      name: 'Ivette Gonzalez Gueits',
      job: 'Dispatcher',
      description: "I search for loads and handle all operations regarding the drivers. Feel free to contact me regarding my driver's current location and any potential loads you have for me!",
      img: 'img/Eive.jpeg',
    },
]

const img = document.getElementById("emp-img")
const emp = document.getElementById("emp-name")
const job = document.getElementById("job")
const description = document.getElementById("description")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function () {
    displayEmp(currentItem)
})

function displayEmp(employee){
    const item = aboutUs[currentItem]
    img.src = item.img
    emp.textContent = item.name
    job.textContent = item.job
    description.textContent = item.description
}

const aboutSect = document.getElementById('about')

function toAbout(){
    window.scrollTo({
        left: 0,
        top: aboutSect.offsetTop - 90,
        behavior: "smooth"
    })
}

nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > aboutUs.length-1){
        currentItem = 0
    }
    displayEmp(currentItem)
    toAbout()
})

prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = aboutUs.length-1
    }
    displayEmp(currentItem)
    toAbout()
})
//End About Section

//Tab functionality in Driver Section
function openTab(evt, drivertab) {
    
    var i, drivercontent, driverlinks
    drivercontent = document.getElementsByClassName("drivers-content")
    for (i = 0; i < drivercontent.length; i++) {
      drivercontent[i].style.display = "none"
    }
    driverlinks = document.getElementsByClassName("drivers-tab-btn")
    for (i = 0; i < driverlinks.length; i++) {
      driverlinks[i].className = driverlinks[i].className.replace(" active", "")
    }
    document.getElementById(drivertab).style.display = "block"
    evt.currentTarget.className += " active"
}
//End Tab

//Driver Section Gallery
mediumZoom('.zoom', { 
    background: '#BEBEBE',
    margin: 100,
    scrollOffset: 150
})

const slideshow = [
    {
        trailerImg : 'img/T1.jpeg'
    },

    {
        trailerImg : 'img/T2.jpeg'
    },

    {
        trailerImg : 'img/T3.jpeg'
    },

    {
        trailerImg : 'img/T4.jpeg'
    },

    {
        trailerImg : 'img/T5.jpeg'
    },

    {
        trailerImg : 'img/T6.jpeg'
    },
]

const trailerImg = document.getElementById("trailer-img")
const trNextBtn = document.querySelector(".next-btn-trailer")
const trPrevBtn = document.querySelector(".prev-btn-trailer") 

let trImgCount = 0
trNextBtn.addEventListener('click', function(){
    trImgCount++
    if(trImgCount > slideshow.length-1){
        trImgCount = 0
    }
    DisplayTR(trImgCount)
})

trPrevBtn.addEventListener('click', function(){
    trImgCount--
    if(trImgCount < 0){
        trImgCount = slideshow.length-1
    }
    DisplayTR(trImgCount)
})

function DisplayTR(trailer){
    const item = slideshow[trailer]
    trailerImg.src = item.trailerImg
}

//End Driver Section Gallery

// Dark Mode
// $(".switch").on("click",function(){
//     if($("body").hasClass("dark")){
//         $("body").removeClass("dark")
//     }
//     else{
//         $("body").addClass("dark")
//     }
// }
