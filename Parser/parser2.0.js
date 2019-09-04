const pdf2table = require('pdf2table');
const fs = require('fs');
const {
    convertArrayToCSV
} = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

var registra = false;
v = new Array();
header = new Array();
let x = 0;
const nomeFile=process.argv[2].toString();

fs.readFile('PDFesempi/'+nomeFile+'.pdf', function (err, buffer) {
    if (err) return console.log(err);

    pdf2table.parse(buffer, function (err, rows, rowsdebug) {

        if (err) return console.log(err);

        //console.log(rows);
        //v[x]=rows[11];

        const IDinizioDeltaterm = "CodicearticoloDescrizioneQuantità03035080047UMPrezzoSc%03035080047ImportoIVA%";
        const IDfineDeltaterm = "VettoreDatapartenzaOrapartenzaFirma";

        const IDinizioEmerrea = "COD.ARTICOLODESCRIZIONEDEIBENI(Natura-Qualità)UMQUANTITÀ";
        const IDfineEmerrea = "VENDITA+POSA,AVISTA";

        const IDinizioIdroterm = "CODICEDESCRIZIONEU.M.QUANTITÀPREZZOUNITARIOPREZZOTOTALE";
        const IDfineIdroterm = "DICHIARAZION";

        const IDinizioGrandaClima = "CodiceDescrizionearticoliU.M.Quantità";
        const IDfineGrandaClima = "TrasportoamezzoVettoreAddebitotrasporto:Firmaconducente";

        /*
        console.log('QUESTO è L HEADER ' +IDinizioDeltaterm);
        console.log('QUESTO è IL FOOTER '+IDfineDeltaterm);
        console.log(rows[11].join("").replace(/ /g,""));
        console.log(rows[38].join("").replace(/ /g,""));
        */
        //console.log(rows[38]);
        for (let i = 0; i < rows.length; i++) {
            //console.log(rows[i]);

            let riga = rows[i].join("");
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

            if (riga.replace(/ /g, "") == IDfineDeltaterm || (riga.replace(/ /g, "") == IDfineEmerrea&&i!=12&&i!=67) ||
                riga.replace(/ /g, "") == IDfineIdroterm || riga.replace(/ /g, "") == IDfineGrandaClima) {
                registra = false;
                //console.log("FINE TABELLA");
                //console.log("tabella finita alla riga: "+i);
            }


            if (riga.replace(/ /g, "") == IDinizioDeltaterm || riga.replace(/ /g, "") == IDinizioEmerrea ||
                riga.replace(/ /g, "") == IDinizioIdroterm || riga.replace(/ /g, "") == IDinizioGrandaClima) {
                registra = true;
                //console.log("INIZIO TABELLA");

            }

            if (registra == true) {
                //console.log(x);
                //console.log("tabella");
                console.log("stampata la riga: " + i);
                v[x] = rows[i];
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


        for (let i = 0; i < 100; i++) {
            console.log('Riga n°: ' + i + ' record:' + rows[i]);
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

        var file = fs.createWriteStream(nomeFile+'.csv', 'utf8');
        file.write(csvFromArrayOfArrays);
        file.close();
    });
});