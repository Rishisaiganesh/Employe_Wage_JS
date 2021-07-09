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
{
    let emphr=0
    let emp_check=Math.floor(Math.random() * 10) %3
    switch(emp_check){
        case emp_is_fulltime:
            emphr=emp_full_timehr;
            break;
            case emp_is_parttime:
                emphr=emp_part_timehr;
                break;
                default:
                    emphr=0;
    }
    let empwage=emphr*emp_perhr;
    console.log("the empwage is:"+empwage)
}
function getEmphr(emp_check)
{
    switch(emp_check){
        case emp_is_fulltime:
            return emp_full_timehr;
            case emp_is_parttime:
                return emp_part_timehr;
                default:
                    return 0;
    }
}
let emp_check=Math.floor(Math.random() * 10) %3
let emphr=getEmphr(emp_check)
let empwage=emphr*emp_perhr
console.log("get emp hour"+emphr+" "+"emp wage"+empwage)
let totalemphrs=0
for(let day=0;day<numof_workingdays;day++){
totalemphrs += getEmphr(emp_check)
}
let totalwage = totalemphrs*emp_perhr
console.log("totalhrs="+totalemphrs + "TOTAL WAGE"+totalwage)

totalhrs=0
totaldays=0
while(totalhrs <= maxhrs_inmonth && totaldays < numof_workingdays){
    totaldays++
    totalhrs += getEmphr(emp_check)
}
let total_wage=totalhrs*emp_perhr
console.log("hrs="+totalhrs+" "+"days="+totaldays+" "+"wage="+total_wage)
