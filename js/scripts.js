// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
   const burger = document.querySelector(".burger");
   const menu = document.querySelector(".menu");
   const body = document.querySelector("body");
   burger.addEventListener("click", () => {
      if (!menu.classList.contains("active")) {
         menu.classList.add("active");
         burger.classList.add("active-burger");
         body.classList.add("locked");
      } else {
         menu.classList.remove("active");
         burger.classList.remove("active-burger");
         body.classList.remove("locked");
      }
   });
   // Вот тут мы ставим брейкпоинт навбара
   window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
         menu.classList.remove("active");
         burger.classList.remove("active-burger");
         body.classList.remove("locked");
      }
   });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
   const nav = document.querySelector("nav");

   // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
   const breakpoint = 1;
   if (window.scrollY >= breakpoint) {
      nav.classList.add("fixed__nav");
   } else {
      nav.classList.remove("fixed__nav");
   }
}
window.addEventListener("scroll", fixedNav);

function accordion() {
   const items = document.querySelectorAll(".accordion__item-trigger");
   items.forEach((item) => {
      item.addEventListener("click", () => {
         const parent = item.parentNode;
         if (parent.classList.contains("accordion__item-active")) {
            parent.classList.remove("accordion__item-active");
         } else {
            document
               .querySelectorAll(".accordion__item")
               .forEach((child) =>
                  child.classList.remove("accordion__item-active")
               );
            parent.classList.add("accordion__item-active");
         }
      });
   });
}
accordion();

function toggle(){
	const item = document.querySelector('.header_price__btn')
	const spans = document.querySelectorAll('.btn__span')
	const toggle = document.querySelector('.btn__toggle')
	item.addEventListener('click', ()=>{
		if(!item.classList.contains("btn-active")){
			spans[0].classList.add('active')
			spans[1].classList.remove('active')
			toggle.classList.add('active')
			item.classList.add("btn-active")

		} else {
			spans[1].classList.add('active')
			spans[0].classList.remove('active')
			toggle.classList.remove('active')
			item.classList.remove("btn-active")
		}
	})
}
toggle()

function reviews(){
	const linkReview = document.querySelector('.reviews__link')
	const hiddenBlock = document.querySelector('.review__hidden')
	linkReview.addEventListener('click', ()=>{
		if(!hiddenBlock.classList.contains('active-review')){
			hiddenBlock.classList.add('active-review')
		} else {
			hiddenBlock.classList.remove('active-review')
		}
	})
}
reviews()

function spoiler() {
   const items = document.querySelectorAll(".spoiler__item-ask");
   items.forEach((item) => {
      item.addEventListener("click", () => {
         const parent = item.parentNode;
         if (parent.classList.contains("spoiler__item-active")) {
            parent.classList.remove("spoiler__item-active");
         } else {
            document
               .querySelectorAll(".spoiler__item")
               .forEach((child) =>
                  child.classList.remove("spoiler__item-active")
               );
            parent.classList.add("spoiler__item-active");
         }
      });
   });
}
spoiler();
