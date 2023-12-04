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

btn_reinit.addEventListener("click", function reinit(e) {
  e.preventDefault();
  if (confirm("voulez-vous réinitialiser tous les champs?") == true) {
    clearField()
  }
});
btn_creer.addEventListener("click", function (e) {
  e.preventDefault();
  addContact()
  showContact();
  clearField()
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
    let index=listContact.indexOf(element)
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
    // editIcon.setAttribute('onclick','index')
    let deletIcon=document.createElement('img')
    deletIcon.setAttribute('src','images/Vector.svg')
    deletIcon.setAttribute('onclick',`deletContact(${index})`)
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

//supprimer un contact
function deletContact (i){
  listContact.splice(i,1)
  showContact()
}

//vider les champs du formulaire
function clearField() {
  prenom.value = "";
    nom.value = "";
    tel.value = "";
    groupe.value = "";
    bio.value = "";
    file.value = "";
    email.value = "";
}

function addContact(){
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
}
