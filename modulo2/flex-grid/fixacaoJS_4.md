```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let vezesQAprece = 0;
  let resultado;
  for (let i = 0; i < arrayDeNumeros.length; i++){
      if(numeroEscolhido === arrayDeNumeros[i]){
        vezesQAprece++;
      
      }
    }
    if (vezesQAprece === 0){
      resultado = 'Número não encontrado'
    }else {
      resultado = `O número ${numeroEscolhido} aparece ${vezesQAprece}x`      
    }
  
  return resultado;
}```