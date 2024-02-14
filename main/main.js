console.log('username = myusername');
console.log('password = mypassword');

window.onload = ()=>{
    this.sessionStorage.setItem("username", "myusername");/*store the correct username and password*/
    this.sessionStorage.setItem("password", "mypassword");
}
let input = document.getElementsByTagName('input');
let login = document.getElementsByid('logIn');
let form  = document.querySelector('form');

function loginBtn() {
    if((input[0].value != "") && (input[1].value != ""))/*If the values of the input don't equal nothing*/
    {
       if((input[0].value == sessionStorage.getItem("username")) && (input[1].value == sessionStorage.getItem("password"))){ 
        alert("mean't to take you to the home screen");
        homeHtml();
        }//if the values do not equal nothing and the password and username are correct then alert correct*/
        
        else{
            if ((input[0].value != sessionStorage.getItem("username")))
             {   alert("Incorrect username. Please try again.")
                 setTimeout(()=>{
                 input[0].nextElementSibling.textContent == "";
                },2000);
            }
     
            if ((input[1].value != sessionStorage.getItem("password")))
                { 
                 alert("Incorrect password. Please try again.")
                 setTimeout(()=>{
                 input[1].nextElementSibling.textContent == "";
                }, 2000);
            }

         }/*if the values don't equal nothing but the password and username are inncorrect*/
    }

    else{
        if(input[0].value =="")/*if the username input is nothing*/
        {
            alert("Please enter your username")
            setTimeout(()=>{
                 input[0].nextElementSibling.textContent == "";
            }, 2000);
        }

        if(input[1].value =="")/*if the password input is nothing*/
        {
            alert("Please enter your password")
            setTimeout(()=>{
                 input[1].nextElementSibling.textContent == "";
            }, 2000);
        }
    }
}
function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}
  
function overlayOff() {
    document.getElementById("overlay").style.display = "none"; 
}
function loginHtml() {
   setTimeout(()=>{ window.location.href="login.html"},200);
}

function contactHtml() {
    setTimeout(()=>{ window.location.href="contact.html"},200);
}
function homeHtml() {
    setTimeout(()=>{ window.location.href="main.html"},200);
}
function infoHtml() {
    setTimeout(()=>{ window.location.href="info.html"},200);
}
