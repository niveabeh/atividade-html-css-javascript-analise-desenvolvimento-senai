function validaProc() {
     
     // Um professor do SENAI gostaria de uma aplicação que fizesse o cálculo da média de 
     // seus 5 (cinco) alunos no bimestre. Como o bimestre é composto por 2 (duas) notas, 
     // crie 2 (dois) vetores para armazenar cada uma das notas dos alunos. Depois, crie 
     // outro vetor com o resultado da média dos alunos, seguindo a seguinte fórmula:
    let nota1 =[], nota2 =[], media =[];    
     for(let i =0; i < 3; i++){
        nota1[i] = parseFloat(prompt("Informe a nota do Primeiro semestre: "));
        nota2[i] = parseFloat(prompt("Informe a nota do Seg semestres: "));
     }
     for(let i =0; i < 3; i++){
        media[i] = (nota1[i]+ nota2[i])/2 
        console.log(`Aluno ${i+1}\n`)
        for(let y = 0; y <2; y++){
            console.log(`1º Semestre: ${nota1[y]}\n2º Semestre: ${nota2[y]}\nMédia: ${media[i]}`)
        }
     }
      return false;
     
}




