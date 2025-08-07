function validaFormulario(){
    if(document.frmcadastro.txtnome.value == ""){
        alert("Preencha o campo Nome");
        document.frmcadastro.txtnome.focus();
        return false;
    }else if(document.frmcadastro.txtfone.value ==""){
            alert("Preencha o compo Telefone");
            document.frmcadastro.txtfone.focus();
            return false;
        }else if(document.frmcadastro.txtemail.value ==""){
                alert("Preencha o compo E-mail");
                document.frmcadastro.txtemail.focus();
                return false;
            }else{
                alert("Todos preenchidos - Saindo");
                return true;
            }
}