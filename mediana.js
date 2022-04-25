let lista = [1, 4, 7, 3, 12, 23, 12, 3, 20, 16, 6, 8, 5, 8, 4];


function calcularMediaAritmetica(lista) {    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;    
    return promedioLista;        
    }

function calcularMediana(lista) { 
    lista.sort(function(a, b) {        
        return a - b;        
    }
    );

    
   
    
    const mitadLista = parseInt(lista.length / 2);
    
    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    let mediana;
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
        const promedioElemeto1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemeto1y2;        
    
    } else {
        mediana = lista[mitadLista];           
    }
    console.log(lista);
    return mediana;
}

