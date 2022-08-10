const imprimeTresCoresFavoritas = (cor1:string, cor2:string, cor3:string ) :string [] =>  {
    const colorList = []
    colorList.push(cor1,cor2,cor3)
    
    return colorList
}

console.log(imprimeTresCoresFavoritas("am", "re", "bb"))