// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.querySelector("#modal");
  errorModal.classList.add("hidden");

  const emptyHearts = document.querySelectorAll(".like-glyph");
  
  emptyHearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          
          heart.classList.add("activated-heart");
          heart.innerHTML = "&#x2764;";
        })
        .catch(() => {
        
          errorModal.classList.remove("hidden");
          const errorMessage = document.querySelector("#modal p");
          errorMessage.textContent = "Server Error! Please try again later.";

          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });

  const fullHearts = document.querySelectorAll(".activated-heart");

  fullHearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      
      heart.classList.remove("activated-heart");
      heart.innerHTML = "&#x2661;";
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
