const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", function(event){


    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const tipo = document.getElementById("tipo").value
    const  mensagem= document.getElementById("mensagem").value

    if(telefone.trim() === ""){
        alert("Digite seu nome")
        return
    }
    const textoWhatsapp =
    `
    Olá! Gostaria de fazer uma musica junto ao Naldo Benny
    Nome:${nome}
    Email:${email}
    Telefone:${telefone}
    Estilo da musica:${tipo}
    Observações:${mensagem}
    
    
    
    `
    const mensagemCodificada = encodeURIComponent (textoWhatsapp)
    const numeroWhatsapp = "5511965791318"
    const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada
    window.location.href = link
})