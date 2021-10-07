$(function () {
    // filter area
    $("#filterBtn,.filterArea .closeBtn,.filterItem a").click(function () {
        $(".wrapper").toggleClass("active");
    });

    //paginathing
    $('#sampleContent').paginathing({
        perPage: 20,
    })

    //popup
    $('.popupBtn').click(function () {
        $(this).next(".popup").toggleClass('hidden');
    });
    $('.popupBg').click(function () {
        $(".popup").addClass('hidden');
    })
});