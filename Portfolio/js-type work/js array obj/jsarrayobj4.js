function addStudent() {
  let students = JSON.parse(localStorage.getItem('Grade Report')) || [];
  const name = document.getElementById('name').value;
  const mathematicalGrade = parseFloat(document.getElementById('mathematicalGrade').value);
  const englishGrade = parseFloat(document.getElementById('englishGrade').value);
  const biologyGrade = parseFloat(document.getElementById('biologyGrade').value);
  const chemistryGrade = parseFloat(document.getElementById('chemistryGrade').value);
  if (mathematicalGrade > 100 || englishGrade > 100 || biologyGrade > 100 || chemistryGrade > 100) {
    students.pop();
    return;
  }

  const averageGrade = (mathematicalGrade + englishGrade + biologyGrade + chemistryGrade) / 4;
  const newStudent = {
    name,
    grades: {
      mathematical: mathematicalGrade * 1,
      english: englishGrade * 1,
      biology: biologyGrade * 1,
      chemistry: chemistryGrade * 1,
    },
    average: averageGrade * 1,
  };

  students.push(newStudent);
  console.log(students);
  console.log(newStudent);
  localStorage.setItem('Grade Report', JSON.stringify(students));
}

let table = document.querySelector('table');
function showStatistics() {
  let gradeReports = JSON.parse(localStorage.getItem('Grade Report'));
  const statisticsElement = document.getElementById('statistics');

  gradeReports = gradeReports.filter(students => students.grades !== null);
  console.log('Generating statistics...');
  statisticsElement.innerHTML = '<h2>Statistics</h2>';

  if (!table) {
    console.log('Creating new table...');
    table = document.createElement('table');
    table.classList.add('table', 'table-dark');
    statisticsElement.appendChild(table);
  } else {
    console.log('Clearing existing table...');
    table.innerHTML = '';
    return;
  }
  table.appendChild(createTableHeader());
  table.appendChild(createTableBody(gradeReports));

  console.log('Statistics generated!');
}

function createTableCell(text) {
  const td = document.createElement('td');
  td.textContent = text;
  return td;
}

const createTableHeader = () => {
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  tr.appendChild(createTableCell('Student Name'));
  tr.appendChild(createTableCell('Class'));
  tr.appendChild(createTableCell('Score'));
  thead.appendChild(tr);
  table.appendChild(thead);
  return thead;
}


const createTableBody = (students) => {
  const tbody = document.createElement('tbody');
  // Mofify this code to use the data from the students array
  for (let i = 0; i < students.length; i++) {
    // The plus sign was added to display all rows in the table
    // Students is an array of objects so we need to use bracket notation to access the properties
    tbody.innerHTML += ` 
                          <tr>
                            <td>${students[i].name}</td>
                            <td></td>
                            <td>${students[i].average}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Mathematics</td>
                            <td>${students[i].grades.mathematical}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>English</td>
                            <td>${students[i].grades.english}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Biology</td>
                            <td>${students[i].grades.biology}</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Chemistry</td>
                            <td>${students[i].grades.chemistry}</td>
                          </tr>
                        `;
  }
  return tbody;
}