function getData(id) {
  $.get("/api/regions/" + id, function(data) {
    console.table(data.Plants);
    $(".main-section").empty();
    let newPlant = data.Plants;
    let regionPlants = [];
    for (let i = 0; i < newPlant.length; i++) {
      newPlant.push(regionPlants[i]);
      $(".main-section").append(`<img src="../${newPlant[i].img_url}">`);
      $(".main-section").append(`<h4>${newPlant[i].common_name}</h4>`);
      $(".main-section").append(`<h5>${newPlant[i].scientific_name}</h5>`);
      $(".main-section").append(`<p>${newPlant[i].description}</p>`);
      $(".main-section").append(`<hr/>`);
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
