const reverse = (string:string) :string => {
    let reverseWord = string.split("").reverse().join("").toLocaleUpperCase()

    return reverseWord
}

console.log(reverse("ia uem sued"))