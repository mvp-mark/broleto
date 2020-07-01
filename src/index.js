var fs = require('fs');
fs.readFile('./upload/test.arr', function (err, data) {
  if (err) throw err;
  var array = data.toString().split('\n');
  var size = array.length;
  var first = array[0].toString();

  function header(first) {
    let codReg = first.substring(0, 1);
    let codShipp = first.substring(1, 2);
    let codAgreement = first.substring(2, 22);
    let company = first.substring(22, 42);
    let codBank = first.substring(42, 45);
    let bankName = first.substring(45, 65);
    let dateFile = first.substring(65, 73);
    let nsa = first.substring(73, 79);
    let layout = first.substring(79, 81);
    let barCode = first.substring(81, 98);
    let filler = first.substring(98, 150);

    console.log('Código de registro:', codReg);
    console.log('Código de Remessa:', codShipp);
    console.log('Código do Convênio:', codAgreement);
    console.log('Nome da Empresa / Órgão:', company);
    console.log('Código do Banco:', codBank);
    console.log('Nome do Banco:', bankName);
    console.log('Data da gereção do arquivo:', dateFile);
    console.log('Número sequencial do arquivo:', nsa);
    console.log('Versão do Layout:', layout);
    console.log('Código de barras:', barCode);
    console.log('Reservado para o futuro (filler):', filler);
  }
   for(i in array) {
    // let codReg = last.substring(0, 1);
    // let tRegFile = last.substring(1, 7);
    // let totalValue = last.substring(7, 24);
    // let filler = last.substring(24, 150);


    // var linha= ""
    //    var op=  array.startsWith("G");
        // Line{op1,}
        
      if(array[i].toString().startsWith("G")){
        let codReg = first.substring(0, 1);
        let codShipp = first.substring(1, 21);
        let codAgreement = first.substring(21, 22);
        let company = first.substring(22, 42);
        let codBank = first.substring(42, 45);
        let bankName = first.substring(45, 65);
        let dateFile = first.substring(65, 73);
        let nsa = first.substring(73, 79);
        let layout = first.substring(79, 81);
        let barCode = first.substring(81, 98);
        let filler = first.substring(98, 150);

      }  
    };

// if(array[3].toString().startsWith('G')){
//     return console.log("funcionou");
// }
// })   
    // });
//   header(first);
  var last = array[size - 2];
  function trailler(last) {
    let codReg = last.substring(0, 1);
    let tRegFile = last.substring(1, 7);
    let totalValue = last.substring(7, 24);
    let filler = last.substring(24, 150);

    console.log(codReg);
    console.log(tRegFile);
    console.log(totalValue);
    console.log(filler);
  }
//   trailler(last);

});
