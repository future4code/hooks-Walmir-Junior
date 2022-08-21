enum ROLE {
    ADIMIN = "Adimin",
    USER = "User"
}

type User = {
    name:string,
    email:string,
    role: ROLE
}

const userList:User[] =  [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADIMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADIMIN}      
] 

const getEmailsAdmins = (array:User[]) :string[] =>{

    const getAdiminUsers = array.filter((user:User)=>{
        return user.role === ROLE.ADIMIN
    })

    const getEmails = getAdiminUsers.map((user:User)=>{
        return user.email
    })

    return getEmails
}

console.log(getEmailsAdmins(userList))
