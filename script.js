//Esto agrega a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

//Esta accion vacia la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}

//Esta accion toma el valor de la pantalla y realiza los calculos
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla); //evalua una cadena de caracteres y ejecuta funciones matematicas de javascript
    document.getElementById('pantalla').value = resultado;
}