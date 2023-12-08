function deletContact(i) {
    listContact.splice(i, 1);
    showContact();
}
function clearField() {
    form.reset()
    picture=""
    div.removeChild(img);
    label.innerHTML = "Déposez la photo";
}
function addContact() {
    let existeEmail = listContact.some(element => element.email === email.value);
    let msgMail = document.querySelector('#MySpan_email')
    let existeNumber = listContact.some(element => element.telephone === tel.value);
    let msgNum = document.querySelector('#MySpan_tel')
    let contact = new IdContact(
        prenom.value,
        nom.value,
        tel.value,
        groupe.value,
        email.value,
        bio.value,
        picture
    );
    if(existeNumber){
        msgNum.innerHTML='Ce numero existe dans le carnet'
        tel.style.border="2px solid red"
        tel.value=element.telephone
        return false
    }
    
    else if(existeEmail){
        msgMail.innerHTML='Ce mail existe dans le carnet'
        email.style.border="2px solid red"
        email.value=element.telephone
        return false
    }
    else if(!existeEmail || !existeNumber){
        listContact.push(contact);
        msgMail.innerHTML=""
        email.style.border=""
        msgNum.innerHTML=""
        tel.style.border=""
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