const fs= require('fs');
const pdf=require('pdfkit');
//console.log("pronto");
var documento= new pdf;
documento.pipe(fs.createWriteStream("FILE_PROVA.pdf"));

var num=process.argv[2];

fs.readFile('./abbate'+num+'.txt',  function(error, data){
   
    if (error) throw err;

    //console.log(data); 
    var testo=data.toString();
    //console.log(text);
    documento.text(testo);
documento.end();
});
