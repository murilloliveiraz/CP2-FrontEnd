/*====Modal tela inicial de maioridade====*/
window.onload = function() {
    exibirModal();
};

function exibirModal() {
    Swal.fire({
        title: 'Você possui mais de 18 anos?',
        text: 'É necessário ser maior de idade para prosseguir.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#008000",
        cancelButtonColor: "#d33",
        confirmButtonText: 'Sim, continuar',
        cancelButtonText: 'Não, sair',
        reverseButtons: true
      }).then((result) => {
        if(result.dismiss){
            redirectTo();
        }
      });
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


function addToShoppingCart(){
    Swal.fire({
        title: "Produto adicionado ao carrinho",
        icon: "success"
      });
}

