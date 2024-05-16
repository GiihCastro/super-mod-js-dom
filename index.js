
function Login() {
  
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (!user || !password) {
        document.getElementById('resultado').innerText = "Por favor, insira seu usuário e senha.";
        return;
    } else if (user === 'GiihCastro' && password === 'giih123') {
        document.getElementById('resultado').innerText = "Login efetuado, boas vinhas GiihCastro!";
        return;
    } else {
        document.getElementById('resultado').innerText = "Usuário ou senha incorretos!";
        return;
    }
}
