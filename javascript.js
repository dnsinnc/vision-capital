'use script';

function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show');
      }
   });
}

let options = {
   threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
   observer.observe(elm);
}




const button = document.getElementById('open-close')
const menu = document.getElementById('menu')


function openMenu() {
   if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden')
   } else (
      menu.classList.add('hidden')

   )
}


button.addEventListener('click', () => {
   console.log(button)
   openMenu()
})