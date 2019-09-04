
var pdf2table = require('pdf2table');
var fs = require('fs');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
 
fs.readFile('PDFesempi/Emmeerrei (1).pdf', function (err, buffer) {
    if (err) return console.log(err);
 
    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
        if(err) return console.log(err);

        //console.log(rows);

        v= new Array();
        header= new Array();
        let x=0;
       /* v[x]=rows[11];
        x++;*/
        for(let i=27; i<52; i++){
            //console.log(rows[i]);
            v[x]=rows[i];
            x++;
        }


        //console.log(v);

        
/*
       for(let i=0; i<100; i++){
        console.log('Riga n°: '+i+' record:'+rows[i]);
       }*/




       const csvFromArrayOfArrays = convertArrayToCSV(v, {
        header,
        separator: ';'
      });

      console.log(csvFromArrayOfArrays);


    var file=fs.createWriteStream('documento.csv','utf8');
    file.write(csvFromArrayOfArrays);
    file.close();
    });
});

