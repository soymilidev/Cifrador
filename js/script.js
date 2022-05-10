//--------------ENCRIPTAR--------------
function btnEncriptar() {
    const inputTexto = document.querySelector(".input-text"); //traemos del HTML
    const mensaje = document.querySelector(".output-text");
    const txtEncriptado = encriptar(inputTexto.value);
    mensaje.value = txtEncriptado;
    document.querySelector(".output-disabled").style.display = "none";
    document.querySelector(".form-output").style.display = "block";
}

function encriptar(stringParaEncriptar) {
    let matrizCodigo = 
    [
        ['e', 'enter'], ['i', 'imes'],
        ['a', 'ai'], ['o', 'ober'],
        ['u', 'ufat']
    ]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringParaEncriptar.includes(matrizCodigo[i][0])) {
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar;
}


//--------------DESENCRIPTAR--------------
function btnDesencriptar() {
    const inputTexto = document.querySelector(".input-text"); //traemos del HTML
    const mensaje = document.querySelector(".output-text");
    const txtEncriptado = desencriptar(inputTexto.value);
    mensaje.value = txtEncriptado;
    document.querySelector(".output-disabled").style.display = "none";
    document.querySelector(".form-output").style.display = "block";
}

function desencriptar(stringParaEncriptar) {
    let matrizCodigo = 
    [
        ['enter', 'e'], ['imes', 'i', ],
        ['ai', 'a'], ['ober', 'o'],
        ['ufat', 'u']
    ]
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringParaEncriptar.includes(matrizCodigo[i][0])) {
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar;
}


//--------------COPIAR--------------
function btnCopiar(){
    let contenido = document.querySelector('.output-text');
    contenido.select();
    document.execCommand('Copy');
    //alert('¡Copiado!');
}


//--------------LIMPIAR--------------
function btnLimpiarFormularioInput() {
    document.querySelector(".form-text").reset();
}

function btnLimpiarFormularioOutput() {
    document.querySelector(".form-output").reset();
}