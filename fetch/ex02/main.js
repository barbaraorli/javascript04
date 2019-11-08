const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")
//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", ()=>{
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            logradouroInput.value = json.logradouro
            complementoInput.value = json.complemento
            bairroInput.value = json.bairro 
            localidadeInput.value = json.localidade 
            ufInput.value = json.uf 
        })
    }
})

// preencheInputs = objeto => {

// }