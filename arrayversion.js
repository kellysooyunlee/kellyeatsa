console.log("Main.js is connected!")

var foodProducts = [

    {'product': "Trader Joe's Sweet Plantain Chips",
     'company': "Trader Joe's",
     'image': "./plantain.jpg",
     'stars': '4',
     'calories': '140',
    },

    {'product': "Trader Joe's Everything but the Bagel Sesame Seasoning Blend",
     'company': "Trader Joe's",
     'image': "./bagel.jpg",
     'stars': '4.5',
     'calories': '5',
    }

];


$(document).ready(function() {
  console.log("DOM Content is loaded!")
  const $searchForm = $('#food_search')

  $('#food_search').submit(function(event) {
    console.log("User search submit works")
    event.preventDefault();

    const $input = $("#user_input").val();
    const $userInput = $input.toLowerCase()

    console.log($input)

    // if ($userInput~='sweet','plantain','chips') {
    //   attachPlantainInfo();
    // }

    // else if ($userInput~='sweet','plantain','chips') {
    //   attachBagelInfo();
    // }
    
    event.target.reset()
  })


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