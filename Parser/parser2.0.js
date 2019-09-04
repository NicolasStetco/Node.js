
const pdf2table = require('pdf2table');
const fs = require('fs');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

var registra=false; 
v= new Array();
header= new Array();
let x=0;

fs.readFile('PDFesempi/deltaterm.pdf', function (err, buffer) {
    if (err) return console.log(err);
 
    pdf2table.parse(buffer, function (err, rows, rowsdebug) {

        if(err) return console.log(err);

        //console.log(rows);
        //v[x]=rows[11];
        
        const IDinizio="CodicearticoloDescrizioneQuantità03035080047UMPrezzoSc%03035080047ImportoIVA%";    
        const IDfine="VettoreDatapartenzaOrapartenzaFirma";

        console.log('QUESTO è L HEADER ' +IDinizio);
        console.log('QUESTO è IL FOOTER '+IDfine);
        console.log(rows[11].join("").replace(/ /g,""));
        console.log(rows[38].join("").replace(/ /g,""));
        //console.log(rows[38]);
        for(let i=0; i<rows.length; i++){
            //console.log(rows[i]);

            let riga=rows[i].join("");
/*
            if(!registra){
                if(riga.replace(/ /g,"")==IDinizio){
                    registra=true;
                    console.log("INIZIO TABELLA");
                }
            }else{
                if(riga.replace(/ /g,"")==IDfine){
                    registra=false;
                    console.log("FINE TABELLA");
                }
            }*/
/*


            if(riga.replace(/ /g,"")==IDinizio){
                registra=true;
                console.log("INIZIO TABELLA");
                console.log("identificato alla riga: "+i);
            }

            
            if(riga.replace(/ /g,"")==IDfine){
                registra=false;
                console.log("FINE TABELLA");
            }*/

            if(riga.replace(/ /g,"")==IDfine){
                registra=false;
                console.log("FINE TABELLA");
                console.log("tabella finita alla riga: "+i);
            }


            if(riga.replace(/ /g,"")==IDinizio){
                registra=true;
                console.log("INIZIO TABELLA");
                
        }
        
        if(registra==true){
                //console.log(x);
                //console.log("tabella");
                console.log("stampata la riga: "+i);
                v[x]=rows[i];
                x++;
            }

        
        
        /*
            let aux=0;
            if(riga.replace(/ /g,"")==IDinizio){
                aux=i;
                while(rows[aux]!=IDfine){
                    v[aux]=rows[aux];
                    aux++;
                }
                i=aux;
            }
*/
            
        }

        //console.log(rows);
   

       for(let i=0; i<100; i++){
        console.log('Riga n°: '+i+' record:'+rows[i]);
       }

       
       //console.log(rows.length);


        const csvFromArrayOfArrays = convertArrayToCSV(v, {
        header,
        separator: ';'
      });
    console.log(" ");
    console.log(csvFromArrayOfArrays);
    //let abbate=rows[12].join("");
    //console.log(abbate.replace(/ /g,""));
    //console.log(v);

    var file=fs.createWriteStream('documenti.csv','utf8');
    file.write(csvFromArrayOfArrays);
    file.close();
    });





});

