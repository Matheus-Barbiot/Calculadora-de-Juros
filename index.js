// Entrada dos fatores do calculo
var capital_inicial = document.getElementById("capital")
var taxa = document.getElementById("taxa")
var periodo = document.getElementById("periodo")
var tempo = document.getElementById("tempo")

// Botão de calcular e local do resultado
var botao_calcular = document.getElementById("calcular")
var resultado = document.getElementById("resultado")

// ===========|Função para calcular juros simples|===========
function calcularJurosSimples() {
    var c = parseFloat(capital_inicial.value)
    var i = parseFloat(taxa.value) / 100
    var t = parseFloat(tempo.value)

    var juros_simples = c * i * t
    return juros_simples
}


// ========== |Função para calcular montante| ================
function calcularMontante(capital, juros) {
    var montante = capital + juros
    return montante
}


// ========== |Evento de clique no botão calcular| ============
botao_calcular.addEventListener("click", function () {
    var juros = calcularJurosSimples()
    var montante = calcularMontante(parseFloat(capital_inicial.value), juros)

    resultado.innerHTML = `
        <h3>Resultado:</h3>
        <p>Juros Simples: R$ ${juros}</p>
        <p>Montante Total: R$ ${montante}</p>
    `
}
)
