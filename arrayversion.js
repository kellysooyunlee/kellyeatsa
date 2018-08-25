console.log("Main.js is connected!")

var foodProducts = [

    {'product': "trader joe's sweet plantain chips",
     'company': "Trader Joe's",
     'image': "./plantain.jpg",
     'stars': '4',
     'calories': '140',
     'reviews':
      [ {name: "Kelly",
        text: "This is so delicious!"
      }
      ]
    },

    {'product': "trader joe's everything but the bagel sesame seasoning blend",
     'company': "Trader Joe's",
     'image': "./bagel.jpg",
     'stars': '4.5',
     'calories': '5',
      'reviews':
      [ {name: "Kelly",
        text: "This is so delicious!"
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

    $(".results").empty();

    const $input = $("#user_input").val();
    const $userInput = $input.toLowerCase()

    console.log($input)

    // console.log(foodProducts[0]["product"])

    // if (foodProducts[0]["product"].includes($userInput)) {
    //   //any of one word that you include in the serach will match produc string
    //   console.log("Included")
    // }
 //we have to loop this because right now


  for (var i = 0; i < foodProducts.length; i++) {

//how to do function if find any of the words in the userInput.
    if (foodProducts[i]["product"].includes($userInput)) {
      console.log(foodProducts[i]["product"], ". product found")

      $(".homepage").hide();
      $(".results").show();

      createTemplate();
      const $img = $("<img>").attr("src",foodProducts[i]["image"]);
      $(".results").append($img);
    }

    else {
      const $errorDiv = $('<div>')
      $errorDiv.text("We could not find your search of " +  $input + " in our database. Please try searching for another product.")
      $(".results").append($errorDiv);
    }

  }
    event.target.reset()
  })


 // else {
 //      const $errorDiv = $('<div>')
 //      $errorDiv.text("We could not find your search of " +  $input + " in our database. Please try searching for another product.")
 //      $(".results").append($errorDiv);
 //    }



function createTemplate() {
  console.log("function works!")

}




  function attachPlantainInfo() {
    console.log("Trader Joe's Sweet Plantain Chips")

    const $plantainDiv = $('<div>')
    $(body).append($plantainDiv)
    const $foodName = $('<h2>').text("Sweet Plantain Chips").appendTo($plantainDiv)

    const $img = $("<img>");
    $img.src = foodProducts[0][image].val()
    $plantainDiv.append($img);

    // var newParagraph = document.createElement('p')
    // newParagraph.innerHTML = bio
    // newDiv.appendChild(newH1)
    // newDiv.appendChild(newParagraph)
    // var usersInfo = document.querySelector('#users_info')
    // usersInfo.appendChild(newDiv)
  }

function attachBagelInfo() {
    console.log("Everything Bagel Seasoning")
    // use JavaScript
    // Create a new div with the user info 
    var newDiv = document.createElement('div')
    var newH1 = document.createElement('h1')
    newH1.innerHTML = username
    var newParagraph = document.createElement('p')
    newParagraph.innerHTML = bio
    newDiv.appendChild(newH1)
    newDiv.appendChild(newParagraph)
    var usersInfo = document.querySelector('#users_info')
    usersInfo.appendChild(newDiv)
  }

})