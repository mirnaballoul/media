
let logIn = document.getElementById('login');

logIn.addEventListener('click',  logInUser);

function logInUser() {
    let e=document.getElementById("email").value;
    let p=document.getElementById("password").value;
    fetch('http://localhost:3000/users').then(response => response.json()).then(data => {

        for(let i =0 ; i < data.length; ++i)
        {
            if(data[i].email==e && data[i].passowrd==p){
                    window.location.assign('file:///C:/Users/Shaam/Desktop/JSON/social/posts.html?');
            }
        }
        let err= document.getElementById("password_error").innerText = "ERROR IN PASSWORD";
        
    })
}