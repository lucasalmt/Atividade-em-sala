$(document).ready(function(){
    $('.btn_Mobile').on('click', function() {
        $('.navList_Mobile').toggleClass('active');
        $('.btn_Mobile').find('i').toggleClass('fa-x');
    });
    
    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
    });

    window.revelar = ScrollReveal({reset:true});

    revelar.reveal('.sobremim_info', {
        duration: 2000,
        origin: 'left', 
        distance: '70%' 
    });

    revelar.reveal('.sobremim_imagem', {
        duration: 2000,
        origin: 'right', 
        distance: '70%' 
    });

    revelar.reveal('.projetos', {
        duration: 2000, 
        distance: '20%', 
        origin: 'bottom',
    });

    revelar.reveal('.projetos2', {
        duration: 2000, 
        distance: '20%', 
        origin: 'bottom',
    });

    revelar.reveal('.projetos3', {
        duration: 2000, 
        distance: '20%', 
        origin: 'bottom',
    });

    revelar.reveal('.contato', {
        duration: 2000, 
        distance: '20%', 
        origin: 'bottom',
    });

    

});