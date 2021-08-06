window.addEventListener("load", function(event) {

    console.log('==> [WINDOW.LOAD]');

    /**
     * Inicialização do service worker (se o browser suportar)
     * e somente após a página estiver devidamente carregada.
     */
     if ('serviceWorker' in navigator) {

        console.log("==> [HAS.SERVICEWORKER]");
        navigator.serviceWorker.register('sw.js').then(() => { 
            console.log("==> [SERVICEWORKER.REGISTERED]");
        });

    } else {
        console.log("==> [NO.SERVICEWORKER]");
    }

    /* programa mostrar a tela principal depois do lading... */
    setTimeout(function(){

        console.log('==> [MAINSCREEN.SHOW]');
        $("#splashScreen").slideUp("normal",function(){
            $("#mainScreen").fadeIn("normal",function(){

                console.log('==> [MAINSCREEN.SHOWED]');

                /* TESTE PARA VER SE O SCRIPT CARREGOU E ESTA FUNCIONAL */
                $("#btnTestingMe").click(function(){

                    alert('Hey, I am working.');

                });

            });
        });

    }, 2000);

});