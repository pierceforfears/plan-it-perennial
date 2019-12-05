$("#addFlower").on("click", function() {
  event.preventDefault();
  let flower = {
    common_name: $("#plantName")
      .val()
      .trim(),
    scientific_name: $("#science")
      .val()
      .trim(),
    img_url: $("#imageUrl")
      .val()
      .trim(),
    description: $("#describe")
      .val()
      .trim(),
    region: $("#regionSel option:selected").val()
  };
  $.post("/api/plants", flower).then(function(data) {
    console.log(data);
    alert("Thank you!");
  });

  $("#plantName").val("");
  $("#science").val("");
  $("#imageUrl").val("");
  $("#describe").val("");
  $("#regionSel").prop("selectedIndex", 0);

  //console.log(flower);
});
