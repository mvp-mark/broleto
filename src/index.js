// export * from './Boleto/index';
//const fs = require('fs');
 const lineReader = require('line-reader');

// fs.readFile('./upload/test.arr', function (err, line) {
//   if (err) throw err;
//   let array = line.toString().split('/n');
  
//   for (i in array) {
//     //console.log(array=i);
//     let linha =[]
//     linha[i]=array[i]
//     console.log(linha[1]);
// }
// //   done();
// });

var linhas = [];
lineReader.hasNextLine('./upload/test.arr', function (line) {
    //console.log([line]);
    var teste=[]
for(i in line){
    teste[i]=linhas.push(line);

}
console.log(linhas[0])
},
);

