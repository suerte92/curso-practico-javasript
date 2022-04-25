function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        console.log('isósceles')
        const altura = Math.sqrt(lado1**2 - (base/2) ** 2)
        console.log(altura)
    }
    else{
        console.log('no es triángulo isósceles')
    }
}
altura(5, 5, 8)
