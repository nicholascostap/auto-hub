const url = "https://api-go-wash-efc9c9582687.herokuapp.com/api/login"

async function loginUsuario(){
    let email = "henriquetgil123@gmail.com";
    let password = "123456";
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
        window.localStorage.clear();
        console.log(data);
        let access_token = data.access_token
        document.getElementById("status").innerText = 'Login Realizado com Sucesso!';
        window.localStorage.setItem("access_token", access_token)

        let userData = data.user;
        
        let values = {
            name: userData.name,
            email: userData.email,
            cpfCnpj : userData.cpf_cnpj,
            birthDate : userData.birthdate    
        }
    
        window.localStorage.setItem("userData", JSON.stringify(values));
        
    }else {
        let error_message = data.data.errors;
        document.getElementById("status").innerText = error_message + '!';
    }
}