// Owl Carousel 
$(document).ready(function(){
    $('.owl-carousel1').owlCarousel({
        
        autoplay: true,  // Auto-play the slider
        autoplayTimeout: 3000,
        loop: true,
        autoplaySpeed: 1100,
        margin:30,
        // center: true, // Center the active slide
       
        items: 2, // Number of items to display by default
    responsive: {
        0: {
            items: 1 // 1 item displayed on screens less than 768px wide
        },
        768: {
            items: 2 // 3 items displayed on screens between 600px and 900px wide
        },
        900: {
            items: 2 // 5 items displayed on screens 900px wide and above
        }
    }
    });


    
// Top Doctors section carousel jquery script

$('.owl-carousel2').owlCarousel({
    autoplay: true,  // Auto-play the slider
    autoplayTimeout: 3000,
    loop: true,
    autoplaySpeed: 1100,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        786:{
            items:1
        },
        900:{
            items:3
        }
    }
});



$('.owl-carousel3').owlCarousel({
    autoplay: true,  // Auto-play the slider
    autoplayTimeout: 3000,
    loop: true,
    autoplaySpeed: 1100,
    margin:18,
    responsive:{
        0:{
            items:1
        },
        786:{
            items:1
        },
        900:{
            items:3
        }
    }
});

});








// JavaScript for toggling the navbar menu on small screens

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbarLinks = document.getElementById("navbar-links");

    menuToggle.addEventListener("click", function () {
        navbarLinks.classList.toggle("active");
    });
});


// JavaScript for toggling the FAQs Answers 

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            if (answer.style.display === "block" || answer.style.display === "") {
                answer.style.display = "none";
                this.classList.remove("expanded");
            } else {
                answer.style.display = "block";
                this.classList.add("expanded");
            }
        });
    });
});




