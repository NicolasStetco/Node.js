const fs=require('fs');
//var ext=process.argv[2];

<<<<<<< Updated upstream
fs.readFile('./idroterm.pdf',  function(error, data){
=======
fs.readFile('C:/Users/filip/Desktop/NPM prova/Pdf/deltaterm.pdf',  function(error, data){
>>>>>>> Stashed changes
   
    if (error) throw err;

    //console.log(data); 
    var text=data.toString();
    console.log(text);
});
/*
const fs=require('fs');

var file=fs.readFileSync('./document.pdf');

console.log(file);*/