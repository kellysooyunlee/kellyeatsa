console.log('Main.js is connected!')

document.addEventListener('DOMContentLoaded', function() {
  var foodSearch = document.querySelector('.search')
  foodSearch.addEventListener('submit', function(evt) {
    evt.preventDefault();
    // uncomment this when you're working on it!

    var input = evt.target.user_userinput.value;
    var userInput = input.toLowerCase();
    
    var plantain = userInput.includes("plantain", "plantains", "trader", "joes", "joe")
    var bagel = userInput.includes("everything", "bagel", "seasoning")

    if plantain {
      attachUserInfoToPage(username, email, bio, number, pet)
    };

    else {

    }
    
    evt.target.reset()
  })

  function attachUserInfoToPage(username, email, bio, number, pet) {
    console.log(username, email, bio, number, pet)
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
