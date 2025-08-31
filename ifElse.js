function checkVoterAge(age) {
    if (age >= 18) {
        console.log("Eligible to vote as you are 18 or older");
    } else {
        console.log("Not eligible to vote as you are under 18");
    }
}

checkVoterAge(20); // Eligible to vote as you are 18 or older
checkVoterAge(16); // Not eligible to vote as you are under 18

function checkGrade(marks) {
    let grade;
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80 && marks < 90) {
        grade = 'B';
    } else if (marks >= 70 && marks < 80) {
        grade = 'C';
    }   else if (marks >= 60 && marks < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }   
    console.log("Marks: " + marks + "  Grade: " + grade);
}
checkGrade(85); // B
checkGrade(72); // C
checkGrade(55); // F
