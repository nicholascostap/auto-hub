async function fillUserAddress(){
    let userAddress = window.localStorage.getItem('userAddress');
    userAddress = JSON.parse(userAddress);
    
    let addressComplete = document.getElementById('endereco-completo');

    for (i in userAddress){
        let values = userAddress[i];
        
        let userAddress = {
            title : values.title,
            cep : values.cep,
            address : values.address,
            number : values.number,
            complement : values.complement
        }
        addressComplete.innerText += `${userAddress.address}, ${userAddress.number} - ${userAddress.complement}`;
    }
}