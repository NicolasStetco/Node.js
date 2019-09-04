const fs=require('fs');
//var ext=process.argv[2];


//fs.readFile('./idroterm.pdf',  function(error, data){
fs.readFile('./deltaterm.pdf',  function(error, data){

   
    if (error) throw err;

    //console.log(data); 
    var text=data.toString();
    console.log(text);
});
/*
const fs=require('fs');

var file=fs.readFileSync('./document.pdf');

console.log(file);*/