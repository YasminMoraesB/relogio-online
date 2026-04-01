function carregar(){
    const msg = document.getElementById('msg')
    const img = document.getElementById('foto')
    const hora = new Date().getHours()

    const textoDaHora = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.backgroundImage = 'url(imagens/background1.png)'
        document.body.style.color = '#234d83'
        document.getElementById('titulo').style.color = '#1E3A5F'

    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundImage = 'url(imagens/background2.png)'
        document.body.style.color = '#4A1C40'
        document.getElementById('titulo').style.color = '#4A1C40'

    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundImage = 'url(imagens/background3.png)'
        document.body.style.color = '#2C2C2C'
        document.getElementById('titulo').style.color = '#F5F5F5'
    }

    digitarTexto(msg, textoDaHora)
}

function digitarTexto(elemento, txt){
    let i = 0
    elemento.innerHTML = ''

    const writeText = () => {
        if(i < txt.length){
            if(elemento.innerHTML.endsWith('|')){
                elemento.innerHTML = elemento.innerHTML.slice(0, -1)
            }
            elemento.innerHTML += txt.charAt(i) + '|'
            i++
            setTimeout(writeText, 65)
        } else {
            setTimeout(() => {
                elemento.innerHTML = txt + (elemento.innerHTML.endsWith('|') ? '' : '|')
                setTimeout(writeText, 500)
            }, 65)
        }
    }

    writeText()
}