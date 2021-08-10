$(document).ready(function() {
    $('.filterBtn a').click(function(){
        $('#filterSection').toggleClass('show');
    });   

    $(".displayItem").slice(0, 20).show();
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".displayItem:hidden").slice(0, 20).slideDown();
            if($(".displayItem:hidden").length == 0) {
                $("#loadMore").addClass("noContent");
            }
        });


    //filter
       $(".filterItem a[data-filter='all']").click(function(){
        console.log("test OK");
        $(".displayItem").filter("[data-category*='cat2']").addClass("testOKaaabbb"); 
       });
});

