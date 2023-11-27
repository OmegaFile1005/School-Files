let students = [];
let mathematical = 0;
let english = 0;
let biology = 0;
let chemistry = 0;

function addStudent() {
  const name = document.getElementById('name').value;
  const mathematicalGrade = parseFloat(document.getElementById('mathematicalGrade').value);
  const englishGrade = parseFloat(document.getElementById('englishGrade').value);
  const biologyGrade = parseFloat(document.getElementById('biologyGrade').value);
  const chemistryGrade = parseFloat(document.getElementById('chemistryGrade').value);

  if (mathematicalGrade > 100 || englishGrade > 100 || biologyGrade > 100 || chemistryGrade > 100) {
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

  for (let i = 0; i < students.length; i++) {
    if (students[i].grades.mathematical > 0) {
      mathematical++;
    }
    if (students[i].grades.english > 0) {
      english++;
    }
    if (students[i].grades.biology > 0) {
      biology++;
    }
    if (students[i].grades.chemistry > 0) {
      chemistry++;
    }
  }

  console.log(newStudent);
  localStorage.setItem('students', JSON.stringify(newStudent));
}

function showStatistics() {
  const statisticsElement = document.getElementById('statistics');
  statisticsElement.innerHTML = '<h2>Statistics</h2>';

  const table = document.createElement('table');
  table.classList.add('table', 'table-dark');

  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <th>Student Name</th>
    <th>Class</th>
    <th>Score</th>
  `;
  thead.appendChild(tr);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  tbody.id = 'grades';
  table.appendChild(tbody);

  function createNameScoreRow(student) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td></td>
      <td>${student.average}</td>
    `;
    return row;
  }

  function createClassScoreRow(student) {
    const row = document.createElement('tr');
    for (let i = 0; i < student.classes.length; i++) {
      row.innerHTML = `
        <td></td>
        <td>${student.className}</td>
        <td>${student.class}</td>
      `;
      return row;
    }
  }

  const gradesElement = table.parentNode;
  if (gradesElement) {
    gradesElement.appendChild(table);
    students.forEach((student) => {
      if (student.classes.length > 1) {
        gradesElement.appendChild(createClassScoreRow(student));
      } else {
        gradesElement.appendChild(createNameScoreRow(student));
      }
    });
  }

  console.log('showStatistics called');
}
