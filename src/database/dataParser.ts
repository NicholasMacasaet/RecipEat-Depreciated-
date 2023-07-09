import * as csv from '@fast-csv/parse';
import fs from 'fs';

// interface to isolate the relevant data from the csv file
interface CSVRow{
    Name: string,
    Calories: number,
    'Fat (g)': number,
    'Carbs (g)': number,
    'Protein (g)': number,
    'Serving Weight 1 (g)': number,
}
// function to parse the csv file and return an array of csvRow objects
function csvParser(filePath: string): Promise<CSVRow[]> {
    return new Promise((resolve, reject) => {
      const rowsArr: CSVRow[] = [];
  
      fs.createReadStream(filePath)
        .pipe(csv.parse({ headers: true }))
        .on('error', (error) => reject(error))
        .on('data', (row: CSVRow) => rowsArr.push(row))
        .on('end', () => resolve(rowsArr));
    });
  }
//navigate to the database_files and parse the csv file
 csvParser('../../database_files/macro_spreadsheet.csv')
 .then((rows: CSVRow[]) => {
   console.log(rows);

   // Verify if the parsing worked as expected
   if (rows.length > 0) {
    // Parsing successful
    console.log('Parsing succeeded');
  } else {
    // Parsing failed or no data found
    console.log('Parsing failed or no data found');
  }

 })
.catch((error) => {
       console.error('Error parsing CSV file:', error);
});

  

// let myObject =new Promise((resolve) => {
//     let dataArr : JSON[] = [];
//     csv.parseFile('./database_files/macro_spreadsheet.csv', {headers: true})
//     .on("data", (data) => {
//         dataArr.push(data);
//     })
//     .on("end", () => {
//         resolve(dataArr);
//     }
// });