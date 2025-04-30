# Jogo Par ou Ímpar

Um jogo interativo onde os jogadores precisam identificar números pares ao clicar neles antes que o tempo acabe. Projeto desenvolvido em JavaScript puro com interface HTML/CSS.

## 📋 Descrição

O "Par ou Ímpar?" é um jogo de reflexos onde números aleatórios de 1 a 100 aparecem na tela e o jogador deve clicar apenas nos números pares. O jogo possui três níveis de dificuldade que afetam o tempo disponível e a velocidade com que os números mudam.

### Características:

- Sistema de cadastro e login de usuários
- Três níveis de dificuldade (Fácil, Médio e Difícil)
- Controles de iniciar, pausar e parar
- Contadores de acertos, erros e porcentagem de acertos
- Feedback visual através de cores (verde para acertos, vermelho para erros)
- Cronômetro regressivo

## 🚀 Como Usar

1. Clone este repositório:
```bash
git clone https://github.com/seuusuario/par-ou-impar.git
cd par-ou-impar
```

2. Abra o arquivo `index.html` em seu navegador web

3. Cadastre-se ou faça login usando o usuário e senha padrão:
   - Usuário: Gabriel
   - Senha: 123

4. Selecione o nível de dificuldade e clique no botão "Play" para iniciar

5. Clique apenas nos números pares que aparecem na tela

## 🎮 Instruções do Jogo

### Níveis de Dificuldade:
- **Fácil**: 1 minuto e 45 segundos, números mudam a cada 1 segundo
- **Médio**: 1 minuto e 15 segundos, números mudam a cada 0.75 segundos
- **Difícil**: 30 segundos, números mudam a cada 0.5 segundos

### Controles:
- **Play**: Inicia o jogo
- **Pause**: Pausa o jogo
- **Stop**: Para o jogo e reinicia os contadores
- **Voltar**: Retorna à tela de login

## 📁 Estrutura do Projeto

```
par-ou-impar/
├── css/
│   ├── style.css          # Estilo para as telas de login e cadastro
│   ├── gameStyle.css      # Estilo para a tela do jogo
│   └── jAlertWifi.css     # Estilo para os alertas personalizados
├── js/
│   ├── index.js           # Script da tela de login
│   ├── cadastrar.js       # Script da tela de cadastro
│   ├── gameScript.js      # Script principal do jogo
│   └── jAlertWifi.js      # Biblioteca de alertas personalizados
├── img/
│   ├── playBtn.png        # Botão de iniciar
│   ├── pauseBtn.png       # Botão de pausar
│   ├── pararBtn.png       # Botão de parar
│   └── voltarBtn.png      # Botão de voltar
├── index.html             # Página de login
├── cadastrar.html         # Página de cadastro
├── game.html              # Página principal do jogo
└── README.md              # Documentação do projeto
```

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage para persistência de dados dos usuários
- Biblioteca jAlertWifi para notificações personalizadas

## 🧠 Funcionamento

1. **Sistema de Login e Cadastro**:
   - Os dados dos usuários são armazenados no LocalStorage do navegador
   - Verificação de usuários já existentes durante o cadastro
   - Validação de campos vazios e senhas correspondentes

2. **Mecânica do Jogo**:
   - Números são gerados aleatoriamente de 1 a 100
   - O jogador deve clicar apenas nos números pares
   - O sistema registra acertos, erros e calcula a porcentagem de acerto
   - Feedback visual com cores: verde para acertos, vermelho para erros
   - O jogo termina quando o tempo se esgota

## 📝 Notas

- Este jogo foi desenvolvido como um projeto educacional para praticar JavaScript, HTML e CSS
- O jogo utiliza localStorage para armazenar os dados dos usuários, então eles são mantidos apenas no navegador em que o cadastro foi realizado
- A biblioteca jAlertWifi é utilizada para exibir notificações personalizadas ao usuário
