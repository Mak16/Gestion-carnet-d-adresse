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

