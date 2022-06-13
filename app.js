// Lightbox
let listProjects = document.querySelectorAll('.grid_content');
let arrayProjects = Array.from(listProjects);

let closeProjects = document.querySelectorAll(".close_modal");
let arrayClose = Array.from(closeProjects);

let show = document.querySelector(".show");

arrayProjects.forEach(event => {
	event.addEventListener("click", function () {
		console.log(this.nextElementSibling);
		this.nextElementSibling.classList.toggle("show");
	});
});

arrayClose.forEach(event => {
	event.addEventListener("click", function () {
		let vo = this.closest(".modal_content")
		vo.classList.remove("show");
	});
});


// _________________________________________________________________________
// slideshow
let carroselIndex = 1;
carroselSlides(carroselIndex);

function nextSlides(n) {
  carroselSlides(carroselIndex += n);
};

function currentSlide(n) {
  carroselSlides(carroselIndex = n);
};

function carroselSlides(n) {
  let i;
  let carrosel = document.getElementsByClassName("imagesSlides");
  if (n > carrosel.length) {carroselIndex = 1}    
  if (n < 1) {carroselIndex = carrosel.length}
  for (i = 0; i < carrosel.length; i++) {
    carrosel[i].style.display = "none";  
  }
  carrosel[carroselIndex-1].style.display = "block";  
};


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






// let modal = document.querySelector(".modal_content");
// // console.log(modal)

// function showModal () {
// 	console.log("clicou");
// };


// modal.addEventListener("click", showModal);


// function showClasse (e) {
// 	console.log(e.target.classList);
// }

// modal.forEach(modals => {
// 	modals.addEventListener("click", showClasse);
// });

// const projects = document.querySelectorAll(".grid_bg");

// function activeClasse (e) {
// 	projects.forEach(project => {
// 		project.classList.remove("active");
// 	});
// 	e.target.classList.add("active");
// };

// function removeActiveClasse (e) {
// 	projects.forEach(project => {
// 		project.classList.remove("active");
// 	});
// }






// const modal = document.querySelector(".modal_content");

// function openModal() {
//   document.querySelector(".modal_content").style.display = "flex";
	
// };

// function closeModal() {
// 	document.querySelector(".modal_content").style.display = "none";
// };
