localStorage.setItem('key', 'nenhum')
const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const verificar = document.getElementById('verificarEstado');

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





function mensagemSaibaMais () {
    return alert(`🗿`)
}