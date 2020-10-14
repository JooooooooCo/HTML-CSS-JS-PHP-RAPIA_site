// Pega width da tela do navegador
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

// Navbar oculta ao rolar a pagina para mobile
if (getWidth() < 577){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
    }
}




/*
// Navbar responsiva - oculta menu para mobile topnavLogo
function respNavbar() {
    var x = document.getElementById("topnavMenuExtended");
    if (x.className === "topnav-menu-extended") {
    x.className += " responsive";
    } else {
    x.className = "topnav-menu-extended";
    }

    var x = document.getElementById("topnavLogo");
    if (x.className === "topnav-logo") {
    x.className += " responsive";
    } else {
    x.className = "topnav-logo";
    }
}
*/



// Status Mensagem Contato - fechar popup
function fecharStatusMensagemContato() {
    document.getElementById("popupStatusMensagemContato").style.display = "none";
}


// Função Validar formulario contato
function validarContactForm() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
  
    if (nome.value == "") {
      alert("Nome não informado");  
      nome.focus();
      return;
    }
    if (email.value == "") {
      alert("Email não informado");
      email.focus();
      return;
    } else {
        usuario = email.value.substring(0, email.value.indexOf("@"));
        dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
        } else {
        alert("Email inválido");
        email.focus();
        return;
        }
    }

    if (telefone.value == "") {
      alert("Telefone não informado");
      telefone.focus();
      return;
    }
    contactForm.submit();
  }



// slider cards nossas solucoes -> vantagens mostrar e ocultar
function cardVantagensClick(i) {
    var x = document.getElementById("cardVantagens" + i);
    if (x.className === "nossassolucoesmaincardscardvantagens") {
        x.className += " selected";
    } else {
        x.className = "nossassolucoesmaincardscardvantagens";
    }
}
function cardVantagensOut(i) {
    var x = document.getElementById("cardVantagens" + i);
    if (x.className === "nossassolucoesmaincardscardvantagens") {
    } else {
        x.className = "nossassolucoesmaincardscardvantagens";
    }
}
