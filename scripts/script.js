$('a').click(function() {
    console.log('Selected section: ' + $(this).attr('href'));
    $('a').removeClass('active');
    $(this).addClass('active');
});
