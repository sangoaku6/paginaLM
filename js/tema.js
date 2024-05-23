
const botonoscuro = document.getElementById('dark');
const botonclaro = document.getElementById('light');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

botonoscuro.onclick = () => {
    console.log(body.classList);
    body.classList.replace('light','dark');
    console.log(body.classList);
    localStorage.setItem('theme','dark')
};

botonclaro.onclick = () => {
    console.log(body.classList);
    body.classList.replace('dark','light');
    console.log(body.classList);
    localStorage.setItem('theme','light')
};