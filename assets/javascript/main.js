$(document).ready(function () {
  //cms
  $.ajax({
      url: 'https://hikidashi.microcms.io/api/v1/site',
      type: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '66568137-a8f8-4dfc-af36-5beb2f8709d1'
      },
    })
    .done(function (data) {
      let source = $('#displayTemplate').html();
      let template = Handlebars.compile(source);
      let html = template({
        data: data.contents
      });
      $('#displaySection').html(html);
    });
  //display value
  //     if($(".displayItem").length <= 20) {
  //         $("#loadMore").addClass("noContent");
  // }   
  // $('.filterBtn a').click(function(){
  //     $('#filterSection').toggleClass('show');
  // });   

  // $(".displayItem").slice(0, 20).show();
  // $("#loadMore").on("click", function(e){
  //     e.preventDefault();
  //     $(".displayItem:hidden").slice(0, 20).slideDown();
  //         if($(".displayItem:hidden").length == 0) {
  //             $("#loadMore").addClass("noContent");
  //         }
  //     });

  //sampleNum
  let sampleNum = $("#displayTemplate .displayItem").length;
  $(".totalPage p").html(`total page ${sampleNum}`);

  //filter
  $(".filterItem a[data-filter='all']").click(function () {
    console.log("test OK");
    $(".displayItem").filter("[data-category*='cat2']").addClass("testOKaaabbb");
  });

});