
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
        v[x]=rows[11];
        x++;
        
        var registra=false;

        const IDinizio="COD.ARTICOLODESCRIZIONEDEIBENI(Natura-Qualità)UMQUANTITÀ";    
        let IDfine="CAUSALEDELTRASPORTOASPETTOESTERIOREDEIBENI";
        for(let i=0; i<rows.length; i++){
            //console.log(rows[i]);

            let riga=rows[i].join("");

            if(riga.replace(/ /g,"")==IDinizio){
                registra=true;
                console.log("ABBATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
            }

            
            if(riga.replace(/ /g,"")==IDfine){
                registra=false;
                console.log("FUNZIONA");
            }

            if(registra==true){
                v[x]=rows[i];
                x++;
            }
        }
;


        console.log(rows);

        
/*
       for(let i=0; i<100; i++){
        console.log('Riga n°: '+i+' record:'+rows[i]);
       }*/

       
       //console.log(rows.length);


       const csvFromArrayOfArrays = convertArrayToCSV(v, {
        header,
        separator: ';'
      });

      console.log(csvFromArrayOfArrays);


    var file=fs.createWriteStream('documenti.csv','utf8');
    file.write(csvFromArrayOfArrays);
    file.close();
    });





});

