function maiorNumero(array)
{
    let maior = array[0];
    for(let numero of array){
        if(numero > maior){
            maior = numero;
        }
    }
    return maior;
}

console.log(maiorNumero([1,2,3,4,5,6,7,8,9,89]));