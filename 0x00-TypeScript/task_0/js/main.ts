interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jake",
  lastName: "Peralta",
  age: 35,
  location: "USA",
};

const student2: Student = {
  firstName: "Charles",
  lastName: "boyle",
  age: 40,
  location: "USA",
};

const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
body.appendChild(table)

const tableHeader: string[] = ["firstName", "location"];

generateTableHead(table, tableHeader);
generateTable(table, studentsList);


function generateTableHead(table: HTMLTableElement,headers: string[]): void {
    const thead: HTMLTableSectionElement  = table.createTHead();
    const row: HTMLTableRowElement   = thead.insertRow();

    headers.forEach((headerTitle, index) =>{
        const cell: HTMLTableDataCellElement = row.insertCell(index);
        const text: Text = document.createTextNode(headerTitle);
        cell.appendChild(text)
        thead.appendChild(row)
    })
  }

function generateTable(table: HTMLTableElement, data: Student[]): void{
    const tbody: HTMLTableSectionElement = document.createElement("tbody");
    table.appendChild(tbody);
    data.forEach((element: Student)=> {
        const row: HTMLTableRowElement = tbody.insertRow();
        const cell1: HTMLTableDataCellElement = row.insertCell(0);
        const text1: Text = document.createTextNode(element.firstName);
        cell1.appendChild(text1)
        const cell2: HTMLTableDataCellElement = row.insertCell(1);
        const text2: Text = document.createTextNode(element.location);
        cell2.appendChild(text2);
    });
}
