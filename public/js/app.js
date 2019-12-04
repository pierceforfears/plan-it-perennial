function getData(id) {
  $.get("/api/regions/" + id, function(data) {
    console.log(data.Plants);
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

// let region = [];
// //this is the function to render all items in a database.
// const renderItems = function(items) {
//   items.forEach(function(item) {
//     let newRegion = $(` <tr>
//           <td class="common_name">${item.common_name}</td>
//           <td class="scientific_name">${item.scientific_name}</td>
//           <td class="image_url">${item.image_url}</td>
//           <td class="description">${item.description}</td>
//         </tr>`);
//     $(".tbodypage").append(newRegion);
//   });
// };

// $(".state>a").on("click", function() {
//   console.log($(this).data("region"));
//   $(this).data("region");
//   const plant = {
//     id: $(this)
//       .parents("tr")
//       .find(".id")
//       .text(),
//     common_name: $(this)
//       .parents("tr")
//       .find(".common_name")
//       .text(),
//     scientific_name: $(this)
//       .parents("tr")
//       .find(".scientific_name")
//       .text(),
//     image_url: $(this)
//       .parents("tr")
//       .find(".image_url")
//       .text(),
//     description: $(this)
//       .parents("tr")
//       .find(".description")
//       .text()
//   };
//   console.log(plant);

//   console.table(region);
// });
