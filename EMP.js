//UC1
const IS_Absent = 0
let empCheck = Math.floor(Math.random() * 10)%2;
if (empCheck == IS_Absent)
{
    console.log("Employe is Absent");

}

else{
    console.log("Employe is present");
}

// UC2

const IS_PART__TIME = 1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS =8;
const WAGE_PER_HOUR =20;
{
    let empHRS =0;
    let empCheck =Math.floor(Math.random()*10)% 3;
    switch (empCheck)
    {
        case IS_PART__TIME:
            empHRS = PART_TIME_HOURS;
            break;
            
        case IS_FULL_TIME:
             empHRS = FULL_TIME_HOURS;
             break;
        default:
            empHRS =0;     

    }
    let empWage = empHRS * WAGE_PER_HOUR;
    console.log("Employe Wage is:" + empWage);
}
//UC3

function getorkinhHours(empCheck) {
    switch (empCheck){
        case IS_PART__TIME:
            return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
    }

    
}

    let empHRS = 0;
    let empCheck = Math.floor(Math.random() *10)%3;
    empHRS = getWorkingHours(empCheck);
    let empWage = empHRS * WAGE_PER_HOUR;
    console.log("Emp WAGE:" + empWage);

// UC4
const NUM_OF_WORKING_DAYS =2;
let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++)
{
    let empCheck = Math.floor(Math.random() * 10) %3
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs:" + empHRS+" Emp wage:" + empWage);
// UC5
const MAX_HRS_IN_MONTH =100;
const NUM_OF_WORKING_DAYS =10;
let totalEmpHrs = 0;
let totalWorkingDays =0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = MAth.floor(Math.random() *10)%3;
    totalEmpHrs += getWorkingHours(empCheck);

}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days:" + totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage:"+empWage);
