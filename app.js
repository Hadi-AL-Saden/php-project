'use strict';
let firstName=document.getElementById('fname');
let firstNameError=document.getElementById('fname-error');
 let uesrName=document.getElementById('Uname');
let UesrNameError=document.getElementById('Uname-error');
let Email=document.getElementById('email');
let EmailError= document.getElementById('email-error');
let quizoptions=document.getElementById("quizoptions");
let regFormx=document.getElementById('regs_form');

/* password*/ 
let myInput = document.getElementById("password");
let PasswordError =document.getElementById('password-error');
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let info=[];

function LocalStorageFrom(){
let array=JSON.stringify(info);
localStorage.setItem('formData',array);
} 

function regForm(fname,Uname,email,password,spassword,quizoptions){
this.fname=fname;
this.FullName=fullName(this.fname);
this.Uname=Uname;
this.email=email;
this.correctemail=correctEmail(this.email);
this.quizoptions=quizoptions;
console.log(this.quizoptions);
this.password=password;
this.spassword=spassword;
this.correctPssword=check_pass(this.password,this.spassword);
info.push(this);
renderInfo();
LocalStorageFrom()
if(this.fname,this.Uname,this.email,this.quizoptions,this.password){
  info.push(this);
}

}

function fullName(fname){
    let x;
    let regex = /[a-zA-Z\s]+$/;
    if (regex.test(fname)){
        x = fname;
        return 'Correct'; 
    }
    else{
        return 'Invalivd Name';
    }
}



/*To check from the email */
function correctEmail(email){
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    )
    emailRegexp.test(email);
    let result ='your Email is Correct' ;
    return result;
  }

function check_pass(password,spassword) {
  if (password != spassword) {
    console.log(false); 
    PasswordError.style.color="red";
    return PasswordError.innerText ='your password dose not match !' ;
   
       
    } else {
      console.log(true); 
      PasswordError.style.color="green";
      return PasswordError.innerText  = 'your password match';      
    }
}

myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }



regFormx.addEventListener('submit', handelSubmit);
function handelSubmit(event){
    event.preventDefault();
    let fname=event.target.fname.value;
    let Uname=event.target.Uname.value;
    let email=event.target.email.value;
    let quizoptions=event.target.quizoptions.value;
    console.log(quizoptions);
    let password=event.target.password.value;
    let spassword=event.target.spassword.value;
    new regForm(fname,Uname,email,password,spassword,quizoptions); 
    document.getElementById("link").href="../Login/indexLogin.html" ;
}
handelSubmit();

function renderInfo(){
  let arr= info.map(function(i,index){
    firstName.innerHTML=info[index].fname;
    UesrNameError.innerHTML=info[index].Uname;
    EmailError.innerHTML=info[index].correctemail;
    Email.innerHTML=info[index].email;
    PasswordError.innerHTML=info[index].correctPssword;

});
}