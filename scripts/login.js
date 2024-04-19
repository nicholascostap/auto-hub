const url = "https://go-wash-api.onrender.com/api/login"

async function loginUsuario(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password,
            "user_type_id": 1

        }),
        headers: {
            'Content-Type': 'application/json',
            'Cookie' : 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
        }
    });

    let data = await response.json()

    if (response.status == 200){
        document.getElementById("status").innerText = '';
        window.localStorage.clear();
        console.log(data);
        let access_token = data.access_token
        document.getElementById("status").innerText = 'Login Realizado com Sucesso!';
        window.localStorage.setItem("access_token", access_token)
        let userData = data.user;
        console.log(userData)
        let values = {
            name: userData.name,
            email: userData.email,
            cpfCnpj : userData.cpf_cnpj,
            birthDate : userData.birthday
        }
    
        window.localStorage.setItem("userData", JSON.stringify(values));
    }else {
        let error_message = data.data.errors;
        document.getElementById("status").innerText = error_message + '!';
    }
}