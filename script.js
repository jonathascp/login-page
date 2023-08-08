const btnEnviar = document.querySelector('.enviar');
const senha_icone = document.getElementById('icone_senha');
const senha = document.getElementById('isenha');


btnEnviar.addEventListener('click', () => alert('Login efetuado com sucesso.'));
senha_icone.addEventListener('click',showAndHide);
function showAndHide()
{
    if(senha.type == 'password')
    {
        senha.setAttribute('type','text');
        icone_senha.setAttribute('src','imagens/hide.png');
    }
    else
    {
        senha.setAttribute('type','password');
        icone_senha.setAttribute('src','imagens/show.png');
    }
}