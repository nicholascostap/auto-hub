const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

async function cadastroUsuario(){  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpf_cnpj = document.getElementById('cpf_cnpj').value;
    let birthday = document.getElementById('birthday').value;
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "name": name,
            "email": email,
            "user_type_id": 1,
            "password": password,
            "cpf_cnpj": cpf_cnpj,
            "terms": 1,
            "birthday": birthday    
        }),
        headers: {
            'Content-Type': 'application/json'
        }        
    });
    
    let data = await response.json();
    let errors = data.data.errors
    if (response.status == 200){
        document.getElementById("status_email").innerText = '';
        document.getElementById("status_password").innerText = '';
        document.getElementById("status_cpf_cnpj").innerText = '';
        document.getElementById("status_birthday").innerText = '';
        cadastro = data.data;
        document.getElementById("status_birthday").innerText = 'Cadastro Realizado \n' + cadastro;
        setTimeout(function() {
            window.location.href = "login.html";
        }, 5000);
    }else {
        document.getElementById("status_email").innerText = '';
        document.getElementById("status_password").innerText = '';
        document.getElementById("status_cpf_cnpj").innerText = '';
        document.getElementById("status_birthday").innerText = '';
        for(i in errors){
            console.log(i)
            if (i == 'email'){
                let  error = errors.email;
                document.getElementById("status_email").innerText = error + '!'; 
            }
            else if(i == 'password'){
                let  error = errors.password;
                document.getElementById("status_password").innerText = error + '!';
            }
            else if(i == 'cpf_cnpj'){
                let error = errors.cpf_cnpj;
                document.getElementById("status_cpf_cnpj").innerText = error + '!';
            }
            else if(i == 'birthday'){
                let error = errors.birthday;
                document.getElementById("status_birthday").innerText = error + '!';
            }
        }
    }
}