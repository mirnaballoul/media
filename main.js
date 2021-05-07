
let logIn = document.getElementById('login');

logIn.addEventListener('click',  logInUser);

function logInUser() {
    let e=document.getElementById("email").value;
    let p=document.getElementById("password").value;
    fetch('http://localhost:3000/users').then(response => response.json()).then(async data => {

        for(let i =0 ; i < data.length; ++i)
        {
            if(data[i].email==e && data[i].passowrd==p){
                const res = await axios.put('http://localhost:3000/active/1' , {
                        passowrd:data[i].password,
                        name :data[i].name,
                        image:data[i].image,
                        email: data[i].email
                    }).then(() => {

                        window.location.assign('./posts.html');
                    })
            }
        }
        let err= document.getElementById("password_error").innerText = "ERROR IN PASSWORD";
        
    })
}