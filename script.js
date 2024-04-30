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
/*============Modal do formulário========= */

function abrirModalform() {
    document.querySelector('.modal-form').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function fecharModalform() {
    document.querySelector('.modal-form').style.display = 'none';
    document.body.style.overflow = '';
}
/*============================= */

/*================Validações do formulário=================*/
const form= document.querySelector("#form")
const nameInput = document.querySelector("#name")
const numberInput = document.querySelector("#number")
const emailInput = document.querySelector("#email")
const messageTextarea = document.querySelector("#mensagem")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    if(numberInput.value === ""){
        alert("Por favor, preencha o seu número de celular");
        return;
    }
    if(!validarNumeroCelular(numberInput.value)){
        alert("Por favor, digite um número de celular válido");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email");
        return;
    }

    if (messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem");
        return;
    }
    form.submit();

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("mensagem").value = "";

        alert("O Forumlário foi enviado com sucesso!")
});
    

function validarNumeroCelular(number) {
    const NumberRegex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
    return NumberRegex.test(number);
}




function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}


/*=========================================*/
function addToShoppingCart(){
    Swal.fire({
        title: "Produto adicionado ao carrinho",
        icon: "success"
      });
}

function calcTotalPrice(){
    let input = document.getElementById('qtd-vinho').value
    let total = document.getElementById('total')

    if (input <= 0){
        total.innerText = 'R$ 00.00'
    } else {
        total.innerHTML = `R$ ${(input * 108).toFixed(2)}`
    }
}
