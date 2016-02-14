$(document).ready(function () {
    $('.datetime').each(function () {
        $(this).html(moment($(this).attr('datetime')).format('MMM YYYY'));
    });
});