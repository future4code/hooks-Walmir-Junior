const dnaToRna = (dna:string) :string => {
    
    const listDna = dna.toUpperCase().split("")
    
    const lettersDna  = listDna.map((letter) =>{
        switch (letter) {
            case "A":
              return letter = "U"

            case "T":
              return letter = "A"

            case "C":
              return letter = "G"

            case "G":
              return letter = "C" 
        }
    })
    
    let rna = lettersDna.join("")


    return rna
}

console.table(dnaToRna("ATTGCTGCGCATTAACGACGCGTA"))

