function addStudent() {
    var inputElement = document.getElementById('input');
    var studentName = inputElement.value.trim();
    if (studentName !== '') {
        students.push(studentName);
        inputElement.value = '';
        updateStudentList();
    }
}

function showStatistics() {
    var statisticsElement = document.getElementById('statistics');
    statisticsElement.innerHTML = 'Total students: ' + students.length;
    if (students.length > 0) {
        statisticsElement.innerHTML += '<br>Students: ' + students.join(', ');
    }
}