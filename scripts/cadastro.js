const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

async function cadastroUsuario(){  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpf_cnpj = document.getElementById('cpf_cnpj').value;
    let birthday = document.getElementById('birthday').value;       
    let resposta = await fetch(url, {
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
    
    let data = await resposta.json();

    alert(JSON.stringify(data));
}