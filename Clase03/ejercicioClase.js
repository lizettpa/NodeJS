// //--Table de multiplicar... let base = 3 -> "3*1=3"

// let num = 7
// console.log(`Tabla del 7`)
// for(let i=1;i<=100;i++){
//     resultado = num * i
//     console.log(`${num} * ${i} = ${resultado}`)
// }

// const multi = (number) => {
//     console.log("********************");
//     console.log(`tabla del ${number}`);
//     console.log("********************");
  
//     const num = number;
//     let salida = "";
//     for (let i = 1; i <= 10; i++) {
//       let res = num * i;
//       salida += `${num} * ${i} = ${res}\n`;
//     }
//     return salida;
//   };

//   for (let i = 1; i <= 10; i++) {
//     console.log (multi(i))
// }

// var numbers = [0,1,2,3,4,5,6,7,8,9];

// for (i=0;i<numbers.length;i++){
//     console.log(`3*${numbers[i]}=${3*numbers[i]}`);
// }

const tablasMultiplicar = (numero)=>{
    console.log(`*************`)
    console.log(`Tabla del ${numero}`)
    console.log(`*************`)

    let salida = "";
    for(let i=0;i<=100;i++){
        let resultado = numero * i;
        salida += `${numero} * ${i} = ${resultado}\n`
    }
    return salida
}

for(let i=1;i<=10;i++){
    console.log(tablasMultiplicar(i))
}
