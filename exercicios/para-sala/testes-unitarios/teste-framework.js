/*const blackFriday = (percentualDesconto, valorNormal) => {
    const valorDesconto = percentualDesconto/100*valorNormal
    return valorNormal - valorDesconto
}*/

const teste = (titulo, esperado, retornado) => {
    if (esperado === retornado){
        console.log(`${titulo} deu certo :)`)
    }
    else {
        console.log(`${titulo} deu erro :(`)
    }
};

teste ("somaCompras", 10, somaCompras(7, 8)); //o primeiro parenteses = titulo, esperado, retornado; e o segundo parenteses = livroSelecionado, taxaEntrega

teste ("estoque", 25, estoque(30, 5));

//teste ("Black Friday", 30, blackFriday(70, 100));

//console.log(blackFriday(70, 100))