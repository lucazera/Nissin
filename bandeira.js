var canBandeira = document.getElementById("canBandeira");
var btItalia = document.getElementById("btItalia");
var btNoruega = document.getElementById("btNoruega");
var btAlemanha = document.getElementById("btAlemanha");
var btSudao = document.getElementById("btSudao");
var outPais = document.getElementById("outPais");


function desenharItalia () {

    var fig = canBandeira.getContext("2d");

    //limpa um retângulo na imagem (para evitar a sobreposição)
    fig.clearRect(0, 0, 300, 150);

    //define a cor da forma a ser criada

    fig.fillStyle = "green";
    // 0, 0: cordenada inicial  ( coluna, linha)
    // 100,150: larga e altura do retângulo.
    fig.fillRect(0, 0, 100, 150);

fig.fillStyle = "red";
fig.fillRect(200, 0, 100, 150);

outPais.textContent="Bandeira da Itália";


}

function desenharNoruega () {

    var fig = canBandeira.getContext("2d");

    //limpa um retângulo na iamgina (para evitar a sobrepisção)
    fig.clearRect(0, 0, 300, 150);

    //define a cor da forma a ser criada

    fig.fillStyle = "red";

    fig.fillRect(0, 0, 60, 60);
    fig.fillRect(0, 90, 60, 60);
    fig.fillRect(90, 0, 210, 60);
    fig.fillRect(90, 90, 210, 60);
    
   fig.fillStyle = "darkblue";
   fig.fillRect(0, 65, 300, 20);
   fig.fillRect(65, 0, 20, 150);

   outPais.textContent="Bandeira da Noruega";


}

function desenharSudao () {

    var fig = canBandeira.getContext("2d");

    fig.clearRect(0, 0, 300, 150);


    fig.fillStyle = "#Df0101";

    fig.fillRect(0, 0, 300, 50);

    fig.fillStyle = "black";

    fig.fillRect(0, 100, 300, 50);

    
   fig.fillStyle = "green";
   fig.beginPath();
   fig.moveTo(0,0);
   fig.lineTo(0,150);
   fig.lineTo(90,75);
   fig.fill();

   outPais.textContent="Bandeira da Sudao";


}

function desenharAlemanha () {


    var fig = canBandeira.getContext("2d");

    fig.clearRect(0, 0, 300, 150);


    fig.fillStyle = "red";

    fig.fillRect(0, 50, 300, 50);

    fig.fillStyle = "black";

    fig.fillRect(0, 0, 300, 50);

    fig.fillStyle = "yellow";

    fig.fillRect(0, 100, 300, 50);

outPais.textContent="Bandeira da Alemanha";
}

btNoruega.addEventListener("click", desenharNoruega);
btAlemanha.addEventListener("click", desenharAlemanha);
btItalia.addEventListener("click", desenharItalia);
btSudao.addEventListener("click", desenharSudao);
