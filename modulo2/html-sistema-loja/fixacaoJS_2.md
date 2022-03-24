function calculaPrecoTotal(quantidade) {
  const meiaDuzia = 6;
  const umaDuzia = 12;
  const valorMeiaduzia = 1.30;
  const valorUmaDuzia = 1;
  let total = 0;
  
  if(quantidade < meiaDuzia){
    
    total = quantidade * valorMeiaduzia;
    
  };
  
  if(quantidade >= umaDuzia){
    
    total = quantidade * valorUmaDuzia;
    
  };
  
  return total;
}
