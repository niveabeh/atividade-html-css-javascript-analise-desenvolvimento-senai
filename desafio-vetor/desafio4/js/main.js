function validaProc() {
     
   // A empresa “ORDEM DECRESCENTE” necessita de uma solução que alimente um 
   // vetor com 4 valores numéricos inteiros. Como resultado deseja-se que imprima os 
   // valores na ordem inversa com que foram armazenadas, ou seja, do valor localizado 
   // na última posição para o valor localizado na primeira posição do vetor

      let vetor = [];
      for(let i = 0; i < 4; i++){
         vetor[i] = parseInt(prompt("Informe o valor: "));
      }
      console.log(vetor);
      console.log("=============");
      console.log([...vetor].reverse());
      

      return false;
     
}




