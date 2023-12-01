let prenom = document.querySelector('#prenom');
let nom = document.querySelector('#nom');
let tel = document.querySelector('#tel');
let groupe = document.querySelector('#groupe');
let email = document.querySelector('#email')
let bio = document.querySelector('#bio');
let file= document.querySelector('#file');
let btn_creer = document.querySelector('.create')
let btn_reinit = document.querySelector('.reinit')

let prenom = document.querySelector("#prenom");
let nom = document.querySelector("#nom");
let tel = document.querySelector("#tel");
let groupe = document.querySelector("#groupe");
let bio = document.querySelector("#bio");
let file = document.querySelector("#file");
let email = document.querySelector("#email");
let listContenair = document.querySelector(".contact-list");
let btn_creer = document.querySelector(".create");
let btn_reinit = document.querySelector(".reinit");
let listContact = [];

btn_reinit.addEventListener('click', function reinit(e){
    e.preventDefault();
    if (confirm("voulez-vous réinitialiser tous les champs?") == true) {
        prenom.value="";
        nom.value="";
        tel.value="";
        groupe.value="";
        email.value="";
        bio.value="";
        file.value="";
        span_tel.textContent="";
        span_email.textContent="";
        span_prenom.textContent="";
        span_nom.textContent="";
        tel.style.border = "";
        email.style.border = "";
        prenom.style.border = "";
        nom.style.border = "";





      } 
})



// validation prenom

let MySpan_prenom = document.querySelector("#MySpan_prenom")
let span_prenom = document.createElement("span_prenom");
let regex_prenom =/^[a-zA-Z]{3,50}$/
let result_prenom;
prenom.addEventListener('blur',function(){
    MySpan_prenom.appendChild(span_prenom);
    result_prenom=prenom.value.trim();
    if(regex_prenom.test(result_prenom)){
        prenom.style.border = "2px solid green";
        span_prenom.textContent="Nom valide"
    }
   
    else{
       
        span_prenom.style.color="red"
        prenom.style.border = "2px red solid";
        span_prenom.textContent="Nom invalide"
   }
})


//validation Nom 

let MySpan_nom = document.querySelector("#MySpan_nom")
let span_nom = document.createElement("span_nom");
let regex_nom =/^[a-zA-Z]{3,50}$/
let result_nom;
nom.addEventListener('blur',function(){
    MySpan_nom.appendChild(span_nom);
    result_nom=nom.value.trim();
    if(regex_nom.test(result_nom)){
        nom.style.border = "2px solid green";
        span_nom.textContent="Nom valide"
    }
   
    else{
       
        span_nom.style.color="red"
        nom.style.border = "2px red solid";
        span_nom.textContent="Nom invalide"
   }
})


//validation email 

 let MySpan_email = document.querySelector("#MySpan_email")
 let span_email = document.createElement("span");
 let regex_email =/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
 let result_email;
 email.addEventListener('blur',function(){
     MySpan_email.appendChild(span_email);
     result_email=email.value.trim();
     if(regex_email.test(result_email)){
         email.style.border = "2px solid green";
         span_email.textContent="email valide"
     }
    
     else{
        
         span_email.style.color="red"
         email.style.border = "2px red solid";
         span_email.textContent="Email invalide"
    }
 })


 // validation numero tel

 let MySpan_tel = document.querySelector("#MySpan_tel")
 let span_tel = document.createElement("span");
 let regex_tel =/^((\+243|00243|0)(81|82|97|99|80|84|85|89|90))([\d]{7})$/
 let result_tel;
 tel.addEventListener('blur',function(){
     MySpan_tel.appendChild(span_tel);
     result_tel=tel.value.trim();
     if(regex_tel.test(result_tel)){
         tel.style.border = "2px solid green";
         span_tel.textContent="Numero valide"
     }
    
     else{
        
         span_tel.style.color="red"
         tel.style.border = "2px red solid";
         span_tel.textContent="Numéro invalide"
    }
 })


btn_reinit.addEventListener("click", function reinit(e) {
  e.preventDefault();
  if (confirm("voulez-vous réinitialiser tous les champs?") == true) {
    prenom.value = "";
    nom.value = "";
    tel.value = "";
    groupe.value = "";
    bio.value = "";
    file.value = "";
    email.value = "";
  }
});

// console.log(form);
btn_creer.addEventListener("click", function (e) {
  e.preventDefault();
  let contact = new IdContact(
    prenom.value,
    nom.value,
    tel.value,
    groupe.value,
    email.value,
    bio.value,
    file.value
  );
  listContact.push(contact);
  console.log(listContact);
  showContact();
  // console.log(listContact);
});

function IdContact(prenom, nom, telephone, groupe, email, bio, photo) {
  this.prenom = prenom;
  this.nom = nom;
  this.telephone = telephone;
  this.groupe = groupe;
  this.email = email;
  this.bio = bio;
  this.photo = photo;
}

function showContact() {
  listContenair.innerHTML = "";
  let span=document.createElement('span')
  listContenair.appendChild(span)
  span.innerHTML='Liste des contacts'
  for (let i = 0; i < listContact.length; i++) {
    const element = listContact[i];
    // console.log(element.prenom);
    let contactListItems = document.createElement("div");
    contactListItems.setAttribute("class", "contact-list-items");
    let photo = document.createElement("div");
    photo.setAttribute("class", "photo");
    photo.innerHTML = "photo";
    contactListItems.appendChild(photo);
    listContenair.appendChild(contactListItems);
    let infoContact = document.createElement("div");
    infoContact.setAttribute("class", "info-contact");
    contactListItems.appendChild(infoContact);
    let nameContact = document.createElement("div");
    nameContact.setAttribute("class", "name-contact");
    infoContact.appendChild(nameContact);
    let personalInfo = document.createElement("div");
    personalInfo.setAttribute("class", "personal-info");
    nameContact.appendChild(personalInfo);
    let pPrenom = document.createElement("p");
    personalInfo.appendChild(pPrenom);
    pPrenom.innerHTML = element.prenom;
    let pNom = document.createElement("p");
    personalInfo.appendChild(pNom);
    pNom.innerHTML = element.nom;
    let pGroupe = document.createElement("p");
    personalInfo.appendChild(pGroupe);
    pGroupe.innerHTML = `- ${element.groupe}`;

    //creation des boutons de modification et suppression

    let editDelete=document.createElement('div')
    editDelete.setAttribute('class','edit-delete')
    nameContact.appendChild(editDelete)
    let edit=document.createElement('button')
    edit.setAttribute('class','btn_edit')
    let delet=document.createElement('button')
    delet.setAttribute('class','btn_delete')
    let editIcon=document.createElement('img')
    editIcon.setAttribute('src','images/Vector(1).svg')
    let deletIcon=document.createElement('img')
    deletIcon.setAttribute('src','images/Vector.svg')
    edit.appendChild(editIcon)
    delet.appendChild(deletIcon)
    editDelete.appendChild(edit)
    editDelete.appendChild(delet)
    //ajout de numero, email et bio
    let phoneEmail=document.createElement('div')
    phoneEmail.setAttribute('class','phone-num')
    let biography=document.createElement('div')
    biography.setAttribute('class','biography')
    infoContact.appendChild(phoneEmail)
    infoContact.appendChild(biography)
    let pPhone=document.createElement('p')
    let pBio=document.createElement('p')
    pPhone.innerHTML=`${element.telephone} -  ${element.email}`
    pBio.innerHTML=element.bio
    phoneEmail.appendChild(pPhone)
    biography.appendChild(pBio)
  }
}