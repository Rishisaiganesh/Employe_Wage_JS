const is_Absent = 0
let check = Math.floor(Math.random() * 10) % 2
if(check == is_Absent){
    console.log("Employee is absent")
}
else{
    console.log("Employee is present")
}
const emp_is_fulltime=1
const emp_is_parttime=2
const emp_full_timehr=8
const emp_part_timehr=4
const emp_perhr=20
const numof_workingdays = 20
const maxhrs_inmonth = 160

function getEmphr(check){
    switch(check){
        case emp_is_fulltime:
            return emp_full_timehr;
            
            case emp_is_parttime:
                return emp_part_timehr;
                
                default:
                    return 0;
    }
}
 function calcuDailyWage(getEmphr){
     return getEmphr * emp_perhr;
 }

let totalhrs=0;
let totaldays=0;
let empDailywageArr = new Array();
while(totalhrs <= maxhrs_inmonth && totaldays < numof_workingdays){
    totaldays++
    let emp_check = Math.floor(Math.random() *10) % 3;
    totalhrs += getEmphr(emp_check);
    empDailywageArr.push(calcuDailyWage(getEmphr));
}
let total_wage=calcuDailyWage(totalhrs * getEmphr );
console.log("Total days:" + totaldays+ "Total Hrs" + totalhrs+ "Emp wage:" + total_wage);
