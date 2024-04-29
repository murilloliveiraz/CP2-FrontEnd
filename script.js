/*====Modal tela inicial de maioridade====*/
window.onload = function() {
    exibirModal();
};

function exibirModal() {
    document.querySelector('.sobreposicao').style.display = 'block';
    document.querySelector('.modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    document.querySelector('.sobreposicao').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
    document.body.style.overflow = '';
}

function redirectTo(){
    window.location.href = "https://www.google.com";
}
/*========================================*/
/*====Modal do formulário==== */

function abrirModalform() {
    document.querySelector('.modal-form').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function fecharModalform() {
    document.querySelector('.modal-form').style.display = 'none';
    document.body.style.overflow = '';
}
/*============================= */

/*====Validações do formulário====*/
