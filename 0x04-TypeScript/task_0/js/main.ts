// Define Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Wick",
  age: 20,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 26,
  location: "Kampala",
};

const studentsList: Student[] = [student1, student2];

// Render table using Javascript
const table = document.createElement("table");

// Append table headers
const headerRow = table.insertRow();
const header1 = headerRow.insertCell(0);
header1.textContent = "First Name";
const header2 = headerRow.insertCell(1);
header2.textContent = "Location";

// Append rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  cell1.textContent = student.firstName;
  const cell2 = row.insertCell(1);
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
