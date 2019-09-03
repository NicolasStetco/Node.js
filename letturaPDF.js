const fs=require('fs');

fs.readFile('./abbate.pdf',  function(error, data){
   
    if (error) throw err;

    //console.log(data); 
    var text=data.toString();
    console.log(text);
});
/*
const fs=require('fs');

var file=fs.readFileSync('./document.pdf');

console.log(file);*/