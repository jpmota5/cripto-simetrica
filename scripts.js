document.getElementById("encryptBtn").addEventListener("click", () => {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    if (!message || !key) {
        alert("Por favor, preencha a mensagem e a chave de criptografia.");
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById("output").textContent = encrypted;
});

document.getElementById("decryptBtn").addEventListener("click", () => {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    if (!message || !key) {
        alert("Por favor, preencha a mensagem cifrada e a chave de criptografia.");
        return;
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8);
        if (!decrypted) throw new Error();
        document.getElementById("output").textContent = decrypted;
    } catch (error) {
        alert("Falha na decifragem. Verifique a mensagem e a chave.");
    }
});

document.getElementById("copyBtn").addEventListener("click", () => {
    const output = document.getElementById("output").textContent;
    if (!output) {
        alert("Nada para copiar!");
        return;
    }

    navigator.clipboard.writeText(output)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
        })
        .catch(() => {
            alert("Falha ao copiar o texto.");
        });
});
