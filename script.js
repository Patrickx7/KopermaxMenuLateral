$(document).ready(function(){
    $(".menu-button").click(function(event){
        if(!$(this).attr('href')|| $(this).attr('href') === "chamados.html"){
            event.preventDefault();
            $(".menu-bar").toggleClass( "open" );
        }
    $(".menu-bar").toggleClass( "open" );
    })
    })
    