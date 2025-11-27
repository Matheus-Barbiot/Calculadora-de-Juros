let capitalInicial = document.getElementById("capital")
let taxaMensal = document.getElementById("taxa")
let tempo = document.getElementById("tempo")

// Botão de calcular e local do resultado
const botaoCalcular = document.getElementById("calcular")
const divResultado = document.getElementById("resultado")

// ===========|Função para calcular juros compostos|===========
function calcularJurosCompostos() {
    let c = parseFloat(capitalInicial.value)
    let i = parseFloat(taxaMensal.value) / 100
    let t = parseFloat(tempo.value)

    const montante = c * (Math.pow((1 + i), t))
    const jurosCompostos = montante - c
    return jurosCompostos
}

function calcularMontante(capital, juros) {
    const montante = capital + juros
    return montante
}

botaoCalcular.addEventListener("click", function () {
    if (validarEntrada() === false) {
        alert("Cálculo não realizado devido a entradas inválidas.");
        return;
    }

    let juros = calcularJurosCompostos()
    let montante = calcularMontante(parseFloat(capitalInicial.value), juros)

    const brl = valor => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    divResultado.innerHTML = `
        <p>Capital Inicial: ${brl(parseFloat(capitalInicial.value))}</p>
        <p>Taxa Mensal: ${taxaMensal.value}%</p>
        <p>Tempo: ${tempo.value} meses</p>
        <p>Juros Compostos: ${brl(juros)}</p>
        <p>Montante Total: ${brl(montante)}</p>
    `
    return
    }
)

function validarEntrada() {
    const campos = [capitalInicial.value, taxaMensal.value, tempo.value]

    // Verifica campos vazios
    if (campos.some(v => v === "")) return false

    // Verifica se são números válidos
    if (campos.some(v => isNaN(v))) return false

    // Verifica se são positivos
    if (campos.some(v => parseFloat(v) < 0)) return false

    return true
}
