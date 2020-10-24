console.log('cliente side js file is loaded');

const getWeather = (location = '') => {
  const url = `/weather?address=${location}`;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);

        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = `${data.forecast.description[0]}, Temperature: ${data.forecast.temperature} °C`;

        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
};

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

// messageOne.textContent = '';

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;

  getWeather(location);
});
