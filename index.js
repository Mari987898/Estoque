const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Qual o seu estoque? ", (input) =>{
estoque = parseInt(input)

if(estoque>10){

    console.log('estoque não precisa de reposição')

}else{

    console.log('Abastecimento')

}
rl.close()
});
