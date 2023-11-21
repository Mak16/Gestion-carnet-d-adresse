let prenom = document.querySelector('#prenom');
let nom = document.querySelector('#nom');
let tel = document.querySelector('#tel');
let groupe = document.querySelector('#groupe');
let bio = document.querySelector('#bio');
let btn_creer = document.querySelector('.create')
let btn_reinit = document.querySelector('.reinit')
let li = document.createElement('li')
let ul = document.querySelector('ul')

let formulaire_input=[prenom.value,nom.value,tel.value,groupe.value,bio.value] 
btn_creer.addEventListener('click', function(){
    let li = document.createElement('li')
    li.innerHTML = prenom.value
    ul.appendChild(li)
})


// btn_reinit.addEventListener('click', function(){
//     alert(prenom.value )
// })
// console.log(prenom.value);