window.addEventListener("load", function () {

    cadastrar = document.getElementById("cadastrarBtn");
    cadastrar.addEventListener("click", cadastrarUsuario);

    function cadastrarUsuario() {
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        var ConfirmPass = document.getElementById("confirmPass").value;

        if (user == "" || password == "" || ConfirmPass == "") {
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");
        }
        else {
            if (password == ConfirmPass) {
                var newUser = { nome: user, senha: password };
                var vetUser = localStorage.getItem("vetUser");
                var existe = false;
                if (!vetUser) {
                    var vet = [];
                    vet.push(newUser);
                    localStorage.setItem("vetUser", JSON.stringify(vet));
                }
                else {
                    vet = JSON.parse(vetUser);
                    for (i = 0; i < vet.length; i++) {
                        if (vet[i].nome == newUser.nome) {
                            alertWifi("Usuário já existe!", false, 0, "", 30, "");
                            existe = true;
                            break;
                        }
                    }
                    if (!existe) {
                        vet.push(newUser);
                        localStorage.setItem('vetUser', JSON.stringify(vet));
                    }
                }
                if(!existe) alertWifi("Cadastrado com sucesso!", false, 0, "", 30, "");
            }
        }
    }
});