$('#pagination-demo').twbsPagination('destroy');

$('#pagination-demo').twbsPagination({
    totalPages: 5,
    // the current page that show on start
    startPage: 1,

    // maximum visible pages
    visiblePages: 5,

    // Text labels
    first: 'First',
    prev: 'Previous',
    next: 'Next',
    last: 'Last',

    // callback function
    onPageClick: function (event, page) {
        $('.d-block').removeClass('d-block');
        $('#page' + page).addClass('d-block');
    },
});


