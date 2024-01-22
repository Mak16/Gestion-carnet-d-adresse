let form=document.querySelector("form")
let prenom = document.querySelector("#prenom");
let nom = document.querySelector("#nom");
let tel = document.querySelector("#tel");
let groupe = document.querySelector("#groupe");
let bio = document.querySelector("#bio");
let email = document.querySelector("#email");
let listContenair = document.querySelector(".contact-list");
let btn_creer = document.querySelector(".create");
let btn_reinit = document.querySelector(".reinit");
let listContact = [];
const regex_tel =/^((\+243|00243|0)(81|82|83|97|99|80|84|85|89|90))([\d]{7})$/
const regex_nom =/^[a-zA-Z]{3,50}$/
const regex_email =/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
const regex_image = /\.(png|jpe?g)$/i;
let picture;
let div = document.querySelector(".upload");
let label = document.querySelector("#label_affichage");
let file = document.querySelector("#file");
let img = document.createElement("img");
img.setAttribute('class','image')
img.style.width = "100%";
img.style.height = "100%";
file.onchange = function (event) {
  let fichier = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function (e) {
    img.src = e.target.result;
    picture = e.target.result;
    div.appendChild(img);
    label.innerHTML = "";
  };
  reader.readAsDataURL(fichier);
};

function IdContact(prenom, nom, telephone, groupe, email, bio, photo) {
  this.prenom = prenom;
  this.nom = nom;
  this.telephone = telephone;
  this.groupe = groupe;
  this.email = email;
  this.bio = bio;
  this.photo = photo;
}
btn_reinit.addEventListener("click", function reinit(e) {
  e.preventDefault();
  clearField();
});
btn_creer.addEventListener("click", function (e) {
  e.preventDefault();
  addContact();
  showContact();
  clearField();
  
});
function showContact() {
  listContenair.innerHTML = "";
  let span = document.createElement("span");
  listContenair.appendChild(span);
  span.innerHTML = "Liste des contacts";
  for (let i = 0; i < listContact.length; i++) {
    const element = listContact[i];
    let index = listContact.indexOf(element);
    let contactListItems = document.createElement("div");
    contactListItems.setAttribute("class", "contact-list-items");
    let photo = document.createElement("div");
    photo.setAttribute("class", "photo");
    contactListItems.appendChild(photo);
    let image = document.createElement("img");
    image.setAttribute('class','image')
    image.setAttribute("src", `${element.photo}`);
    photo.appendChild(image);
    listContenair.appendChild(contactListItems);
    let infoContact = document.createElement("div");
    infoContact.style.paddingTop="15px"
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
    pNom.setAttribute('class','paragraph')
    personalInfo.appendChild(pNom);
    pNom.innerHTML = element.nom;
    let pGroupe = document.createElement("p");
    pGroupe.setAttribute('class','paragraph')
    personalInfo.appendChild(pGroupe);
    pGroupe.innerHTML = ` ${element.groupe}`;
    //creation des boutons de modification et suppression
    let editDelete = document.createElement("div");
    editDelete.setAttribute("class", "edit-delete");
    nameContact.appendChild(editDelete);
    let edit = document.createElement("button");
    edit.style.border="1px solid white"
    edit.setAttribute("class", "btn_edit");
    let delet = document.createElement("button");
    delet.style.border="1px solid white"
    edit.style.backgroundColor="white"
    delet.style.backgroundColor="white"
    delet.setAttribute("class", "btn_delete");
    let editIcon = document.createElement("img");
    editIcon.setAttribute("src", "images/Vector(1).svg");
    // editIcon.setAttribute('onclick','index')
    let deletIcon = document.createElement("img");
    deletIcon.setAttribute("src", "images/Vector.svg");
    deletIcon.setAttribute("onclick", `deletContact(${index})`);
    edit.appendChild(editIcon);
    delet.appendChild(deletIcon);
    editDelete.appendChild(edit);
    editDelete.appendChild(delet);
    //ajout de numero, email et bio
    let phoneEmail = document.createElement("div");
    phoneEmail.setAttribute("class", "phone-num");
    let biography = document.createElement("div");
    biography.setAttribute("class", "biography");
    infoContact.appendChild(phoneEmail);
    infoContact.appendChild(biography);
    let pPhone = document.createElement("p");
    let pBio = document.createElement("p");
    pBio.style.width="100%"
    pPhone.innerHTML = `${element.telephone}   ${element.email}`;
    pBio.innerHTML = element.bio;
    phoneEmail.appendChild(pPhone);
    biography.appendChild(pBio);
    edit.addEventListener("click", function (e) {
      btn_creer.style.display = "none";
      btn_reinit.style.display = "none";
      btn_reinit.style.border="1px solid white"
      prenom.value = element.prenom;
      nom.value = element.nom;
      tel.value = element.telephone;
      groupe.value = element.groupe;
      bio.value = element.bio;
      picture = element.photo;
      div.appendChild(img);
      email.value = element.email;
      let btn_modifier = document.createElement("button");
      btn_modifier.innerHTML = "Mofifier";
      btn_modifier.setAttribute("class", "btn_modifier");
      let btn_annuler = document.createElement("button");
      btn_annuler.innerHTML = "Annuler";
      btn_annuler.setAttribute("class", "btn_annuler");
      let btn = document.querySelector(".btn");
      edit.style.display='none'
      btn.appendChild(btn_modifier);
      btn.appendChild(btn_annuler);
      btn_modifier.addEventListener("click", function (e) {
        e.preventDefault();
        editContact(index);
        showContact();
        btn_modifier.style.display = "none";
        btn_annuler.style.display = "none";
        btn_creer.style.display = "block";
        btn_reinit.style.display = "block";
        clearField();
      });
      btn_annuler.addEventListener("click", function (e) {
        e.preventDefault();
        clearField();
      });
    });
  }
}


