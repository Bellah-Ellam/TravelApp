document.addEventListener('DOMContentLoaded', () => {
    // Get the form element
    const form = document.querySelector('#form');
  
    // Listen for form submission event
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent default form submission
  
      // Get the form data
    //   const formData = new FormData(form);
        const from = document.getElementById('from')
        const to = document.getElementById('to')
        const noOfTickets = document.getElementById('noOfTickets')
        const departure = document.getElementById('departure')
        const arrival = document.getElementById('arrival')
        const nameAndDetails = document.getElementById('details')

        const formData = {
            from:from.value,
            to:to.value,
            noOfTickets:noOfTickets.value,
            departure:departure.value,
            arrival:arrival.value,
            nameAndDetails:nameAndDetails.value
         }
  
      // Send a POST request to the server with the form data
      fetch('https://msafiri-travelapp.onrender.com/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
        formData
        )
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  
      // Reset the form
      form.reset();
    });
  });