
const btn = document.querySelector('button');
// pobieranie elementu 'button' - pierwszy pasujący element


let number = 1;
// zmienna 'number'

const addElement = () => {
// funkcja strzałkowa 'addElement', która tworzy element

    const box = document.createElement('div');
    // zmienna 'box', która tworzy 'div'
    box.classList.add('box');
    // dodawanie classy '.box' do 'diva'


    box.textContent = number;
    if (number%2) {
        box.classList.add('even');
    }
    number++;

    document.querySelector('.box-wrapper').appendChild(box);
}

    
btn.addEventListener('click', addElement);
// gdy 'btn' będzie kliknięty to wykona się funkcja 'addElement'
