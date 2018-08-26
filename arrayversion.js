console.log("Main.js is connected!")

var foodProducts = [

    {'product': "trader joe's sweet plantain chips",
     'company': "Trader Joe's",
     'image': "./images/plantain.jpg",
     'category': "Chips and Cookies",
     'stars': '4',
     'calories': '140',
     'reviews':
      [ {name: "Ezra Curry",
        text: "These are so delicious and very addicting.!",
        date: "August, 20, 2018",
      }
      ]
    },

    {'product': "trader joe's everything but the bagel sesame seasoning blend",
     'company': "Trader Joe's",
     'image': "./images/bagel.jpg",
     'category': "Sauces and Seasoning",
     'stars': '4.8',
     'calories': '5',
      'reviews':
      [ {name: "Octopus Kim",
        text: "As you might suspect from the name, this seasoning tastes exactly like eating an everything bagel. I have sprinkled this on my morning sunny side eggs to give them more flavor, but have no doubt there will be another good combination for this somewhere else.",
        date: "August, 18, 2018",
      }
      ]
    }

];


$(document).ready(function() {
  console.log("DOM Content is loaded!")
  const $searchForm = $('#food_search')

  $('#food_search').submit(function(event) {
    console.log("User search submit works")
    event.preventDefault();
    $(".results-content").empty();

    const $input = $("#user_input").val();
    const $userInput = $input.toLowerCase();

    console.log($input)


  for (var i = 0; i < foodProducts.length; i++) {
    console.log("loop works")

    // const $resultsDiv = $(".results");
    // $resultsDiv.removeClass(".hide");
    if (foodProducts[i]["product"].includes($userInput)) {
      console.log(foodProducts[i]["product"], ". product found")

      $(".homepage").hide();
      $(".results").removeClass("hidden").addClass("show");
      // $(".results.hide").attr("display", "block");
      // $(".results").attr("display", "flex");
      // createTemplate();
     
      const $foodTitle = $('<h2>')
      $foodTitle.text(foodProducts[i]["product"])
      $(".results-content").prepend($foodTitle);

      const $img = $("<img>").attr("src",foodProducts[i]["image"]).attr("id", "picture");
      const $imgDiv = $("<div>").attr("class", "image").append($img)
      $(".results-content").append($imgDiv)

      const $bottomDiv = $("<div>").attr("class", "bottomcontainer")
      $(".results-content").append($bottomDiv);
      // $(".results-content").append($img);

      // const $formDiv = $("<form>").attr("id", "theform")
      // const $formDiv = $("<form>").attr("id", "theform").append("<h2>");
      // const $Reviews= $("#theform > h2");
      // console.log($Reviews);
      // $Reviews.text("Reviews");
      // $(".results-content").append($formDiv);
      const $reviewsDiv= $("<div>").attr("class", "reviews")
      const $formDiv = $("<form>").attr("id", "theform");

      ($bottomDiv).append($reviewsDiv);
      ($reviewsDiv).append($formDiv);

      const $aside = $("<aside>");

      // const $asideText = $("<ul>").appendTo($aside);
      // const $name = $("<li>").text(foodProducts[i]["product"]);
      // const $company = $("<li>").text(foodProducts[i]["company"]);
      // const $category = $("<li>").text(foodProducts[i]["category"]);
      // const $rating = $("<li>").text("Average rating: " + foodProducts[i]["stars"]);
      // const $calories = $("<li>").text("Calories per serving: " + foodProducts[i]["calories"]);

      const $asideText = $("<ul>").appendTo($aside);
      const $name = $("<li class='name'>").text(foodProducts[i]["product"]).css("font-weight", "600").appendTo($asideText);
      const $company = $("<li>").text(foodProducts[i]["company"]).appendTo($asideText);
      const $category = $("<li>").text(foodProducts[i]["category"]).appendTo($asideText);
      const $rating = $("<li>").text("Average rating: " + foodProducts[i]["stars"]).appendTo($asideText);
      const $calories = $("<li>").text("Calories per serving: " + foodProducts[i]["calories"]).appendTo($asideText);
      
      ($bottomDiv).append($aside);

      // const $reviewList = $("<ul>").appendTo($formDiv)
      // const capitalizedProduct = $(foodProducts[i]["product"].css("text-transform", "capitalize"));

      const $inputReview = $("<input>").attr({
        type: "text", 
        id: "user_review",
        name: "user_review",
        placeholder: "What are your thoughts about " + foodProducts[i]["product"] + "?"
        // placeholder: "What are your thoughts about " + foodProducts[i]["product"].css("text-transform", "capitalize") +"?"
      });

      const $reviewList = $("<ul>").appendTo($formDiv);
      const $firstReview= $("<li>").text(foodProducts[i]["reviews".name]);
      $formDiv.prepend($inputReview)
      $reviewList.prepend($firstReview)



      $('#theform').submit(function(event) {
        console.log("Review submit works")
        event.preventDefault();

        const $inputReview = $("#user_review").val();

        attachReview($inputReview);
        event.target.reset()
      })

      function attachReview($inputReview) {
        const $newReview = $("<li>").text($inputReview);
        // $reviewList.append($newReview)
        const $allReviews = $("#theform li")
        // console.log($allReviews);
        //   for (var i = 0; i < $allReviews.length; i++) {
        
        $reviewList.prepend($newReview)
        //   $newReview.insertBefore($allReviews[0])
        // console.log($allReviews);
        // for (var i = 0; i < $allReviews.length; i++) {
        // $reviewList.prepend($allReviews[0])
        // }
      }



    }

    else {
      const $errorDiv = $('<div>')
      $errorDiv.text(" ");
      // $errorDiv.text("We could not find your search of " +  $input + " in our database. Please try searching for another product.")
      $(".results-content").append($errorDiv);
    }

  }
  // closeButton();

  event.target.reset()
  })

function createTemplate() {
  console.log("function works!")
  // $('.results').css('display', 'flex');
}

const $resultsDiv = $(".results");

function closeButton() {

    $("#closebutton").click(function(event) {
      console.log("closebutton works")
    // $("body").hide($resultsDiv)
      window.location.reload(true);
    })
  }

closeButton();






  // function attachPlantainInfo() {
  //   console.log("Trader Joe's Sweet Plantain Chips")

  //   const $plantainDiv = $('<div>')
  //   $(body).append($plantainDiv)
  //   const $foodName = $('<h2>').text("Sweet Plantain Chips").appendTo($plantainDiv)

  //   const $img = $("<img>");
  //   $img.src = foodProducts[0][image].val()
  //   $plantainDiv.append($img);

  // }

// function attachBagelInfo() {
//     console.log("Everything Bagel Seasoning")
//     // use JavaScript
//     // Create a new div with the user info 
//     var newDiv = document.createElement('div')
//     var newH1 = document.createElement('h1')
//     newH1.innerHTML = username
//     var newParagraph = document.createElement('p')
//     newParagraph.innerHTML = bio
//     newDiv.appendChild(newH1)
//     newDiv.appendChild(newParagraph)
//     var usersInfo = document.querySelector('#users_info')
//     usersInfo.appendChild(newDiv)
//   }

})