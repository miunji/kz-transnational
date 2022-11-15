//mobile menu
function mobileMenu() {
  let menu = document.getElementById("mobile-nav");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

//modal contact
let contactModal = document.getElementById("contact-modal");
let contactBtn = document.getElementsByClassName("contact-btn")[0];
let contactBtn2 = document.getElementsByClassName("contact-btn")[1];
let contactBtn3 = document.getElementsByClassName("contact-btn")[2];
let contactSpan = document.getElementsByClassName("contact-close")[0];
 
contactBtn.onclick = function() {
  contactModal.style.display = "block";
}
contactBtn2.onclick = function() {
  contactModal.style.display = "block";
}
contactBtn3.onclick = function() {
  contactModal.style.display = "block";
}

contactSpan.onclick = function() {
  contactModal.style.display = "none";
}

//modal services
let servicesModal = document.getElementById("services-modal");
let servicesBtn = document.getElementsByClassName("services-btn")[0];
let servicesBtn2 = document.getElementsByClassName("services-btn")[1];
let servicesBtn3 = document.getElementsByClassName("services-btn")[2];
let servicesSpan = document.getElementsByClassName("services-close")[0];
 
servicesBtn.onclick = function() {
  servicesModal.style.display = "block";
}
servicesBtn2.onclick = function() {
  servicesModal.style.display = "block";
}
servicesBtn3.onclick = function() {
  servicesModal.style.display = "block";
}

servicesSpan.onclick = function() {
  servicesModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == servicesModal || event.target == contactModal) {
    servicesModal.style.display = "none";
	contactModal.style.display = "none";
  }
}

//contact form link
$('.contact-form-link').submit(function() {
var userNameLink = $('#name-link').val();
var userEmailLink = $('#email-link').val();
var userMessageLink = $('#message-link').val();
    $.ajax({
        url: 'contact-form.php',
        type: 'POST',
        data: { 
            name: userNameLink,
            email: userEmailLink,
            message: userMessageLink,
            submit: true 
            
        },
        success: function(msg) {
            $(".contact-form-link").css({ display: "none" });
            $(".form-response-link").css({ display: "block" });
        }               
    });
    return false;
});

//contact form main
$('.contact-form-main').submit(function() {
var userNameMain = $('#name-main').val();
var userEmailMain = $('#email-main').val();
var userMessageMain = $('#message-main').val();
    $.ajax({
        url: 'contact-form.php',
        type: 'POST',
        data: { 
            name: userNameMain,
            email: userEmailMain,
            message: userMessageMain,
            submit: true 
            
        },
        success: function(msg) {
            $(".contact-form-main").css({ display: "none" });
            $(".form-response-main").css({ display: "block" });
        }               
    });
    return false;
});

//Scroll to about
$(".scroll-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

//slider
let slideIndex = 0;
	showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// Scroll to top button
const scrollTopButton = document.getElementById('scrollTopButton');

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//full page scroll
$(".s1").click(function() {
	window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
	$(".s2, .s3, .s4").removeClass('active');
	$(this).addClass('active');
});

$(".s2").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
	$(".s1, .s3, .s4").removeClass('active');
	$(this).addClass('active');
});

$(".s3").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-form").offset().top
    }, 500);
	$(".s1, .s2, .s4").removeClass('active');
	$(this).addClass('active');
});

$(".s4").click(function() {
    $('html, body').animate({
        scrollTop: $("#testimonial").offset().top
    }, 500);
	$(".s1, .s2, .s3").removeClass('active');
	$(this).addClass('active');
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

	if (scroll < 600) {
		$(".s2, .s3, .s4").removeClass('active');
		$(".s1").addClass('active');
    }
	if (scroll >= 600) {
		$(".s1, .s3, .s4").removeClass('active');
		$(".s2").addClass('active');
    } 
	if (scroll >= 1350) {
		$(".s1, .s2, .s4").removeClass('active');
		$(".s3").addClass('active');
    } 
	if (scroll >= 2050) {
		$(".s1, .s2, .s3").removeClass('active');
		$(".s4").addClass('active');
    } 
});
