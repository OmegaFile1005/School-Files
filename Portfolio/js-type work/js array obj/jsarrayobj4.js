let students = [];

function addStudent() {
    const name = document.getElementById('name').value;
    const classNames = ['#class input[type="text"]'];
    const mathematicalGrade = parseFloat(document.getElementById('mathematicalGrade').value);
    const englishGrade = parseFloat(document.getElementById('englishGrade').value);
    const biologyGrade = parseFloat(document.getElementById('biologyGrade').value);
    const chemistryGrade = parseFloat(document.getElementById('chemistryGrade').value);
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

    const classes = classNames.map((className) => {
        const classValue = parseFloat(document.querySelector(className).value);
        return { className, classValue };
    });

    students.push(newStudent);

    console.log(students);
    localStorage.setItem('students', JSON.stringify(students));
}

function showStatistics() {
    const tbody = document.getElementById('statistics');
    tbody.innerHTML = '';

    const data = [
        ['Name', '', 'Math', 'English', 'Biology', 'Chemistry', 'Average'],
        ...students.map((student) => {
            const row = [];

            row.push(student.name + '' + student.average.toFixed(2));

            for (const { className, classValue } of student.grades) {
                row.push(classValue);
            }

            return row;
        }),
    ];

    document.getElementsByClassName('row')[0].removeAttribute('hidden');
}
