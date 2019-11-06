class Card {
    constructor(receita) {
        this.receita = receita
    }

    render() {
        const card = `
            <div class="card">
            <img class="imagem" src='${this.receita.imagem}'/>
            <h2> ${this.receita.titulo}</h2>
            <p class="ingredientes"> ${this.receita.ingredientes}</p>
            </div>
            `
        document.querySelector('.cards').insertAdjacentHTML('beforeend', card)

    }
}



// render(){
//     const{
//         imagem,
//         titulo,
//         ingredientes
//     } = this.receita
//     return `<div class="card">
//     <img class="imagem" src="${imagem}"/>
//     <h2>${titulo}</h2>
//     <p class="ingredientes">${ingredientes}</p>
//     </div>`
// }

// document.querySelector('.cards').innerHTML = resultados.map(receita => {
//     return new Card(receita).render()
// }).join("")

// console.log(resultados.map(receita =>{
//     return new Card(receita).render()
// }).join(""))
