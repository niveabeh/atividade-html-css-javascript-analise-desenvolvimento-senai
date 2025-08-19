function validaProc() {
     
   // Professor “Ludovico Volpato” está de volta e deseja uma solução que alimente um 
   // vetor com 10 valores inteiros e também que solicite ao usuário a entrada de dados de 
   // um valor inteiro qualquer. A solução deverá fazer uma busca do valor, informado pelo 
   // usuário, no vetor e imprima a posição em que este foi encontrado ou se não foi 
   // encontrado.

   let numero = [];
      for(let i = 0; i < 10; i++){
         numero[i] = parseInt(prompt("Informe um número: "))
      }
      let buscaNum = parseInt(prompt("Informe o número que deseja buscar: "));
      let boolean = false;
      let index = [], contador = 1;

      for(let i = 0; i < 10; i++){
         if(numero[i] == buscaNum){
            index[i] = i ;
            contador++;
            boolean = true;
         }
      } 
      if(boolean == true){
         alert(`Número: ${buscaNum}\nO valor foi encontrado: ${contador}\nIndex: ${index[]}`)
      }else{
         alert(`O valor não foi encontrado`)
      }
      for(let i = 0; i < index.length; i++){
         
      }   
      return false;
     
}




