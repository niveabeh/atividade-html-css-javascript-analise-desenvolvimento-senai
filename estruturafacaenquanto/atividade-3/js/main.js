function validaProc(){
    
   let qtdAlunos = parseInt(prompt("Turma 1 - Informe a quantidade de alunos: "));
    acumuladorAlunos += qtdAlunos
    do{
        decrementar = qtdAlunos 
        notasAlunos = parseFloat(prompt("Informe a nota do aluno: "));
        acumuladorNotas += acumuladorAlunos
        decrementar--
    }while(qtdAlunos == 0)
}
 