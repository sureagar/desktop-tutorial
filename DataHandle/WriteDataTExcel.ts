// Read Data from Excel file in TypeScript using xlsx library
import * as XLSX from 'xlsx';
import * as path from 'path'; // to resolve the file path
let flPath = "../testdata/EmpData.xlsx";
let workbook = XLSX.readFile(path.resolve(__dirname, flPath));
let sheetName = workbook.SheetNames[0];

let sheet = workbook.Sheets[sheetName];
let data = XLSX.utils.sheet_to_json(sheet);
console.log(data);

// Write data to Excel file in TypeScript using xlsx library
let newData = [
    { firstName: "John", lastName: "Doe"}
];
let newSheet = XLSX.utils.json_to_sheet(newData);
let newWorkbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(newWorkbook, newSheet, "EmpData");
let newFlPath = "../testdata/NewEmpData.xlsx";
XLSX.writeFile(newWorkbook, path.resolve(__dirname, newFlPath));

// File, Sheet, row, column, cell