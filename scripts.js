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
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    if (getWidth() < 577){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
            document.getElementById("nav").style.display = "none";
        } else {
            document.getElementById("header").style.top = "-100%";
            document.getElementById("nav").style.display = "none";
        }
        prevScrollpos = currentScrollPos;
    } else {
        document.getElementById("header").style.top = "0";
        document.getElementById("nav").style.display = "block";
    }
}

// Navbar responsiva - oculta menu para mobile topnavLogo
function showNavMenu() {
    if (document.getElementById("nav").style.display != "block") {
        document.getElementById("nav").style.display = "block";
    } else {
        document.getElementById("nav").style.display = "none";
    }
}


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
