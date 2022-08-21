const returnType = (any:any) :any => {

    const discoverType =  typeof(any)

    return discoverType
}

console.log(returnType(2))
console.log(returnType("1"))
console.log(returnType(true))

