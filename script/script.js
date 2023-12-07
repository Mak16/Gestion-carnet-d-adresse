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
let picture

// validation prenom

function validation_prenom(){
      
  let MySpan_prenom = document.querySelector("#MySpan_prenom")
  let span_prenom = document.createElement("span_prenom");
  let regex_prenom =/^[a-zA-Z]{3,50}$/
  let result_prenom;
  prenom.addEventListener('blur',function(){
      MySpan_prenom.appendChild(span_prenom);
      result_prenom=prenom.value.trim();
      if(regex_prenom.test(result_prenom)){
          prenom.style.border = "2px solid green";
          // span_prenom.textContent="Prénom valide"
          // span_prenom.style.color="green"
          // span_prenom.style.fontSize="10px"
          // span_prenom.style.fontStyle="italic"
     
      }
     
      else{
          prenom.style.border = "2px solid red";
          // span_prenom.style.color="red"
          // span_prenom.textContent="prénom invalide"
          // span_prenom.style.color="red"
          // span_prenom.style.fontSize="10px"
          // span_prenom.style.fontStyle="italic"
     
     }
  })
  
} validation_prenom()

//validation Nom 

function validation_nom(){
     
  let MySpan_nom = document.querySelector("#MySpan_nom")
  let span_nom = document.createElement("span_nom");
  let regex_nom =/^[a-zA-Z]{3,50}$/
  let result_nom;
  nom.addEventListener('blur',function(){
      MySpan_nom.appendChild(span_nom);
      result_nom=nom.value.trim();
      if(regex_nom.test(result_nom)){
          nom.style.border = "2px solid green";
          // span_nom.textContent="Nom valide"
          // span_nom.style.color="green"
          // span_nom.style.fontSize="10px"
          // span_nom.style.fontStyle="italic"
      }
     
      else{
          nom.style.border = "2px red solid";
          // span_nom.style.color="red"
          // span_nom.textContent="Nom invalide"
          // span_nom.style.color="red"
          // span_nom.style.fontSize="10px"
          // span_nom.style.fontStyle="italic"
     }
  })  

} validation_nom()

//validation email

function validation_email(){
      
  let MySpan_email = document.querySelector("#MySpan_email")
  let span_email = document.createElement("span");
  let regex_email =/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
  let result_email;
  email.addEventListener('blur',function(){
      MySpan_email.appendChild(span_email);
      result_email=email.value.trim();
      if(regex_email.test(result_email)){
          email.style.border = "2px solid green";
          // span_email.textContent="Email valide"
          // span_email.style.color="green"
          // span_email.style.fontSize="10px"
          // span_email.style.fontStyle="italic"
      }
     
      else{
          email.style.border = "2px red solid";
          // span_email.style.color="red"
          // span_email.style.fontSize="10px"
          // span_email.style.fontStyle="italic"
          // span_email.textContent="Email invalide"
     }
  })

} validation_email()
 

 // validation numero tel

 function validation_numero_tel(){
  let MySpan_tel = document.querySelector("#MySpan_tel")
  let span_tel = document.createElement("span");
  let regex_tel =/^((\+243|00243|0)(81|82|97|99|80|84|85|89|90))([\d]{7})$/
  let result_tel;
  tel.addEventListener('blur',function(){
      MySpan_tel.appendChild(span_tel);
      result_tel=tel.value.trim();
      if(regex_tel.test(result_tel)){
          tel.style.border = "2px solid green";
          // span_tel.textContent="Numéro valide"
          // span_tel.style.color="green"
          // span_tel.style.fontSize="10px"
          // span_tel.style.fontStyle="italic"
      }
     
      else{
          tel.style.border = "2px red solid";
          // span_tel.style.color="red"
          // span_tel.style.fontSize="10px"
          // span_tel.style.fontStyle="italic"
          // span_tel.textContent="Numéro invalide"
     }
  })
 
 } validation_numero_tel()

// validation groupe

