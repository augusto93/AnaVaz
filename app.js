// Lightbox
let listProjects = document.querySelectorAll('.grid_content');
let arrayProjects = Array.from(listProjects);

let closeProjects = document.querySelectorAll(".close_modal");
let arrayClose = Array.from(closeProjects);

let show = document.querySelector(".show");

arrayProjects.forEach(event => {
	event.addEventListener("click", function () {
		this.nextElementSibling.classList.toggle("show");
	});
});

arrayClose.forEach(event => {
	event.addEventListener("click", function () {
		let vo = this.closest(".modal_content")
		vo.classList.toggle("show");
	});
});

let modalIndex = 1;
modalSlides(modalIndex);

function changeModal(n) {
  modalSlides(modalIndex += n);
};

function modalSlides(n) {
  let i;
	let modal = document.querySelectorAll(".modal_content");
	let arrayModal = Array.from(modal);
		if (n > arrayModal.length) {modalIndex = 1}
		if (n < 1) {modalIndex = arrayModal.length}
		else {
			}
		for (i = 0; i < arrayModal.length; i++) {
			arrayModal[i].classList.remove ("show")
		}
			arrayModal[modalIndex-1].classList.add ("show")
};

const hide = document.querySelector('.modal_content');
hide.classList.remove("show");

// _________________________________________________________________________
// slideshow

let interval = 0;
let maxSlider = document.querySelectorAll(".imagesSlides").length - 1;

action();

function action() {
	let img = document.querySelectorAll(".imagesSlides");
	setInterval(function() {
		img[interval].style.display = "none";
		interval++;
		if(interval > maxSlider) {
			interval = 0;
		}
		img[interval].style.display = "block";
	},10000);
}

let carrosel = document.querySelectorAll(".imagesSlides");
arrayCarrosel = Array.from(carrosel);

let carroselIndex = 1;
carroselSlides(carroselIndex);

function nextSlides(n) {
  carroselSlides(carroselIndex += n);
};

function carroselSlides(n) {
  let i;
  if (n > carrosel.length) {carroselIndex = 1}    
  if (n < 1) {carroselIndex = carrosel.length}
  for (i = 0; i < carrosel.length; i++) {
    carrosel[i].style.display = "none";  
  }
  carrosel[carroselIndex-1].style.display = "block";  
} 

// _________________________________________________________________________
// Event to hover to projects 
const projects = document.querySelectorAll(".grid_bg");

function activeClasse (e) {
	projects.forEach(project => {
		project.classList.remove("active");
	});
	e.target.classList.add("active");
};

projects.forEach(project => {
	project.addEventListener("mouseenter", activeClasse);
});

// _________________________________________________________________________
// Event to smoth scroll page 
$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
	targetOffset = $(id).offset().top;
	
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 1000);
});