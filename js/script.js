localStorage.setItem('key', 'nenhum')
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const verificar = document.getElementById('verificarEstado');
const dueloNormal = document.getElementById('dueloNormal')
const opcao = [
    {
        tipo: "papel"
    },
    {
        tipo: "pedra"
    },
    {
        tipo: "tesoura"
    },
]

pedra.addEventListener('click', function(){
    let valorSalvo = localStorage.getItem('key')
    if ( valorSalvo === 'pedra' ) {
        alert(`O valor selecionado já é pedra`)
    } else {
        let confirmacao = confirm(`Você tem certeza que deseja selecionar o valor pedra?`)
        if ( confirmacao === true ) {
            localStorage.setItem('key', 'pedra')
            alert(`O valor selecionado agora é igual a pedra! Clique no botão DUELO para enfrentar o bot`)
        } else {
            return alert(`O pedido foi encerrado`)
        }
    }
})

papel.addEventListener('click', function(){
    let valorSalvo = localStorage.getItem('key')
    if ( valorSalvo === 'papel' ) {
        alert(`O valor selecionado já é papel`)
    } else {
        let confirmacao = confirm(`Você tem certeza que deseja selecionar o valor papel?`)
        if ( confirmacao === true ) {
            localStorage.setItem('key', 'papel')
            alert(`O valor selecionado agora é igual a papel! Clique no botão DUELO para enfrentar o bot`)
        } else {
            return alert(`O pedido foi encerrado`)
        }
    }
})

tesoura.addEventListener('click', function(){
    let valorSalvo = localStorage.getItem('key')
    if ( valorSalvo === 'tesoura' ) {
        alert(`O valor selecionado já é tesoura`)
    } else {
        let confirmacao = confirm(`Você tem certeza que deseja selecionar o valor tesoura?`)
        if ( confirmacao === true ) {
            localStorage.setItem('key', 'tesoura')
            alert(`O valor selecionado agora é igual a tesoura! Clique no botão DUELO para enfrentar o bot`)
        } else {
            return alert(`O pedido foi encerrado`)
        }
    }
})

verificar.addEventListener('click', function () {
    let valorSalvo = localStorage.getItem('key');
    if ( valorSalvo === 'nenhum' ) {
        alert(`Você não selecionou nenhum valor!`)
    } else {
        return alert(`O valor selecionado é ${valorSalvo}`);
    }
})

function verificarResultados( parametro01, parametro02) {
    let valorSalvo = localStorage.getItem('key');
    if ( parametro01 === parametro02 ) {
        alert(`O resultado é empate! Ambos escolheram ${valorSalvo}`)
    } else if ( parametro01 === 'pedra' && parametro02 === 'tesoura' ) {
        alert(`Você venceu!`)
    } else if ( parametro01 === 'tesoura' && parametro02 === 'papel' ) {
        alert(`Você venceu!`)
    } else if ( parametro01 === 'papel' && parametro02 === 'pedra' ) {
        alert(`Você venceu!`)
    } else if ( parametro02 === 'pedra' && parametro01 === 'tesoura' ) {
        alert(`Você perdeu!`)
    } else if ( parametro02 === 'tesoura' && parametro01 === 'papel' ) {
        alert(`Você perdeu!`)
    } else if ( parametro02 === 'papel' && parametro01 === 'pedra' ) {
        alert(`Você perdeu!`)
    } 
}

dueloNormal.addEventListener('click', function(){
    let valorSalvo = localStorage.getItem('key');
    if ( valorSalvo === 'nenhum' ) {
        alert('Não existe nenhum valor selecionado');
    }
    const numeroAleatorio = parseInt(Math.random()*3)
    const escolhaDoBot = opcao[numeroAleatorio].tipo
    console.log(escolhaDoBot)
    verificarResultados( valorSalvo, escolhaDoBot )
})

function mensagemSaibaMais () {
    return alert(`🗿`)
}