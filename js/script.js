const form = document.getElementById('form');
const email = document.getElementById('email');


 const submit = document.getElementById('submit');

 submit.addEventListener('click',(e)=> {
     e.preventDefault();

     flag();
 })

 
 function flag() {
     let emailValue = email.value;
     const message = document.getElementById('message');
     if(emailValue === ""){
         form.classList.add('flag');
         message.innerText = 'Please enter your email';
     } else {
         form.classList.remove('flag');
     }

     if(!emailValue.match('@')){
         form.classList.add('flag');
         message.innerText = "Please provide a valid email";
     }
 }
