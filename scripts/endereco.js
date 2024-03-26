const url_cadastro = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address';

// function get_local_storage(){
//     return window.localStorage.getItem('access_token');
// }

async function cadastroEndereco(){
    //let access_token = get_local_storage();
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
    if (response.status == 200){
        console.log(data);
        document.getElementById("status_cadastro").innerText = 'Cadastro de Endereço Realizado com Sucesso!';
     }else {
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
console.log(data);
}

const url_list = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address'
async function listarEndereco(){
    //let access_token = get_local_storage();
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzExNDA0NDQ5LCJuYmYiOjE3MTE0MDQ0NDksImp0aSI6ImhkTWRBZUJKTlZwSWxaWUsiLCJzdWIiOiIzMTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.Ntpier92boCSJQ5pCqBqSHs5n3tffSCHQ8w31OikyRU';
    let response = await fetch(url_list, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
            'Cookie' : 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
        }        
    });
    let datalist = await response.json()
    
    for (i in datalist.data){
        let values = datalist.data[i]
        
        let userAddress = {
            title : values.title,
            cep : values.cep,
            address : values.address,
            number : values.number,
            complement : values.complement
        }

        window.localStorage.setItem('userAddress', JSON.stringify(userAddress))
    }
}

listarEndereco()

const url_delete = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address'
async function deletarEndereco(){
    // let access_token = get_local_storage();
    let response = await fetch(url_delete, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzExMzE3ODQ4LCJuYmYiOjE3MTEzMTc4NDgsImp0aSI6IlFZd3Zhc0h6UzNQUmxGUDgiLCJzdWIiOiIzMTYiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.QpdWDucTaoY7uUTNHYw266vFypj8yQM3c4GdnYy2cUU',
            'Cookie' : 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
        }        
    });
    let datadelete = await response.json()
    console.log(JSON.stringify(datadelete))
}

async function adicionarEnderecoNaPagina(){
    let userAddress = JSON.parse(window.localStorage.getItem('userAddress'))
    let addressComplete = document.getElementById('endereco-completo')
    addressComplete.innerHTML = `Endereço: ${userAddress.address}, ${userAddress.number}, ${userAddress.complement}`
}

// deletarEndereco()