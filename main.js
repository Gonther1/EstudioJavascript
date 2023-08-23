/* 
console.log(document)
*/ 

/* 
La palabra 'document' en Javascript permite acceder desde javascript al documento html en el que se esta llamando el archivo js, en este caso este console imprime el documento index.html
*/

/* 
 console.log(document.getElementsByTagName('body')[0].children)
*/
/*
 console.log(document.querySelector('body'))
 */
/* 
'document.querySelector()'selecciona el primer valor
*/
/*
 'document.querySelectorAll()' selecciona todos los valores dentro del parentesis
*/

/*
 let h1 = document.querySelector('#myId')
 h1.innerHTML=null
 h1.insertAdjacentHTML('beforeend', 'XD')
 console.log(h1)
*/

/*
Forma correcta de cambiar el texto de una etiqueta, sin innerHTMl, esta manera es más recursiva y mejor.
*/
let array = ['miguel', 'jho', 'manuel']
let dict = {
    a: 'Hola',
    b: 'Andres'
}
function saludar2({a,b}) {
    console.log(`${a} ${b}`)
}
function saludar(p1, p2, p3) {
    console.log(`Hola ${p1}`)
    console.log(`Hola ${p2}`)
    console.log(`Hola ${p3}`)
}
console.log(saludar2({...dict}))