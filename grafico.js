var canGrafico = document.getElementById("canGrafico");
var outPais = document.getElementById("outPais");


function desenharGrafico () {

    var fig = canBandeira.getContext("2d");

    //limpa um retângulo na imagem (para evitar a sobreposição)
    fig.clearRect(0, 10, 300, 150);

    //define a cor da forma a ser criada

    fig.fillStyle = "green";
    // 0, 0: cordenada inicial  ( coluna, linha)
    // 100,150: larga e altura do retângulo.
    fig.fillRect(0, 0, 100, 150);

fig.fillStyle = "red";
fig.fillRect(200, 0, 100, 150);

outGrafico.textContent="Gráfico";

btGrafico.addEventListener("click", desenharGrafico);
