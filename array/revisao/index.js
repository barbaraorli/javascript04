const comidas  =['Lasanha', 'Batata', 'Bacon']

console.log(comidas[2])

comidas.forEach((comida, posicao) =>{
    console.log(`Na posição ${posicao} temos a comida: ${comida}`);
})

//concat - faz copia do array e add o elemento que é passado como propriedade

let outrasComidas = comidas.concat('Jiló')
console.log(`comidas`, comidas);
console.log(`outras comidas`, outrasComidas);

//join - cria uma string e utiliza o argumento como separador
let stringDoArray = comidas.join(`, `)
console.log(stringDoArray);

//shift - arranca o primeiro valor e retorna o valor retirado
//modifica permanentemente o array
console.log(comidas.shift())
console.log(comidas)

//pop - retira o ultimo valor e retorna o que ele deletou
//modifica permanentemente o array
console.log(comidas.pop())
console.log(comidas);

//unshift - adiciona um item na primeira posição do array
//modifica permanentemente o array
comidas.unshift('Macarrão')
console.log(comidas);

//push - adiciona um item na ultima posição do array
//modifica permanentemente o array
comidas.push('Strogonoff')
console.log(comidas);

//reverse - inverte o array
comidas.reverse()
console.log(comidas);

//slice - faz uma copia simples delimitando inicio e fim 
//slice (comeco, final)

let cortarAlimentos = comidas.slice(1)
console.log(cortarAlimentos);
console.log(comidas);

//splice - pode remover e adicionar utilizando posição, indice de apagar
comidas.splice(1, 0, 'Alface')
console.log(comidas);

//map, indexOf, lastIndexOf, filter, reduce 



