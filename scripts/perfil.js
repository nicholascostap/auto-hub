document.addEventListener('DOMContentLoaded', function() {
    fillUserData();
});

async function fillUserData(){
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData);
    console.log(userData)
    

     let nome = userData.name;
     let email = userData.email;
     let cpfCnpj = userData.cpfCnpj;
     let birthDate = userData.birthDate;

    document.querySelector('.nome').innerText += ' ' + nome;
    document.querySelector('.email').innerText += ' ' + email;
    document.querySelector('.cpf-cnpj').innerText += ' ' + cpfCnpj;
    document.querySelector('.birth-date').innerText += ' ' + birthDate;
}


const url_list = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/auth/address'
 async function listarEndereco(){
    let access_token = window.localStorage.getItem('access_token');
     let response = await fetch(url_list, {
         method: "GET",
         headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + access_token,
             'Cookie' : 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
         }        
     });
     let datalist = await response.json()
    //  console.log(datalist);
    const sectionListAddress = document.querySelector('.section_list_address');
    while (sectionListAddress.firstChild) {
        sectionListAddress.removeChild(sectionListAddress.firstChild);
    }
     for (i of datalist.data) {
        let title = i.title;
        let cep = i.cep;
        let address = i.address;
        let number = i.number;
        let complement = i.complement;
        console.log(title, cep, address, number, complement);
        console.log("#####################################")

        // CRIANDO DIV
        let enderecoDiv = document.createElement('div');
        enderecoDiv.classList.add('endereco_lista');
        let titlePara = document.createElement('p');
        titlePara.textContent = 'Título: ' + i.title;

        let cepPara = document.createElement('p');
        cepPara.textContent = 'CEP: ' + i.cep;

        let addressPara = document.createElement('p');
        addressPara.textContent = 'Endereço: ' + i.address;

        let numberPara = document.createElement('p');
        numberPara.textContent = 'Número: ' + i.number;

        let complementPara = document.createElement('p');
        complementPara.textContent = 'Complemento: ' + i.complement;

    // Adiciona os elementos de texto à div de endereço
        enderecoDiv.appendChild(titlePara);
        enderecoDiv.appendChild(cepPara);
        enderecoDiv.appendChild(addressPara);
        enderecoDiv.appendChild(numberPara);
        enderecoDiv.appendChild(complementPara);

        // Adiciona a div de endereço à section_list_address
        document.querySelector('.section_list_address').appendChild(enderecoDiv);
     }
}