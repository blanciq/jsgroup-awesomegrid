define('ajaxCalls', ['jquery'],function($) {

    $(function () {
        $('#get-data').click(function(event) {
            $.get('home/GetHtmlJsGroupMember', { index: '1' })
                .done(function (data) {
                    $('.grid-body').append(data);
                    $('.grid-row').fadeIn();
                }).fail(function() {
                console.log('jest babol!');
            });
        });
    });
});
