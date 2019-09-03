const fs= require('fs');
const pdf=require('pdfkit');
//console.log("pronto");
var documento= new pdf;
var nome=process.argv[3];
documento.pipe(fs.createWriteStream(nome+'.pdf'));

//var num=process.argv[2];

//fs.readFile('./abbate'+num+'.txt',  function(error, data){

var fileDaConvertire=process.argv[2].toString();
fs.readFile('./'+fileDaConvertire,  function(error, data){ 
    if (error) throw error;

    //console.log(data); 
    var testo=data.toString();
    //console.log(text);
    documento.text(testo);
    documento.end();

    fs.readFile('./'+nome+'.pdf',(err, text)=>{
        if( err ) throw err
        console.log(text.toString());
    });
});
