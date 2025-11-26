var capital_inicial = document.getElementById("capital")
var taxa = document.getElementById("taxa")
var periodo = document.getElementById("periodo")
var tempo = document.getElementById("tempo")

function calcularJurosSimples() {
    var C = parseFloat(capital_inicial.value)
    var i = parseFloat(taxa.value) / 100
    var t = parseFloat(tempo.value)

    var juros_simples = C * i * t

    alert("O valor dos juros simples é: R$ " + juros_simples.toFixed(2))
}
