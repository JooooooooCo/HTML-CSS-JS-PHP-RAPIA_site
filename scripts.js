/*
// Navbar oculta ao rolar a pagina
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("topnavMenuExtended").style.top = "0";
            } else {
                document.getElementById("topnavMenuExtended").style.top = "-10rem";
            }
            prevScrollpos = currentScrollPos;
            }
        </script>
*/

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
