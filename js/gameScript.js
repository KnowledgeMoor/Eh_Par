window.addEventListener("load", function () {

    //Header IDs

    tempo = document.getElementById("tempo");
    iniciarBtn = document.getElementById("iniciarBtn");
    pausarBtn = document.getElementById("pausarBtn");
    pararBtn = document.getElementById("pararBtn");
    voltarBtn = document.getElementById("voltarBtn");
    selectDificulty = document.getElementById("dificulty");
    tempo.innerHTML = "00:00";
    var selectedOption = "Selecione";
    var timerSegundos;
    var timerVelocidade;
    var enablePlay = true;
    var enablePause = false;
    var enableParar = false;
    modificarTamanho(1, true);
    modificarTamanho(2, false);
    modificarTamanho(3, false);

    //Main IDs

    randomNumber = document.getElementById("randomNum");
    randomNumber.innerHTML = "__";
    var interval;
    var jogando;
    var numbersInterval;

    //Footer IDs

    acertos = document.getElementById("acertos");
    acertosPerCent = document.getElementById("acertosPerCent");
    erros = document.getElementById("erros");
    pares = document.getElementById("pares");
    acertos.innerHTML = "0";
    acertosPerCent.innerHTML = "0%";
    erros.innerHTML = "0";
    pares.innerHTML = "0";




    selectDificulty.addEventListener("change", function () {

        selectedOption = selectDificulty.options[selectDificulty.selectedIndex].value;
        switch (selectedOption) {
            case "Selecione":
                tempo.innerHTML = "00:00";
                break;

            case "Fácil":
                tempo.innerHTML = "01:45";
                timerSegundos = 105;
                timerVelocidade = 1000;
                break;

            case "Médio":
                tempo.innerHTML = "01:15";
                timerSegundos = 75;
                timerVelocidade = 750;
                break;

            case "Difícil":
                tempo.innerHTML = "00:30";
                timerSegundos = 30;
                timerVelocidade = 500;
                break;
        }
    });

    iniciarBtn.addEventListener("click", function () {
        if (enablePlay) {
            if (selectedOption == "Selecione") {
                alertWifi("Selecione o nivel de dificuldade para iniciar!", false, 0, "", 30, "");
            }
            else {
                interval = setInterval(jogoTempo, 1000);
                numbersInterval = setInterval(jogoNumeros, timerVelocidade);
                selectDificulty.disabled = true;
                modificarTamanho(1, false);
                modificarTamanho(2, true);
                modificarTamanho(3, true);
                enablePause = true;
                enableParar = true;
                enablePlay = false;
            }
        }
    });

    pausarBtn.addEventListener("click", function () {
        if (enablePause) {
            clearInterval(interval);
            clearInterval(numbersInterval);
            modificarTamanho(1, true);
            modificarTamanho(2, false);
            enablePlay = true;
            enablePause = false;
        }
    });


    pararBtn.addEventListener("click", function () {
        if (enableParar) {
            clearInterval(interval);
            clearInterval(numbersInterval);
            acertos.innerHTML = "0";
            acertosPerCent.innerHTML = "0%";
            erros.innerHTML = "0";
            pares.innerHTML = "0";
            randomNumber.innerHTML = "__";
            tempo.innerHTML = "00:00";
            selectedOption = "Selecione";
            selectDificulty.selectedIndex = 0;
            selectDificulty.disabled = false;
            modificarTamanho(1, true);
            modificarTamanho(2, false);
            modificarTamanho(3, false);
            enablePlay = true;
            enablePause = false;
            enableParar = false;
        }
    });


    voltarBtn.addEventListener("click", function () { window.open("index.html", "_self") });


    function jogoTempo() {
        randomNumber.style.color = "black";
        const minutos = Math.floor(timerSegundos / 60);
        const segundos = timerSegundos % 60;
        timerSegundos--;
        tempo.innerHTML = `${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`

        if (timerSegundos < 0) {
            clearInterval(interval);
            clearInterval(numbersInterval);
            alertWifi("Fim de jogo!", false, 0, "", 30, "");
            pararBtn.click();
        }

    }

    function jogoNumeros() {
        randomNumber.style.color = "black";
        randomNumber.innerHTML = Math.floor(Math.random() * 100 + 1);
        if (randomNumber.innerHTML % 2 == 0) {
            pares.innerHTML++;
        }
        alreadyClicked = false;
        clicked = false;
        randomNumber.addEventListener("click", function change() {
            if (clicked == false && !enablePlay) {
                if (randomNumber.innerHTML % 2 == 0) {
                    randomNumber.style.color = "green";
                    acertos.innerHTML = (parseInt(acertos.innerHTML) + 1);
                }
                else {
                    randomNumber.style.color = "red";
                    erros.innerHTML = (parseInt(erros.innerHTML) + 1);
                }
                clicked = true;
            }

        });

        if (acertos.innerHTML > 0) {
            acertosPerCent.innerHTML = ((acertos.innerHTML / pares.innerHTML) * 100).toFixed(1) + "%";
        }
        else {
            acertosPerCent.innerHTML = "0.0%"
        }

    }

    function modificarTamanho(x, y) {
        switch (x) {
            case 1:
                if (!y) {
                    iniciarBtn.style.transform = 'scale(0.8)';
                    iniciarBtn.style.opacity = '0.5';
                }
                else {
                    iniciarBtn.style.transform = 'scale(1)';
                    iniciarBtn.style.opacity = '1';
                }
                break;
            case 2:
                if (!y) {
                    pausarBtn.style.transform = 'scale(0.8)';
                    pausarBtn.style.opacity = '0.5';
                }
                else {
                    pausarBtn.style.transform = 'scale(1)';
                    pausarBtn.style.opacity = '1';
                }
                break;
            case 3:
                if (!y) {
                    pararBtn.style.transform = 'scale(0.8)';
                    pararBtn.style.opacity = '0.5';
                }
                else {
                    pararBtn.style.transform = 'scale(1)';
                    pararBtn.style.opacity = '1';
                }
                break;
        }
    }

});