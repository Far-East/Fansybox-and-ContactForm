jQuery(document).ready(function($) {

$( '.gallery-item a' ).addClass( 'fedev-fansy' );
$('a.fedev-fansy').attr('data-fancybox', 'group');
$('a.fedev-fansy')[0].setAttribute('data-fancybox', 'group');

    // Init fancyBox
    // $().fancybox({
    //   selector : '[data-fancybox="group"]',
    //   thumbs : {
    //     autoStart : false // миниатюры внутри окна
    //   },
    //   loop : true,  // зацикливание
    //   protect: true,  // защита от копирования
    //   infobar : true,
    //   toolbar : true,
    //     buttons : [
    //         'slideShow',
    //         'fullScreen',
    //         'thumbs',
    //         'close',
    //         'share'
    //     ],  

    // });

});