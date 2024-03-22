const url = "https://api-go-wash-efc9c9582687.herokuapp.com/api/login"

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
            'Content-Type': 'application/json'
        }
    });

    let data = await response.json();

    alert(JSON.stringify(data))
}