/**
 * Inicialização do service worker (se o browser suportar)
 * e somente após a página estiver devidamente carregada.
 */
if ('serviceWorker' in navigator) {
    /* Evento para quando a página for carregada... */
    console.log('window.addEventListener(load) criado');
    window.addEventListener('load', function() {
        /* Faz o registro do service worker */
        console.log('window.addEventListener(load) disparado');
        navigator.serviceWorker.register('sw.js').then(() => { 
            console.log('Service Worker Registered');
        });
    });
}

/**
 * Código motor da aplicação
*/

(function(){
    console.log('$(document).ready criado');
    $(document).ready(function(){
        console.log('$(document).ready disparado');
        setTimeout(function(){
            console.log('mostrar mainScreen');
            $("#splashScreen").slideUp("normal",function(){
                $("#mainScreen").fadeIn("normal",function(){

                    /* codigo aqui... */

                });
            });
        }, 1000);
    });
})();