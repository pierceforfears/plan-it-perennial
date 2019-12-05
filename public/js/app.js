function getData(id) {
  $.get("/api/regions/" + id, function(data) {
    console.table(data.Plants);
    $(".main-section").empty();
    let newPlant = data.Plants;
    let regionPlants = [];
    for (let i = 0; i < newPlant.length; i++) {
      if (newPlant[i] !== undefined) {
        newPlant.push(regionPlants[i]);
        $(".grid-container").append(`
      <div class="media-object">
      <div class="media-object-section">
        <div class="thumbnail">
        <img src="../${newPlant[i].img_url}">
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
