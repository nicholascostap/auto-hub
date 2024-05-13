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

    if (response.status == 200) {
        
        document.getElementById("status").innerText = '';
        window.localStorage.clear();

        let accessToken = data.access_token
        document.getElementById("status").innerText = 'Login Realizado com Sucesso!';
        window.localStorage.setItem("access_token", accessToken)

        let userData = data.user;
        
        let values = {
            name: userData.name,
            email: userData.email,
            cpfCnpj : userData.cpf_cnpj,
            birthDate : userData.birthday
        }
    
        window.localStorage.setItem("userData", JSON.stringify(values));
        window.location.href = '../view/endereco.html'
        
    }
    else {
        let errorMessage = data.data.errors;
        document.getElementById("status").innerText = errorMessage + '!';
    }
}