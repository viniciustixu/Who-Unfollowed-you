
let texto = document.getElementById('txta')
let texto2 = document.getElementById('txta2')
let res = document.getElementById('resultado')



function calcular() {
    let matches = texto.value.match(/^@\w+/gm) || []
    let matches2 = texto2.value.match(/^@\w+/gm) || []
    let unique = matches2.filter(val => !matches.includes(val));
    res.innerHTML = `<strong> These people doesn't follow you back: </strong> <br> <br>`
    res.innerHTML += unique.join(', ');
    res.style.background = 'lightgray'
}
