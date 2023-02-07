const card = document.querySelectorAll('.photo');
const btns = document.querySelectorAll('.btn');

let currentCard = 1;


let manualNav = function(manual){

    card.forEach((photo) => {
        photo.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    card[manual].classList.add('active');
    btns[manual].classList.add('active');
}


btns.forEach((btn, i) => {
    btn.addEventListener("click" , () => {
        manualNav(i);
        currentCard = i;
    });
});