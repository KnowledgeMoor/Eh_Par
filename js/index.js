window.addEventListener("load", function () {
   document.getElementById("entrarBtn").addEventListener("click", verificarLogin);

    function verificarLogin() {
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        var vetUsers;
        if(user == "" || password == ""){
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");
        }
        else {
            vetUsers = localStorage.getItem("vetUser");

            if(!vetUsers){
                alertWifi("Ainda não há nenhum usuário cadastrado", false, 0, "", 30, "");
            }
            else {
                vetUsers = JSON.parse(vetUsers);
                var achou = false;
                for(i = 0; i < vetUsers.length; i++){
                    if(vetUsers[i].nome == user && vetUsers[i].senha == password){
                        achou = true; 
                        break;
                    }
                }
                if(achou) window.open('game.html', '_self');
                else alertWifi("Usario não encontrado", false, 0, "", 30, "");

                
            }
        }
    
    
    
    
    
    }







});