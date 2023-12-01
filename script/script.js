let prenom = document.querySelector('#prenom');
let nom = document.querySelector('#nom');
let tel = document.querySelector('#tel');
let groupe = document.querySelector('#groupe');
let email = document.querySelector('#email')
let bio = document.querySelector('#bio');
let file= document.querySelector('#file');
let btn_creer = document.querySelector('.create')
let btn_reinit = document.querySelector('.reinit')


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

