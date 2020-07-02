var fs = require('fs');
fs.readFile('./upload/test.arr', function (err, data) {
  if (err) throw err;
  var array = data.toString().split('\n');
  var size = array.length;
  var first = array[0].toString();
  for (i in array) {
    var body = array[i].toString();
  }
  let codRegBody = '';
  // const linh{}

  function header(first) {
    let codRegHeader = first.substring(0, 1);
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

    console.log('Código de registro:', codRegHeader);
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
  function boletos() {
    // let codReg = last.substring(0, 1);
    // let tRegFile = last.substring(1, 7);
    // let totalValue = last.substring(7, 24);
    // let filler = last.substring(24, 150);

    // var linha= ""
    //    var op=  array.startsWith("G");
    // Line{op1,}
    // const body = array[i];
    var linha=[]
    var linhaBody={}
    for (i in array) {
      if (array[i].toString().startsWith('G')) {
          linhaBody = {
          codRegBody: array[i].substring(0, 1),
          idAgencyBody: array[i].substring(1, 21),
          datePaymentBody: array[i].substring(21, 29),
          dateCreditBody: array[i].substring(29, 37),
          barCodeBody: array[i].substring(37, 81),
          valueReciveBody: array[i].substring(81, 93),
          valueTaxBody: array[i].substring(93, 100),
          nsrBody: array[i].substring(100, 108),
          codAgencyBody: array[i].substring(108, 116),
          collectionBody: array[i].substring(116, 117),
          authNumberBody: array[i].substring(117, 140),
          paymentFormBody: array[i].substring(140, 141),
          reservedFutureBody: array[i].substring(141, 150),
        };
         linha[i]=linhaBody;

         
         // console.log(codRegBody);
        // console.log(idAgencyBody);
        // console.log(datePaymentBody);
        // console.log(dateCreditBody);
        // console.log(barCodeBody);
        // console.log(valueReciveBody);
        // console.log(valueTaxBody);
        // console.log(nsrBody);
        // console.log(codAgencyBody);
        // console.log(collectionBody);
        // console.log(authNumberBody);
        // console.log(paymentFormBody);
        // console.log(reservedFutureBody);
      }
    }
    console.log(linha[1]);
    console.log(linha[2]);
    
    // console.log(`-----Linha  ${}-------\n`);
    console.log('Texto de teste', codRegBody);
    // console.log(linhaBody[1]);
        // console.log(linha[1]);
  // return linha;
      }
  menssage();

  // if(array[3].toString().startsWith('G')){
  //     return console.log("funcionou");
  // }
  // })
  // });
  //   header(first);
  var last = array[size - 2];
  'Texto de teste',
    function trailler(last) {
      let codReg = last.substring(0, 1);
      let tRegFile = last.substring(1, 7);
      let totalValue = last.substring(7, 24);
      let filler = last.substring(24, 150);

      console.log(codReg);
      console.log(tRegFile);
      console.log(totalValue);
      console.log(filler);
    };
  //   trailler(last);
});
