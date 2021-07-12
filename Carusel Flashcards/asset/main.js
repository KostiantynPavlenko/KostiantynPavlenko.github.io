let button_previous = document.querySelector('.button_previous');
let button_next = document.querySelector('.button_next');

let cards = document.querySelectorAll('.full_card');

const carusel = document.querySelector('.carousel_slide');

let counter = 0;
let step_size = cards[0].clientWidth;
step_size = step_size + 40;
let card_counter = document.getElementById("current_card")


button_next.addEventListener('click', function (){
    counter >= cards.length - 1 ? counter = -1 : null;
    carusel.classList.add('transform_animation')
    counter++;
    carusel.style.transform = 'translate(' + `${-step_size * counter}px)`;
    card_counter.innerHTML = String(counter + 1);
})

button_previous.addEventListener('click', function (){
    counter <= 0 ? counter = cards.length : null;
    carusel.classList.add('transform_animation')
    counter--;
    carusel.style.transform = 'translate(' + `${-step_size * counter}px)`;
    card_counter.innerHTML = String(counter + 1);
})

$('.full_card').click(function (){
    this.classList.toggle('is_flipped');
});