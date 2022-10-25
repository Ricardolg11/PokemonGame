              //crinado objetos para coloca dentro de um array
              var carta1 = { nome:"Pikachu",
              imagem:"https://playzuando.com.br/wp-content/uploads/2020/10/pikachu-caps2020.jpg",
  atributos: {
  ataque: 10,
  defesa: 4,
  habilidade: 8
  }
};
var carta2 = { nome:"Bulbasauro", 
              imagem:"http://pm1.narvii.com/6483/3049347de060a5a0fd88579d26822374a2f42a1d_00.jpg",
  atributos: {
  ataque: 7,
  defesa: 8,
  habilidade: 6
  }
};
var carta3 = { nome:"Chamander",
              imagem:"https://uploads.spiritfanfiction.com/historias/capitulos/201612/o-filho-de-serena-e-ash-ketchum-7488859-271220161333.jpg",
  atributos: {
  ataque: 10,
  defesa: 6,
  habilidade: 6
  }
};

//array
    var listaCartas = [carta1,carta2,carta3];
    var cartaMaquina = 0;
    var cartaJogador = 0;

// Funcionalidade para o Botão 'Sortear carta'
function sortearCarta(){
    // Pega uma posição aleatoria da lista(Math.random) , transforma em inteiro(parserInt), e guarda na variável
    var numeroCartaMaquina = parseInt(Math.random() * 3) 
    // Pega o número guardado na variável, e indica a posição dentro da lista e atribui para cartaMaquina
    cartaMaquina = listaCartas[numeroCartaMaquina] // Maquina recebe carta

    let numeroCartaJogador = parseInt(Math.random() * 3)
    // Condição 'while'(enquanto) as cartas forem iquais, tera um novo sorteio até elas serem diferentes
    while (numeroCartaMaquina === numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = listaCartas[numeroCartaJogador] // Jogador recebe carta
    console.log(cartaJogador)
    console.log(cartaMaquina)
    // Quando clicado no botão 'Sortear', vai desabilitar ele e habilitar o botão 'Jogar' para clicar
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirCartaJogador() // Mostra a carta e atributos que o Jogador escolheu na Tela
}

// Função para o programa saber qual o atributo foi selecionado(checked) dentre os atributos possíveis
function escolherAtributo() {
  var radioAtributos = document.getElementsByName("atributos") // Guardando o atributo selecionado
    for (var i = 0; i < radioAtributos.length; i++) {
        // Condição para falar que é para consultar o atributo selecionado(checked) e retornar seu valor
        if (radioAtributos[i].checked == true){ // Verificando qual foi aplicado
            return radioAtributos[i].value 
        } else {

        }
    }
}

// Função para o botão Jogar, que vai chamar a função acima e armazenar aquele valor em atributoSelecionado
function jogar() {
    var atributoSelecionado = escolherAtributo()
    var elementoResultado = document.getElementById("resultado")
// Acessa o atributo selecionado, dentro da chave atributos, da carta do jogador e máquina sorteada
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    // Condição para comparar os valores dos atributos e saber quem ganhou
    if (valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = "Você venceu a batalha!! Parabéns";
        elementoResultado.style.color = 'green';
        elementoResultado.style.fontSize = '40px';
        elementoResultado.style.textShadow = "2px 2px black";
    } else if (valorCartaMaquina > valorCartaJogador){
        elementoResultado.innerHTML = "Você perdeu a batalha!! A carta da máquina é maior";
        elementoResultado.style.color = 'red';
        elementoResultado.style.fontSize = '40px';
        elementoResultado.style.textShadow = "2px 2px black";
    } else {
        elementoResultado.innerHTML = "A batalha empatou.";
        elementoResultado.style.fontSize = '40px';
        elementoResultado.style.textShadow = "2px 2px black";
    }
     // Mostra a carta e atributos que o Jogador escolheu na Tela
    // Desabilita o Botão Jogar após clicá-lo
    document.getElementById("btnJogar").disabled = true
    console.log(cartaMaquina);
    exibirCartaMaquina();
} 

//funcao chamada apos aperta o button e exibi as cartas
function exibirCartaJogador(){
  //var receber a carta de html, para mostra na tela
  var divCartaJogador = document.getElementById("carta-jogador"); 
  //mesclando linguagens, colocando JS dentro do CSS que esta dento do HTML
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; // Colocando a imagem da carta do jogador coomo fundo da moldura
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
 
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesText = "";
  //for para lista = para cada(in) atributo dentro(in) de cartaJogador.atributos
  for(var atributo in cartaJogador.atributos) {  //usando html no js 
    opcoesText += `<input type='radio' name='atributos' value='${atributo}'>${atributo} ${cartaJogador.atributos[atributo]} <br>`; 
   // opcoesText recebendo texto mais atributo carda jogador mais o valor do atributo
  }
 
  const nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesText + "</div>";
}

function exibirCartaMaquina() {
   var divCartaMaquina = document.getElementById("carta-maquina"); 
  //mesclando linguagens, colocando JS dentro do CSS que esta dento do HTML
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`; // Colocando a imagem da carta do jogador coomo fundo da moldura
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
 
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  
  var opcoesText = "";
  //for para lista = para cada(in) atributo dentro(in) de cartaJogador.atributos
  for(var atributo in cartaMaquina.atributos) {  //usando html no js 
    opcoesText += "<p type='text' name='atributos' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    // opcoesText recebendo texto mais atributo carda jogador mais o valor do atributo
  }
  //passando nome da carta
  const nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesText + "</div>";
}