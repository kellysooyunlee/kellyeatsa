console.log("Main.js is connected!")

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM Content is loaded!")
  var foodSearch = document.querySelector('#food_search')

  foodSearch.addEventListener('submit', function(evt) {
    console.log("Food submit works")
    evt.preventDefault();

    var input = evt.target.user_input.value
    var userInput = input.toLowerCase()
    
    var plantain = userInput.includes("plantain", "plantains", "trader", "joes", "joe");
    var bagel = userInput.includes("everything", "bagel", "seasoning");

    if (plantain) {
      attachPlantainInfo();
    }

    else if (bagel) {
      attachBagelInfo();
    }

    var wrap = document.querySelector('.wrap')
    var h1= document.querySelector('h1')

    h1.style.display= "none";
    wrap.style.display= "none";

    
    evt.target.reset()
  })


  function attachPlantainInfo() {
    console.log("Trader Joe's Sweet Plantain Chips")

    var plantainDiv = document.createElement('div')
    document.body.appendChild(plantainDiv)
    var newH1 = document.createElement('h2')
    newH1.innerHTML = "Sweet Plantain Chips";
    plantainDiv.appendChild(newH1);

    var img = document.createElement("img");
    img.src = ("./plantain.jpg");
    plantainDiv.appendChild(img);

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