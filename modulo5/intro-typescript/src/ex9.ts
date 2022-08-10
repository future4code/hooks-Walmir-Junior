const isApproved  = (age:number, schooling:string, hours:number , rotation: string) :boolean  => {
    let approved

    let isLegalAge = age > 18 ? true : false
    let completeHighSchool = schooling == "sim" ? true : false
    let validationHours = hours >= 40 && rotation == "integral" ? true : false
    let validationHours2 = hours >= 20 && rotation == "noturno" ? true : false

    if(
        isLegalAge === true &&
        completeHighSchool  === true &&
        validationHours  === true ||
        validationHours2  === true
    ){
        approved =true
    }else{
        approved = false
    }

    return approved
    
} 

console.log(isApproved(1000, "sim", 40, "integral"))