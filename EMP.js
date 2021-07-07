{
const IS_Absent = 0
let empCheck = Math.floor(Math.random() * 10)%2;
if (empCheck == IS_Absent)
{
    console.log("Employe is Absent");

}

else{
    console.log("Employe is present");
}

}

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