function  validation_groupe(){
     
let MySpan_groupe = document.querySelector("#MySpan_groupe")
let span_groupe = document.createElement("span_groupe");
let regex_groupe =/^[a-zA-Z0-9]{1,10}$/
let result_groupe;
groupe.addEventListener('blur',function(){
    MySpan_groupe.appendChild(span_groupe);
    result_groupe=groupe.value.trim();
    if(regex_groupe.test(result_groupe)){
       groupe.style.border = "2px solid green";
      //  span_groupe.textContent="Nom du groupe valide"
      //  span_groupe.style.color="green"
      //  span_groupe.style.fontSize="10px"
      //  span_groupe.style.fontStyle="italic"
    }
   
    else{
        groupe.style.border = "2px red solid";
        // span_groupe.style.color="red"
        // span_groupe.style.fontSize="10px"
        // span_groupe.style.fontStyle="italic"
        // span_groupe.textContent="Nom  du groupe invalide"
        
   }
})    
}  validation_groupe()

// validation bio

 function validation_bio(){

  let MySpan_bio = document.querySelector("#MySpan_bio")
  let span_bio = document.createElement("span_bio");
  let regex_bio =/^[a-zA-Z0-9]{1,200}$/
  let result_bio ;
  bio.addEventListener('blur',function(){
      MySpan_bio .appendChild(span_bio );
      result_bio =bio.value.trim();
      if(regex_bio.test(result_bio )){
        bio.style.border = "2px solid green";
        // span_bio.textContent="Bio valide"
        // span_bio.style.color="green"
        // span_bio.style.fontSize="10px"
        // span_bio.style.fontStyle="italic"
      }
     
      else{
          bio.style.border = "2px red solid";
          // span_bio.style.color="red"
          // span_bio.textContent="Bio invalide , veillez reduire nombre de caractères"
          // span_bio.style.color="red"
          // span_bio.style.fontSize="10px"
          // span_bio.style.fontStyle="italic"
     }a
  })
 } validation_bio()

// input type file traitement

let div = document.querySelector(".upload")
let label = document.querySelector('#label_affichage')
let file = document.querySelector("#file");
let img = document.createElement('img')
img.style.width="100%"
img.style.height="100%"

file.onchange= function(event){
  let fichier = event.target.files[0]
  let reader = new FileReader()
  reader.onload = function(e){
  img.src= e.target.result
  picture=e.target.result
  div.appendChild(img)
  label.innerHTML=""
  console.log(picture)
  }
  reader.readAsDataURL(fichier)
  
}




btn_reinit.addEventListener('click', function reinit(e){
    e.preventDefault();
    if (confirm("voulez-vous réinitialiser tous les champs?") == true){
        prenom.value="";
        nom.value="";
        tel.value="";
        groupe.value="";
        email.value="";
        bio.value="";
        file.value="";
        // span_tel.textContent="";
        // span_email.textContent="";
        // span_prenom.textContent="";
        // span_nom.textContent="";
        tel.style.border = "1px solid rgb(196, 196, 196)";
        email.style.border = "1px solid rgb(196, 196, 196)"
        prenom.style.border = "1px solid rgb(196, 196, 196 )";
        nom.style.border = "1px solid rgb(196, 196, 196 )";
        groupe.style.border = "1px solid rgb(196, 196, 196)";
        bio.style.border = "1px solid rgb(196, 196, 196)";
      } 
})

 // button créer

btn_creer.addEventListener("click", function (e) {
  e.preventDefault();
  let contact = new IdContact(
    prenom.value,
    nom.value,
    tel.value,
    groupe.value,
    email.value,
    bio.value,
    picture
  );
  tel.style.border = "1px solid rgb(196, 196, 196)";
  email.style.border = "1px solid rgb(196, 196, 196)"
  prenom.style.border = "1px solid rgb(196, 196, 196 )";
  nom.style.border = "1px solid rgb(196, 196, 196 )";
  groupe.style.border = "1px solid rgb(196, 196, 196)";
  bio.style.border = "1px solid rgb(196, 196, 196)";

  listContact.push(contact);
  console.log(listContact);
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
    contactListItems.appendChild(photo);
    let image=document.createElement('img')
    image.setAttribute('src',`${picture}`)
    image.style.width="200px"
    image.style.height="200px"
    image.style.objectFit="cover"
    image.style.borderRadius="50%"   
    photo.appendChild(image)
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
    pGroupe.innerHTML = ` ${element.groupe}`;

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
    pPhone.innerHTML=`${element.telephone}   ${element.email}`
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
