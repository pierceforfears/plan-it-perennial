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

  if (
    flower.common_name === "" ||
    flower.scientific_name === "" ||
    flower.img_url === "" ||
    flower.description === "" ||
    flower.region === "Select One"
  ) {
    console.log("Hey....  Wait a second....");
    $("#addedFlower").empty();
    $("#addedFlower").append(`
    <h1>Hmmmmm....</h1>
      <p class="lead">Looks like there is some missing information.</p>
      <p>Could you please fill in the gaps?</p>
      <button
        class="close-button"
        data-close
        aria-label="Close modal"
        type="button"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    `);
  } else {
    $.post("/api/plants", flower).then(function(data) {
      console.log(data);
      $("#addedFlower").empty();
      $("#addedFlower").append(`
      <h1>Thank You!</h1>
      <p class="lead">Your flower has been added.</p>
      <button
        class="close-button"
        data-close
        aria-label="Close modal"
        type="button"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      `);
    });
  }

  $("#plantName").val("");
  $("#science").val("");
  $("#imageUrl").val("");
  $("#describe").val("");
  $("#regionSel").prop("selectedIndex", 0);
});
