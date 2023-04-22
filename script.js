document.querySelector('.Encriptar').addEventListener('click',encript)
document.querySelector('.Desencriptar').addEventListener('click',desencript)
function encript(){   
    let texto = document.querySelector('.areaEscrita').value.toLowerCase()
    let textEncriptado = texto.replace(/e/g,'enter')
    textEncriptado= textEncriptado.replace(/i/g,'imes')
    textEncriptado= textEncriptado.replace(/a/g,'ai')
    textEncriptado= textEncriptado.replace(/o/g,'ober')
    textEncriptado= textEncriptado.replace(/u/g,'ufat')  
    document.querySelector('.copy').style.display ="show"
    document.querySelector('.copy').style.display ="inherit"
    document.querySelector('.muneco').style.display ="none"
    document.querySelector('.p1').style.display = 'none'
    document.querySelector('.p2').innerHTML = textEncriptado
    alinear()
}
function desencript(){
    let text = document.querySelector('.areaEscrita').value.toLowerCase()
    let textDesencriptado = text.replace(/enter/igm,'e')
    textDesencriptado = textDesencriptado.replace(/imes/igm,'i')
    textDesencriptado = textDesencriptado.replace(/ai/igm,'a')
    textDesencriptado = textDesencriptado.replace(/ober/igm,'o')
    textDesencriptado = textDesencriptado.replace(/ufat/igm,'u')
    document.querySelector('.copy').style.display ="show"
    document.querySelector('.copy').style.display ="inherit"
    document.querySelector('.muneco').style.display ="none"
    document.querySelector('.p1').style.display = 'none'
    document.querySelector('.p2').innerHTML= textDesencriptado  
}
const btnCopiar = document.querySelector('.copy')
    btnCopiar.addEventListener('click',()=>{
    var content = document.querySelector('.p2').textContent
    navigator.clipboard.writeText(content)
    console.log('texto copiado ' + content)
    btnCopiar.textContent = 'Copiado'
})
function copear(){
    var contenido = tes
    navigator.clipboard.writeText(contenido)
    alert('texto copiado '+ contenido)
}
function alinear(){
    let texto = document.querySelector('.p2')
    texto.style.color = '#0A3871'
    texto.style.fontSize = '30px'
    texto.style.top = "50px";
    texto.style.left= '1px'
}