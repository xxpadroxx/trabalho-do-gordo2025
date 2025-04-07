document.getElementById("calculo-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const meta = document.getElementById("meta").value;
    const tempoMeta = parseInt(document.getElementById("tempo-meta").value);
    const quantidade = parseFloat(document.getElementById("quantidade").value);

    if (!meta || !tempoMeta || !quantidade) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const total = tempoMeta * quantidade;
    const resultadoTexto = `Para atingir a meta "${meta}", você precisará de um total de R$ ${total.toFixed(2)} ao longo de ${tempoMeta} meses.`;

    document.getElementById("resultado-texto").innerText = resultadoTexto;
});
