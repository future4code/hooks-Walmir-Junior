function calculaNota(ex, p1, p2) {
  
    const pv1 = p1*2;
    const pv2 = p2*3;
    const media = (ex + pv1 + pv2) / 6;
    let resultado = '';
    
    if (media >= 9){
      resultado = 'A';
    } else if (media < 9 && media >= 7.5){
      resultado = 'B';
    } else if (media < 7.5 && media >= 6){
      resultado = 'C';
    } else {
      resultado = 'D';
    }
  return resultado;
}
