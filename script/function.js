function deletContact(i) {
  listContact.splice(i, 1);
  showContact();
}
function clearField() {
  form.reset();
  picture = "";
  div.removeChild(img);
  label.innerHTML = "Déposez la photo";
}
function addContact() {
  let existeEmail = listContact.some(
    (element) => element.email === email.value
  );
  let msgMail = document.querySelector("#MySpan_email");
  let existeNumber = listContact.some(
    (element) => element.telephone === tel.value
  );
  let msgNum = document.querySelector("#MySpan_tel");
  let msgPhoto = document.querySelector("#MySpan_photo");
  let msgNom = document.querySelector("#MySpan_nom");
  let msgPrenom = document.querySelector("#MySpan_prenom");

  let contact = new IdContact(
    prenom.value,
    nom.value,
    tel.value,
    groupe.value,
    email.value,
    bio.value,
    picture
  );
  if (!regex_nom.test(prenom.value)) {
    msgPrenom.innerHTML = "le prenom doit avoir entre 3 et 50 caracteres";
    prenom.style.border = "2px solid red";
    prenom.value = element.prenom;
    return false;
  } else if (!regex_nom.test(nom.value)) {
    msgNom.innerHTML = "le nom doit avoir entre 3 et 50 caracteres";
    nom.style.border = "2px solid red";
    nom.value = element.nom;
    return false;
  } else if (existeNumber) {
    msgNum.innerHTML = "Ce numero existe dans le carnet";
    tel.style.border = "2px solid red";
    tel.value = element.telephone;
    return false;
  } else if (!regex_tel.test(tel.value)) {
    msgNum.innerHTML = "le numéro est invalide";
    tel.style.border = "2px solid red";
    tel.value = element.telephone;
    return false;
  } else if (existeEmail) {
    msgMail.innerHTML = "Ce mail existe dans le carnet";
    email.style.border = "2px solid red";
    tel.value = element.telephone;
    email.value = element.email;
    return false;
  } else if (!regex_email.test(email.value)) {
    msgMail.innerHTML = "Ce mail est invalide";
    email.style.border = "2px solid red";
    tel.value = element.telephone;
    email.value = element.email;
    return false;
  } else if (picture == undefined) {
    msgPhoto.innerHTML = "veillez charger une image";
    div.style.border = "2px solid red";
    return false;
  } else {
    let nomImage = file.files;
    let nomImg = nomImage.length > 0 ? nomImage[0].name : "";
    let estImage = regex_image.test(nomImg);
    let tailleImg = nomImage.length > 0 ? nomImage[0].size : "";
    if (!estImage) {
      msgPhoto.innerHTML = "Le format de l'image nest pas prise en charge";
      file.style.border = "2px solid red";
      return false;
    } else if (tailleImg > 5242880) {
      msgPhoto.innerHTML = "l'image doit avoir moins de 5Mo";
      div.style.border = "2px solid red";
      return false;
    } else {
      listContact.push(contact);
      msgMail.innerHTML = "";
      email.style.border = "";
      msgNum.innerHTML = "";
      tel.style.border = "";
      msgPhoto.innerHTML = "";
      div.style.border = "";
      msgNom.innerHTML = "";
      nom.style.border = "";
      msgPrenom.innerHTML = "";
      prenom.style.border = "";
    }
  }
}
function editContact(i) {
  let contactModifie = new IdContact(
    prenom.value,
    nom.value,
    tel.value,
    groupe.value,
    email.value,
    bio.value,
    picture
  );
  listContact[i] = contactModifie;
}