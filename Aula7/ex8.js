let frase = "MUUITO legal mesmo"
let vogais = 'aeiou'
let contador=0;
for(let i=0;i<frase.length;i++)
{
    if(vogais.includes(frase[i])){
        contador++;
    }
}
console.log(contador);