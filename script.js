// Fetch jokes from the API
function get_jokes() {

  fetch('https://v2.jokeapi.dev/joke/Dark?type=twopart&amount=10')

    .then(response => response.json())

    .then(data => {

      let jokes = data.jokes;

      let temp = document.querySelector('.setup');

      let index = Math.floor(Math.random() * jokes.length);

      let joke = jokes[index];

      temp.textContent = joke.setup;

      

      temp = document.querySelector('.delivery');

      temp.textContent = joke.delivery;

      temp.addEventListener('click', function() {

        temp.classList.toggle('blur');

      });

      temp.addEventListener('touchstart', function() {

        temp.classList.toggle('blur');

      });

    })

    .catch(error => {

      console.error('Error:', error);

    });

}

get_jokes();
