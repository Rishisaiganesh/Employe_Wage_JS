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
    let emphr=0
    let check=Math.floor(Math.random() * 10) %3
    switch(check){
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