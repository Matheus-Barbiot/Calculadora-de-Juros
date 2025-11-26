// Entrada dos fatores do calculo
var capitalInicial = document.getElementById("capital")
var taxaMensal = document.getElementById("taxa")
var tempo = document.getElementById("tempo")

// Botão de calcular e local do resultado
var botaoCalcular = document.getElementById("calcular")
var divResultado = document.getElementById("resultado")

// ===========|Função para calcular juros simples|===========
function calcularJurosSimples() {
    var c = parseFloat(capitalInicial.value)
    var i = parseFloat(taxaMensal.value) / 100
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
botaoCalcular.addEventListener("click", function () {
    if (validarEntrada() === false) {
        alert("Cálculo não realizado devido a entradas inválidas.");
        return;
    }
    var juros = calcularJurosSimples()
    var montante = calcularMontante(parseFloat(capitalInicial.value), juros)

    var brl = valor => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    divResultado.innerHTML = `
        <h3>Resultado:</h3>
        <p>Juros Simples: ${brl(juros)}</p>
        <p>Montante Total: ${brl(montante)}</p>
    `
}
)


// ======================|Verificar entrada de dados|=================
function validarEntrada() {
    if (capitalInicial.value === "" || taxaMensal.value === "" || tempo.value === "") {
        return false;
    }
    if (isNaN(capitalInicial.value) || isNaN(taxaMensal.value) || isNaN(tempo.value)) {
        return false;
    }
    if (parseFloat(capitalInicial.value) < 0 || parseFloat(taxaMensal.value) < 0 || parseFloat(tempo.value) < 0) {
        return false;
    }
    return true;
}


// =================|Fim do código|=================