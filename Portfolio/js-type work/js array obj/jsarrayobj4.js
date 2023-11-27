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
    const gradeReport = JSON.parse(localStorage.getItem('students'));
  const statisticsElement = document.getElementById('statistics');
  statisticsElement.innerHTML = '<h2>Statistics</h2>';

    
}
