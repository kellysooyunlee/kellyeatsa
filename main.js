console.log('Main.js is connected!')

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded!');
  var theForm = document.querySelector('#theform')
  theForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    // uncomment this when you're working on it! you don't want to necessarily write "click"
    // because a user might input with submit by clicking enter. tehrefore this accounts for both

    var input = evt.target.userinput.value
    // var email = evt.target.user_email.value
    // var bio = evt.target.user_bio.value
    // var number = evt.target.user_favorite_number.value
    // var pet = evt.target.user_pet.value

    // this is going to have an error until you do the part above
    attachUserInfoToPage(input)
    evt.target.reset()
  })

  function attachUserInfoToPage(input) {
    console.log(input)
    var newEntry = document.createElement('li')
    newEntry.innerHTML = input
    // newList.appendChild(newEntry)
    var theList = document.querySelector('#thelist ol')
    theList.appendChild(newEntry)
  }