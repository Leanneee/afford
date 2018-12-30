//nav hover style
$(document).ready(function () {
    $('.sub-menu').hover(function () {
            $(this).parent().find('a:first').addClass('active');
        },
        function () {
            $(this).parent().find('a:first').removeClass('active');
        }
    );
});