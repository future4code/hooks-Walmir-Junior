var ROLE;
(function (ROLE) {
    ROLE["ADIMIN"] = "Adimin";
    ROLE["USER"] = "User";
})(ROLE || (ROLE = {}));
const userList = [
    { name: "Rogério", email: "roger@email.com", role: ROLE.USER },
    { name: "Ademir", email: "ademir@email.com", role: ROLE.ADIMIN },
    { name: "Aline", email: "aline@email.com", role: ROLE.USER },
    { name: "Jéssica", email: "jessica@email.com", role: ROLE.USER },
    { name: "Adilson", email: "adilson@email.com", role: ROLE.USER },
    { name: "Carina", email: "carina@email.com", role: ROLE.ADIMIN }
];
const getEmailsAdmins = (array) => {
    const getAdiminUsers = array.filter((user) => {
        return user.role === ROLE.ADIMIN;
    });
    const getEmails = getAdiminUsers.map((user) => {
        return user.email;
    });
    return getEmails;
};
console.log(getEmailsAdmins(userList));
//# sourceMappingURL=ex5.js.map