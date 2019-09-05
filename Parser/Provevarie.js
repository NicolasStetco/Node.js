/*let stringa="ciao mi chiamo Luis"
console.log(stringa);
let stringa2=stringa.replace(/ /g,"");
console.log(stringa2);

v=new Array();
v=["ifgcwie", "dhweiu","wiecb"];
let unito=v.join("");
console.log(unito);*/

const fs=require('fs');
var path ='./deltaterm.pdf';
/*
const readline = require('readline');
const readInterface = readline.createInterface({
    input: fs.createReadStream('./deltaterm.pdf'),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    console.log(line);
});*/
/*
const readline = require('readline');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./deltaterm.pdf'),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(error,line) {
    //if (error) throw error
    console.log(line);
});*/
var pdfText = require('pdf-text')

tabella= new Array();
let registra=false;

pdfText(path, function(err, chunks) {
  //chunks is an array of strings 
  //loosely corresponding to text objects within the pdf
  //console.log(chunks);
  let record=0;
  var col=0;
  console.log(chunks.length);
  for(let i=0; i< chunks.length; i++){


    if(chunks[i]=="Vettore"&&chunks[i+1]=="Data partenza"){
        registra=false;
    }
      if(chunks[i]=="Codice articolo"&&chunks[i+1]=="Descrizione"){
          registra=true;
      }
      

    if(registra){
        console.log(chunks[i]);
        tabella[record]=new Array(8);
        tabella[record][col]=chunks[i];
        col++
        if(col==8){
            col=0;
            record++;
        }
    }
  }
  console.log(tabella);
  console.log(tabella.length);
});


