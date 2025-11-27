// Entrada dos fatores do calculo
const capitalInicial = document.getElementById("capital")
const taxaMensal = document.getElementById("taxa")
const tempo = document.getElementById("tempo")

// Botão de calcular e local do resultado
const botaoCalcular = document.getElementById("calcular")
const divResultado = document.getElementById("resultado")

// ===========|Função para calcular juros simples|===========
function calcularJurosSimples() {
    let c = parseFloat(capitalInicial.value)
    let i = parseFloat(taxaMensal.value) / 100
    let t = parseFloat(tempo.value)

    const jurosSimples = c * i * t
    return jurosSimples
}


// ========== |Função para calcular montante| ================
function calcularMontante(capital, juros) {
    const montante = capital + juros
    return montante
}


// ========== |Evento de clique no botão calcular| ============
botaoCalcular.addEventListener("click", function () {
    if (validarEntrada() === false) {
        alert("Cálculo não realizado devido a entradas inválidas.");
        return;
    }

    let juros = calcularJurosSimples()
    let montante = calcularMontante(parseFloat(capitalInicial.value), juros)

    const brl = valor => valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    divResultado.innerHTML = `
        <p>Juros Simples: ${brl(juros)}</p>
        <p>Montante Total: ${brl(montante)}</p>
    `
}
)


// ======================|Verificar entrada de dados|=================
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




// =================|Fim do código|=================