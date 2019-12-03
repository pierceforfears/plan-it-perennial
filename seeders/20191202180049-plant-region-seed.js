"use strict";

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.bulkInsert("Regions", [
      {
        name: "Northeast",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mid-Atlantic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Southeast",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Florida",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Great Lakes",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Midwest",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Southern Plains",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Northern Plains",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mountain",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Southwest",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "California",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Maritime Northwest",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hawaii",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Alaska",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    return await queryInterface.bulkInsert("Plants", [
      //Region 1 (Northeast)
      {
        common_name: "Spiderwort",
        scientific_name: "Tradescantia virginiana",
        img_URL: "",
        description: "The attractive flowers of this unique iris-relative are frequented by bumble bees and other pollinators; shade tolerant",
        RegionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Blue vervain",
        scientific_name: "Verbena hastata",
        img_URL: "",
        description: "A preferred nectar plant for bees, butterflies, hover flies, and bee flies; choose Verbena stricta for drier soils",
        RegionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Boneset",
        scientific_name: "Eupatorium perfoliatum",
        img_URL: "",
        description: "Flat-topped clusters of fluffy, nectar-rich flowers attract many kinds of insects; tolerant of partial shade and wet soils",
        RegionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "New England aster",
        scientific_name: "Symphyotrichum novae-angliae",
        img_URL: "",
        description: "One of the latest fall-blooming plants; frequented by honey bees and pre-hibernation bumble bee queens",
        RegionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 2 (Mid Atlantic)
      {
        common_name: "Smooth penstemon",
        scientific_name: "Penstemon digitalis",
        img_URL: "",
        description: "Semi-evergreen; prolific nectar producer; visited by many butterflies, moths, and bees, including honey bees",
        RegionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Wild indigo",
        scientific_name: "Baptisia tinctoria",
        img_URL: "",
        description: "Fixes nitrogen that can be used by other plants; attracts a wide diversity of pollinators, including the beautiful Io moth (Automeris io)",
        RegionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Wild bergamot",
        scientific_name: "Monarda fistulosa",
        img_URL: "",
        description: "Hawk moths, hummingbirds, and long-tongued bumble bees (such as Bombus pensylvanicus) are common visitors",
        RegionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Sneezeweed",
        scientific_name: "Helenium autumnale",
        img_URL: "",
        description: "Striking flowers with domed centers and distinctive tri-lobed rays; attracts leafcutter bees, bumble bees, and honey bees",
        RegionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 3 (Southeast)
      {
        common_name: "White wild indigo",
        scientific_name: "Baptisia alba",
        img_URL: "",
        description: "Legume; very attractive to bees; host for hoary edge and frosted elfin butterflies, and the black-spotted prominent moth",
        RegionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Lanceleaf coreopsis",
        scientific_name: "Coreopsis lanceolata",
        img_URL: "",
        description: "Extended bloom period makes coreopsis a valuable addition to pollinator gardens; host plant for the common tan wave moth",
        RegionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Black-eyed Susan",
        scientific_name: "Rudbeckia hirta",
        img_URL: "",
        description: "Supports bees and birds with nectar and seed; host for the gorgone checkerspot and bordered patch butterfly; easy to grow",
        RegionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Eastern rosemallow",
        scientific_name: "Hibiscus moscheutos",
        img_URL: "",
        description: "Showy flowers offer nectar to many insects; a host for the specialist hibiscus bee, gray hairstreak, and Io and other moths",
        RegionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Narrowleaf sunflower",
        scientific_name: "Helianthus angustifolius",
        img_URL: "",
        description: "Supports many longhorned bees that are sunflower specialists; host plant for numerous butterflies and moths",
        RegionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 4 (Florida)
      {
        common_name: "Dotted horsemint",
        scientific_name: "Monarda punctata",
        img_URL: "",
        description: "Showy pink bracts attract bees, butterflies, wasps (aphid predators) to nectar-rich blooms; fragrant foliage produces thymol",
        RegionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Rattlesnake master",
        scientific_name: "Eryngium yuccifolium",
        img_URL: "",
        description: "Supports a huge diversity of bees, butterflies, and other insects with beautiful, unique flowers; E. aquaticum also recommended",
        RegionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Seaside goldenrod",
        scientific_name: "Solidago sempervirens",
        img_URL: "",
        description: "Goldenrods (Solidago spp.) are vital late nectar sources for migrating insects, pre-hibernation bumble bee queens, and honey bees",
        RegionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 5 (Great Lakes)
      {
        common_name: "Wild lupine",
        scientific_name: "Lupinus perennis",
        img_URL: "",
        description: "Larval host plant for the endangered Karner blue butterfly (Lycaeides melissa samuelis; shown), and various other blue butterflies",
        RegionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Cup plant",
        scientific_name: "Silphium perfoliatum",
        img_URL: "",
        description: "Attracts many bees and butterflies; thick hollow stems make excellent nests for leafcutter bees and small carpenter bees (Ceratina spp.)",
        RegionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Joe Pye weed",
        scientific_name: "Eutrochium fistulosum",
        img_URL: "",
        description: "Primarily known as a butterfly plant, Joe Pye weed also attracts bees; tolerant of partial shade and wet soils",
        RegionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Bottle gentian",
        scientific_name: "Gentiana andrewsii",
        img_URL: "",
        description: "Its flower petals never open; almost exclusively pollinated by bumble bees, which pry the petals apart to climb inside",
        RegionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 6 (Midwest)
      {
        common_name: "Cream wild indigo",
        scientific_name: "Baptisia bracteata",
        img_URL: "",
        description: "Visited by queen bumble bees (Bombus spp.) and other long-tongued bees",
        RegionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Golden Alexanders",
        scientific_name: "Zizia aurea",
        img_URL: "",
        description: "Host plant for black swallowtail butterfly; shallow nectaries attract small beneficial wasps, bees, and flies",
        RegionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Purple prairie clover",
        scientific_name: "Dalea purpurea",
        img_URL: "",
        description: "Honey bees and bumble bees are voracious visitors, as well as several specialist polyester bees (Colletes spp.)",
        RegionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Field thistle",
        scientific_name: "Cirsium discolor",
        img_URL: "",
        description: "Not to be confused with non-native thistles; a now uncommon but important plant for butterflies and bumble bees",
        RegionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 7 (Southern Plains)
      {
        common_name: "Antelope horns milkweed",
        scientific_name: "Asclepias asperula ssp. capricornu",
        img_URL: "",
        description: "Asclepias spp. are host plants for monarch, queen, and soldier (Danaus spp.) butterflies; highly attractive to bees and beneficial insects",
        RegionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Lemon beebalm",
        scientific_name: "Monarda citriodora",
        img_URL: "",
        description: "Hawk moths, hummingbirds, and long-tongued bees (including bumble bees) are visitors; grows as an annual, biennial, or perennial",
        RegionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Baldwin's Ironweed",
        scientific_name: "Vernonia baldwinii",
        img_URL: "",
        description: "Grows under a variety of conditions; spreads via rhizomes; this and other Vernonia spp. attract late summer butterflies and bees",
        RegionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Maximilian sunflower",
        scientific_name: "Helianthus maximiliani",
        img_URL: "",
        description: "This plant may spread easily, via rhizome and seed; very attractive to a huge diversity of bees and other pollinators",
        RegionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 8 (Northern Plains)
      {
        common_name: "American vetch",
        scientific_name: "Vicia americana",
        img_URL: "",
        description: "Vining legume; visited by bumble bees, honey bees, and sweat bees; attractive to birds and other wildlife",
        RegionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Scarlet globemallow",
        scientific_name: "Sphaeralcea coccinea",
        img_URL: "",
        description: "Sphaeralcea spp. are drought tolerant; visited by bees and butterflies",
        RegionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Showy ticktrefoil",
        scientific_name: "Desmodium canadense",
        img_URL: "",
        description: "Legume; grows well in moist sandy or rocky soils; highly attractive to bees and beneficial flies",
        RegionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Stiff sunflower",
        scientific_name: "Helianthus pauciflorus",
        img_URL: "",
        description: "Easy to grow, but can spread; draws in many pollinators",
        RegionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 9 (Mountain)
      {
        common_name: "Western pearly everlasting",
        scientific_name: "Anaphalis margaritacea",
        img_URL: "",
        description: "Caterpillars of the American painted lady butterfly (Vanessa virginiensis) and the painted lady butterfly (Vanessa cardui) feed on its leaves",
        RegionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Prickly pear cactus",
        scientific_name: "Opuntia spp.",
        img_URL: "",
        description: "Edible but must be properly prepared so that spines are not injested",
        RegionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Rocky Mountain penstemon",
        scientific_name: "Penstemon strictus",
        img_URL: "",
        description: "Royal blue to purple flowers; Attracts a large number of native bee species",
        RegionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Yellow bee plant",
        scientific_name: "Cleome lutea",
        img_URL: "",
        description: "Named for its yellow flowers and its bee-attracting qualities",
        RegionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Sego Lily",
        scientific_name: "Calochortus nuttallii",
        img_URL: "",
        description: "The state flower of Utah; Roots were consumed during a famine in the 19th century",
        RegionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 10 (Southwest)
      {
        common_name: "Rainbow cactus",
        scientific_name: "Echinocereus pectinatus",
        img_URL: "",
        description: "Keep soil completely dry as it is prone to root rot",
        RegionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Wholeleaf Indian paintbrush",
        scientific_name: "Castilleja integra",
        img_URL: "",
        description: "Roots grow extensively, avoid transplanting as it may kill it",
        RegionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Silvery lupine",
        scientific_name: "Lupinus argenteus",
        img_URL: "",
        description: "Important food source for butterflies",
        RegionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Sacred thorn-apple",
        scientific_name: "Datura wrightii",
        img_URL: "",
        description: "All parts of the plant are poisonous to humans and animals, do not eat",
        RegionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Parry’s beardtongue",
        scientific_name: "Penstemon parryi",
        img_URL: "",
        description: "Can withstand extreme temperatures and lack of water",
        RegionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      //Region 11 (California)
      {
        common_name: "Cleveland sage",
        scientific_name: "Salvia clevelandii",
        img_URL: "",
        description: "Showy flowers attract bees, butterflies, and hummingbirds; extremely fragrant foliage; requires good drainage",
        RegionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Summer lupine",
        scientific_name: "Lupinus formosus",
        img_URL: "",
        description: "This and other lupines are highly attractive to bumble bees and visited by many other native bees",
        RegionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "California goldenrod",
        scientific_name: "Solidago velutina ssp. califonica",
        img_URL: "",
        description: "Important late-season forage for bees, butterflies, beneficial solitary wasps, pollen-eating soldier beetles, and more",
        RegionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 12 (Maritime Northwest)
      {
        common_name: "Common camas",
        scientific_name: "Camassia quamash",
        img_URL: "",
        description: "Slow to establish from seed; establishes better from bulb; prefers moist soil, drought-tolerant after bloom; bulbs attractive to wildlife",
        RegionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Selfheal",
        scientific_name: "Prunella vulgaris ssp. lanceolata",
        img_URL: "",
        description: "Easy to establish from seed; fast-growing ground cover that will tolerate mowing or grazing; highly attractive to various pollinators",
        RegionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        common_name: "Hall's aster",
        scientific_name: "Symphyotrichum hallii",
        img_URL: "",
        description: "Establishes better from transplant; drought-tolerant rhizomatous plant; one of the latest fall-blooming plants",
        RegionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 13 (Hawaii)
      {
        common_name: "Pua kala",
        scientific_name: "Argemone glauca",
        img_URL: "",
        description: "Covered in spiny leaves; The only poppy native to Hawaii; Resistant to fire",
        RegionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        common_name: "Opelu",
        scientific_name: "Lobelia hypoleuca",
        img_URL: "",
        description: "Does best in full or partial sun with moist, wet soil",
        RegionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        common_name: "Uki'uki",
        scientific_name: "Dianella sandwicensis",
        img_URL: "",
        description: "Some forms will have bluish-purple fruits",
        RegionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      //Region 14 (Alaska)
      {
        common_name: "Wild columbine",
        scientific_name: "Aquilegia formosa",
        img_URL: "",
        description: "Several Native American tribes can use columbine to make perfume; Poisonous, do not eat",
        RegionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        common_name: "Chocolate lily",
        scientific_name: "Fritillaria camschatcensis",
        img_URL: "",
        description: "Referred to as the 'skunk lily' or 'outhouse lily' due to its unpleasant smell",
        RegionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        common_name: "Woolly geranium",
        scientific_name: "Geranium erianthum",
        img_URL: "",
        description: "This flowering plant is also found in China, Japan, and Russia",
        RegionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  down: async (queryInterface) => {

    await queryInterface.bulkDelete("Regions", null, {});
    await queryInterface.bulkDelete("Plants", null, {});

  }
};
