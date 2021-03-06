
//UC-1-Check Employee Absent/Present Using Random
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");
    return;
}
else {
    console.log("Employee is present");
}

//UC-2-Calculate Daily Wage of Employee
let empHrs = 0;
switch(empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage = empHrs*WAGE_PER_HOUR;
console.log("Emp wage = "+empWage)
}

//UC-3-Using Function to Check Emp Hours
function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empCheck = Math.floor(Math.random()*10)%3;
let empHrs = getWorkingHours(empCheck);
let empWage = empHrs*WAGE_PER_HOUR;
console.log("Emp hours: "+empHrs);
console.log("Emp wage: "+empWage);


//UC4-Calculate_Monthly_Wage_of_Employee
const NUM_OF_WORKING_DAYS = 20;

let totalEmpHrs = 0;
for(day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs = totalEmpHrs+getWorkingHours(empCheck);
}

let empWage = totalEmpHrs*WAGE_PER_HOUR;

console.log("Emp hours: "+totalEmpHrs);
console.log("Emp wage: "+empWage)

