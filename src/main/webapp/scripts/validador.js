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


function mask(o) {
  setTimeout(function () {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}