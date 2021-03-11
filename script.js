//alert("Helo Word");
//prompt("Digite seu nome:");
//confirm("Você torce pro lakers?");
function verificarAposentadoria(usuario){
    if (usuario.idade < 50){
        return false
    }
    else{
        return true
    }

}

let usuario = {
    nome: "Luffy",
    idade: '25',
    eJogador: true
};
console.log(verificarAposentadoria(usuario));
