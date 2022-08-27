import { RETURNS } from "./enum";
// Validar cpf!
export const validateCpf = (cpf:string) :boolean =>{
    
    cpf = cpf.replace(/[^\d]+/g , "")

    if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		

    let add = 0 
    let add2 = 0 
    let dv1 = 0
    let dv2 = 0

    // primeiro verificador 
    for ( let i = 0;  i < 9; i++){
        add += parseInt(cpf.charAt(i)) * (10 - i )
        dv1 = 11 - (add % 11)
    }    

    if(dv1 === 10 || dv1 === 11){
        dv1 = 0
    }

    if(dv1 != parseInt(cpf.charAt(9))){
        return false
    }

    // segundo verificador

    for(let i = 0; i < 10; i++){
        add2 += parseInt(cpf.charAt(i)) * (11 - i)
        dv2 = 11 - (add2 % 11)
    }

    
    if(dv2 === 10 || dv2 === 11){
        dv2 = 0
    }

    if(dv2 != parseInt(cpf.charAt(10))){
        return false
    }
    
    return true
}


// Checar se é maior de idade

export const checkIsOfAge = (birthDate:string) :boolean => {
    
   const yearBirth= Number(birthDate.split(/[^\d]+/g).pop());
   const currentYear = new Date().getFullYear();
   const ofAge = 18;
   const age = currentYear - yearBirth;
   
   if(age < ofAge) return false


   return true
}

// comparar datas 
 export const compereDates = (date:string | undefined) :string | undefined => {

    const currentDate = new Date()
    const today = currentDate.toLocaleDateString();

    if(!date) return undefined
    if(date < today) return RETURNS.LESS
    if(date > today) return  RETURNS.BIGGER
    if(today === date) return RETURNS.EQUAL
 }






