function inverseNombre(nombre){
    let inverse=nombre.toString().split('').reverse().join('');
    return inverse;
}
console.log(inverseNombre(2342))