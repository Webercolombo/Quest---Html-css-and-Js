const botaoEnviar = document.getElementsByClassName('enviar');
const camposInput = document.querySelectorAll('.input');
const textoObrigatorio = document.querySelectorAll('.aviso');


function verificarCampos(){
    const camposInput = document.querySelectorAll('.input');

    camposInput.forEach((input, index) => {
        if(input.value !== ""){
            input.style.borderColor = 'green';
            textoObrigatorio[index].setAttribute("hidden", "hidden");

            
            } else {
                input.style.borderColor = 'red';
                textoObrigatorio[index].removeAttribute("hidden");
            }
    });
};
    


