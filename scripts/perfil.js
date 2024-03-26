async function fillUserData(){
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData);
    
    let name = document.getElementById('nome');
    let email = document.getElementById('email');
    let cpfCnpj = document.getElementById('cpf-cnpj');
    let birthDate = document.getElementById('birth-date');
    
    name.innerText = userData.name;
    email.innerText = userData.email;
    cpfCnpj.innerText = userData.cpfCnpj;
    birthDate.innerText = userData.birthDate;
}