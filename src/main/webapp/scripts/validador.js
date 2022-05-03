/**
 * Validação de formulário
 * @author Renato Ganske Júnior
 */
 
 function validar() {
	let nome = frmContato.nome.value;
	let fone = frmContato.fone.value;
	
	if (nome === "") {
		alert("Preencha o campo Nome.");
		frmConteto.nome.focus();
		return false;
	} else if (fone === "") {
		alert("Preencha o campo Fone.");
		frmConteto.fone.focus();
		return false;
	} else {
		document.forms["frmContato"].submit();
	}
		
}