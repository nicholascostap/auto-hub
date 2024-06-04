const url_cadastro = 'https://go-wash-api.onrender.com/api/auth/address';

function get_local_storage(){
    return window.localStorage.getItem('access_token');
}

async function cadastroEndereco(){
    let access_token = get_local_storage();
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value;
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;
    let response = await fetch(url_cadastro, {
        method: "POST",
        body: JSON.stringify({
            "title": title,
            "cep": cep,
            "address": address,
            "number": number,
            "complement": complement
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token,
            'Cookie' : 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
        }
    });
    let data = await response.json()
    let errors = data.data.errors
    if (response.status == 200) {
        document.getElementById("status_title").innerText = '';
        document.getElementById("status_cep").innerText = '';
        document.getElementById("status_address").innerText = '';
        document.getElementById("status_number").innerText = '';
        console.log(data);
        document.getElementById("status_cadastro").innerText = 'Cadastro de Endereço Realizado com Sucesso!';
        setTimeout(function() {
            window.location.href = '../view/perfil.html';
        }, 5000);
    }
    else {
        for(i in errors){
            console.log(i)
            if (i == 'title'){
                let  error = errors.title;
                document.getElementById("status_title").innerText = error + '!'; 
            }
            else if(i == 'cep'){
                let  error = errors.cep;
                document.getElementById("status_cep").innerText = error + '!';
            }
            else if(i == 'address'){
                let error = errors.endereco;
                document.getElementById("status_address").innerText = error + '!';
            }
            else if(i == 'number'){
                let error = errors.numero;
                document.getElementById("status_number").innerText = error + '!';
        }
    }
    }
}