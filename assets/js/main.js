const boton = document.querySelector('button');
const color = document.getElementById('color');

function generateColorHex () {
    let digit = '0123456789abcdef';
    let colorH = '#';
    for (let i = 0; i < 6 ; i++) {
        let indexRandom = Math.floor(Math.random() *16);
        colorH += digit[indexRandom];
    }
    return colorH;
}

boton.addEventListener('click', function () {
    let colorRandom = generateColorHex();
    color.textContent = colorRandom;
    document.body.style.backgroundColor = colorRandom;
});