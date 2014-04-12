$(document).ready(function(){
    largura = $(window).width();
    altura = $(window).height();
    $('#main').css("height", altura);

    var tmp_main_menu = ' ';

    //Carrega menu principal na pagina.
    //--------------------------------

    //Funcao 'abre' a sidebar
    $('.menu-anchor').on('click touchstart', function(e){
        if($('#menu').hasClass('menu')){
            $('#menu').removeClass('menu').addClass('menu-active');
        }else{
            $('#menu').removeClass('menu-active').addClass('menu');

        }
    e.preventDefault();
    });
    //-------------------
    $('.menu-header-home').on('click touchstart', function(e){
        $('.menu-content').load('main-menu.html');
    });
    //------------------





    $('.main-menu-mensagens').on('click touchstart', function(e){
        $('.menu-content').load('mensagens/mensagens.html');
    });

    $('.main-menu-onDemand').on('click touchstart', function(e){
        $('.menu-content').load('onDemand.html');
    });
    $('.main-menu-programas').on('click touchstart', function(e){
        $('.menu-content').load('Programas/programas.html');
    });
    $('.main-menu-programacao').on('click touchstart', function(e){
        $('.menu-content').load('Programacao/programacao.html');
    });

});












