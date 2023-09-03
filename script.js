const foodChoices = {
  burger: [
    "https://m.yelp.com/biz/in-n-out-burger-panorama-city",
    "https://m.yelp.com/biz/red-robin-gourmet-burgers-and-brews-northridge",
    "https://m.yelp.com/biz/jack-in-the-box-north-hollywood",
    "https://m.yelp.com/biz/burger-king-north-hollywood-4",
    "https://m.yelp.com/biz/shake-shack-burbank-burbank",
    "https://m.yelp.com/biz/wendys-panorama-city",
    "https://m.yelp.com/biz/mcdonalds-van-nuys-3",
    "https://m.yelp.com/biz/queens-burgers-pacoima",
    "https://m.yelp.com/biz/five-guys-northridge-2",
    "https://m.yelp.com/biz/hiburger-san-fernando-valley-2",
    // Add more burger URLs as needed
  ],
  pizza: [
    "https://m.yelp.com/biz/dominos-pizza-north-hollywood-4",
    "https://m.yelp.com/biz/pizza-hut-van-nuys-7",
    "https://m.yelp.com/biz/shakeys-pizza-parlor-valley-village",
    "https://m.yelp.com/biz/toppers-pizza-place-santa-clarita-2",
    "https://m.yelp.com/biz/little-caesars-pizza-los-angeles-57",
  ],
  chicken: [
    "https://m.yelp.com/biz/chick-fil-a-encino",
    "https://m.yelp.com/biz/popeyes-louisiana-kitchen-van-nuys",
    "https://m.yelp.com/biz/el-pollo-loco-n-hollywood-4",
    "https://m.yelp.com/biz/kfc-sepulveda",
    "https://m.yelp.com/biz/raising-cane-s-northridge",
    "https://m.yelp.com/biz/wingstop-van-nuys",
    "https://m.yelp.com/biz/jack-in-the-box-north-hollywood",
  ],

  noodles: [
    "https://m.yelp.com/biz/kopan-sushi-and-ramen-burbank-burbank",
    "https://m.yelp.com/biz/olive-garden-italian-restaurant-chatsworth-3",
    "https://m.yelp.com/biz/ok-chinese-restaurant-van-nuys",
  ],

  mexican: [
    "https://m.yelp.com/biz/lauras-restaurant-arleta",
    "https://m.yelp.com/biz/que-ricos-fresh-mexican-kitchen-north-hollywood",
    "https://m.yelp.com/biz/carnitas-michoacan-panorama-city",
  ],
  // Add more food categories and URL arrays as needed
};

const foodSelection = document.getElementById("foodSelection");

foodSelection.addEventListener("change", () => {
  const selectedFood = foodSelection.value;

  if (selectedFood in foodChoices) {
    const urls = foodChoices[selectedFood];
    const randomIndex = Math.floor(Math.random() * urls.length);
    const selectedURL = urls[randomIndex];

    window.open(selectedURL, "_blank");
  }
});
