import * as csv from '@fast-csv/parse';
import fs from 'fs';
import { parse } from '@fast-csv/parse';

// import csv from 'fast-csv';

// interface to isolate the relevant data from the csv file
interface CSVRow{
    Name: string;
    Calories: number;
    'Fat (g)': number;
    'Carbs (g)': number;
    'Protein (g)': number;
    'Serving Weight 1 (g)': number;
}
// function to parse the csv file and return an array of csvRow objects
function csvParser(filePath: string): Promise<CSVRow[]> {
    return new Promise((resolve, reject) => {
      const rowsArr: CSVRow[] = [];
  
      fs.createReadStream(filePath)
        .pipe(csv.parse({ headers: true, discardUnmappedColumns: true }))
        // .pipe(parse({ headers: true, discardUnmappedColumns: true, transform: (row) => row as CSVRow }))
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
    // error in parsing
    console.log('Parsing failed or no data found');
  }

 })
.catch((error) => {
    //more error handling
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