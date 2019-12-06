function getData(id) {
  $.get("/api/regions/" + id, function(data) {
    console.table(data.Plants);
    $(".main-section").empty();
    let newPlant = data.Plants;
    let regionPlants = [];
    let region = "";

    switch (id) {
      case "1":
        region = "Northeast";
        break;
      case "2":
        region = "Mid-Atlantic";
        break;
      case "3":
        region = "Southeast";
        break;
      case "4":
        region = "Florida";
        break;
      case "5":
        region = "Great Lakes";
        break;
      case "6":
        region = "Midwest";
        break;
      case "7":
        region = "Southern Plains";
        break;
      case "8":
        region = "Northern Plains";
        break;
      case "9":
        region = "Mountain";
        break;
      case "10":
        region = "Southwest";
        break;
      case "11":
        region = "California";
        break;
      case "12":
        region = "Maritime Northwest";
        break;
      case "13":
        region = "Hawaii";
        break;
      case "14":
        region = "Alaska";
        break;
    }
    console.log(region);
    $(".grid-container").append(`
        <div class="grid-x align-center">
          <h2 class="regionText">${region}</h2>
        </div>
        <hr>
        `);

    for (let i = 0; i < newPlant.length; i++) {
      if (newPlant[i] !== undefined) {
        newPlant.push(regionPlants[i]);
        $(".grid-container").append(`
      <div class="media-object">
      <div class="media-object-section">
        <div class="thumbnail">
        <img src="../${newPlant[i].img_url}" alt="Perennial Flower">
        </div>
      </div>
      <div class="media-object-section">
      <h3>${newPlant[i].common_name}</h3>
      <h5><em>${newPlant[i].scientific_name}</em></h5>
      <p>${newPlant[i].description}</p>
      </div>
    </div>
      `);
      }
    }
  });
}

$(".state>a").on("click", function() {
  let id = $(this).data("region");
  window.location.href = "/display?regionId=" + id;
});

if (window.location.pathname === "/display") {
  const params = new URLSearchParams(window.location.search);
  const regionId = params.get("regionId");
  getData(regionId);
}
