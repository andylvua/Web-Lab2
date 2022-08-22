let root = $('html');
$('#toggle_theme').click(function() {
    console.log('Toggling theme');
    console.log(root.attr('class'));

    if (root.attr('class') === 'light') {
        $('html').attr('class', 'dark');
    } else if (root.attr('class') === 'dark') {
        $('html').attr('class', 'light');
    }
});
