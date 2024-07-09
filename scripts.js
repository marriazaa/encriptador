function encriptar() {
    let texto = document.getElementById("inputTexto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("resultadoTexto").innerText = textoEncriptado;
    document.getElementById("copiarBtn").classList.remove("hidden");
}

function desencriptar() {
    let texto = document.getElementById("inputTexto").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("resultadoTexto").innerText = textoDesencriptado;
    document.getElementById("copiarBtn").classList.remove("hidden");
}

function copiar() {
    let textoResultado = document.getElementById("resultadoTexto").innerText;
    navigator.clipboard.writeText(textoResultado).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
}
