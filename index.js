// Entrada dos fatores do calculo
var capital_inicial = document.getElementById("capital")
var taxa = document.getElementById("taxa")
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
    if (validarEntrada() === false) {
        alert("Cálculo não realizado devido a entradas inválidas.");
        return;
    }
    var juros = calcularJurosSimples()
    var montante = calcularMontante(parseFloat(capital_inicial.value), juros)

    var brl = valor => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    resultado.innerHTML = `
        <h3>Resultado:</h3>
        <p>Juros Simples: ${brl(juros)}</p>
        <p>Montante Total: ${brl(montante)}</p>
    `
}
)


// ======================|Verificar entrada de dados|=================
function validarEntrada() {
    if (capital_inicial.value === "" || taxa.value === "" || tempo.value === "") {
        return false;
    }
    if (isNaN(capital_inicial.value) || isNaN(taxa.value) || isNaN(tempo.value)) {
        return false;
    }
    if (parseFloat(capital_inicial.value) < 0 || parseFloat(taxa.value) < 0 || parseFloat(tempo.value) < 0) {
        return false;
    }
    return true;
}


// =================|Fim do código|=================