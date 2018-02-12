// This defines image source value
  let handleImageClick = function(event) {
  let theImage = jQuery(event.target)
  console.log("got a click!: ", theImage)
  let srcValue = theImage.attr("src")
  console.log(srcValue)

// Identifies what URl should replace the main URL
// Must be inside the function to work since this is where the srcValue variable is defined
  jQuery("#main-image").attr("src", srcValue)
}

// Click event that triggers the HandleImageClick function
// Must be outside the HandleImageClick function because that needs to be complete to be called
  jQuery("img").on("click", handleImageClick)

//testing change
//testing another change
//testing123
//otherchanges


//----------------Extra stuff I was trying that didn't work------------------//
// For Loop
//
// let rollDice = function(event) {
//   console.log(event)
//
//   let diceImages = jQuery("#main img")
//   for (let image of diceImages) {
//     rollDie(image)
//   }
// }
//
// let rollDie = function(imageElement) {
//   let value = "https://image.tmdb.org/t/p/w300/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg"
//   jQuery(imageElement).attr("src", value)
// }
//
// // This calls the on click activity
// jQuery("img").on("click", rollDie)
