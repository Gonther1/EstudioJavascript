// DATOS PRIMITIVOS JAVASCRIPT
let a=15
let b=BigInt(a) 
// Tambien podemos declarar un BigInt poniendole una n al numero entero quedando asi:
// let b = 15n
// console.log(typeof(b)) <- Esto arroja bigint
let c='Hola mundo'
let d=Symbol(1)
let e; 
// Un tipo de dato undefined tambien puede ser declarado asi:
// let e = undefined
let f={}
// Una variable de tipo object puede ser un array, pero un diccionario tambien lo es, es decir:
// let f = {} console.log(typeof(f))
let g=true
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))
console.log(typeof(g))