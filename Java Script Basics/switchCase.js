function checkDayOfWeek(number) {
    let day;
    switch (number) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
            break;
    }
    
    console.log("Day: " + day);
    
}

checkDayOfWeek(3); // Wednesday
checkDayOfWeek(7); // Invalid day number
checkDayOfWeek(0); // Sunday
