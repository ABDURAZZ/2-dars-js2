let nom = document.getElementById('div')
let input = document.getElementById('sulton')
let  button = document.getElementById('button')


let text = ``

button.addEventListener('click' , ()=>{
    console.log(input.value);
    text = text + `<p>${input.value}</p>`
    localStorage.setItem('text', text)
    nom.innerHTML = localStorage.getItem('text')
})

