var student1 = {
    firstName: 'mehdi',
    lastName: 'zitouni',
    age: 39,
    location: 'tunis'
};
var student2 = {
    firstName: 'marwane',
    lastName: 'brahem',
    age: 33,
    location: 'tunis'
};
var studentsList = [student1, student2];
var table = document.createElement("table");
document.body.appendChild(table);
studentsList.forEach(function (student) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    console.log(student);
    Object.keys(student).forEach(function (key) {
        if (key === 'firstName' || key === 'location') {
            var td = document.createElement('td');
            td.innerText = student[key];
            tr.appendChild(td);
        }
    });
});
