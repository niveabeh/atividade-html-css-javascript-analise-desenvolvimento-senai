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
      let index = [];
      let contador = 0;
      for(let i = 0; i < 10; i++){
         console.log(`${numero[i]}`)
         if(numero[i] == buscaNum){
            index[i] = i;
            contador++;
         }
      }
      console.log(`Numero de busca: ${buscaNum}\nQuantidade: ${contador}\nIndex: `);
      index.forEach(num => console.log(num));
      return false;
     
}




