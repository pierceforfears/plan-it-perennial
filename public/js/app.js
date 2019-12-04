// $(".state>a").on("click", function() {
//   // console.log("ive been clicked");
//   console.log($(this).data("region"));

// });

// function getData(id){
//   const
//   $.get("/api/regions/:" + id, function(data){
//     if(data){

//     }
//   })
// }

$(".state>a").on("click", function() {
  console.log($(this).data("region"));
  $(this).data("region");
  const item = {
    id: $(this)
      .parents("tr")
      .find(".id")
      .text(),
    common_name: $(this)
      .parents("tr")
      .find(".common_name")
      .text(),
    scientific_name: $(this)
      .parents("tr")
      .find(".scientific_name")
      .text(),
    image_url: $(this)
      .parents("tr")
      .find(".image_url")
      .text(),
    description: $(this)
      .parents("tr")
      .find(".description")
      .text()
  };
});
