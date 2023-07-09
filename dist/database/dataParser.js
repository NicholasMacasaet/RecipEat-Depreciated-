"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv = __importStar(require("@fast-csv/parse"));
const fs_1 = __importDefault(require("fs"));
// function to parse the csv file and return an array of csvRow objects
function csvParser(filePath) {
    return new Promise((resolve, reject) => {
        const rowsArr = [];
        fs_1.default.createReadStream(filePath)
            .pipe(csv.parse({ headers: true, discardUnmappedColumns: true }))
            // .pipe(parse({ headers: true, discardUnmappedColumns: true, transform: (row) => row as CSVRow }))
            .on('error', (error) => reject(error))
            .on('data', (row) => rowsArr.push(row))
            .on('end', () => resolve(rowsArr));
    });
}
//navigate to the database_files and parse the csv file
csvParser('../../database_files/macro_spreadsheet.csv')
    .then((rows) => {
    console.log(rows);
    // Verify if the parsing worked as expected
    if (rows.length > 0) {
        // Parsing successful
        console.log('Parsing succeeded');
    }
    else {
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
