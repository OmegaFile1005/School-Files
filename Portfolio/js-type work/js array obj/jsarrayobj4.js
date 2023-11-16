let students = [];
let mathematical = 0;
let english = 0;
let biology = 0;
let chemistry = 0;

function addStudent() {
    const name = document.getElementById('name').value;
    const classNames = ['#id input[type="text"]'];
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
            mathematical: mathematicalGrade,
            english: englishGrade,
            biology: biologyGrade,
            chemistry: chemistryGrade,
        },
        average: averageGrade,
    };

    students.push(newStudent);


    for (let i = 0; i < classNames.length; i++) {
        const className = classNames[i].valueOf;
        newStudent.classes.push(className);
    };


    console.log(students);
    localStorage.setItem('students', JSON.stringify(students));
}

function showStatistics() {
    document.getElementById('statistics').innerHTML = '';
    document.getElementById('statistics').innerHTML = '<h2>Statistics</h2>';
    const table = document.createElement('table');
    table.classList.add('table', 'table-dark');
    table.innerHTML = `
  <thead>
    <tr>
      <th>Student Name</th>
      <th>Class</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody id="statistics">
  </tbody>
`;

    function createNameScoreRow(student) {
        const row = document.createElement('tr');
        row.innerHTML = `
    <td>${student.name}</td>
    ''
    <td>${student.average}</td>
  `;
        return row;
    }

    function createClassScoreRow(student) {
        const row = document.createElement('tr');
        for (let i = 0; i < student.classes.length; i++) {
            row.innerHTML = `
    ''
    <td>${student.className}</td>
    <td>${student.class}</td>
  `;
            return row;
        }

        statisticsElement.appendChild(table);
    }

    const statisticsElement = document.getElementById('statistics');
    tbody = document.querySelector('#statistics');

    if (statisticsElement && tbody) {
        statisticsElement.appendChild(table);
        students.forEach((student) => {
            if (student.classes.length > 1) {
                createClassScoreRow(student);
            } else {
                createNameScoreRow(student);
            }
        })
    }

    console.log('showStatistics called');

}