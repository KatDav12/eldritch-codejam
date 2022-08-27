import difficulties from '../eldritch-codejam/data/difficulties'
import ancientsData from '../eldritch-codejam/data/ancients'
const card = document.querySelector('.card');
const items = document.querySelector('.all-items-none');
const rubashka = document.querySelector('.rubashka-none');
const btn = document.querySelector('.btn');
const karta = document.querySelector('.karta');
const koloda = document.querySelector('.koloda');

//вкл колоды
function getBtn(){
    items.classList.remove('all-items-none');
    items.classList.add('all-items');
    rubashka.classList.toggle('rubashka-none');
    rubashka.classList.add('rubashka');
}
btn.addEventListener('click', getBtn)
//вкл карты
function setImage() {
    karta.classList.remove('karta');
    karta.classList.add('karta-active');
}
rubashka.addEventListener('click', setImage);
