/**
 * Inicialização do service worker
 */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js')
        .then(() => { 
            console.log('Service Worker Registered'); 
        });
}

/**
 * Código motor da aplicação
*/

(function(){
    $(document).ready(function(){

        /* Put your code here... */
        setTimeout(function(){
            $("#lblLoading").html("Loaded. Ready!");
        }, 500);

    });
})();