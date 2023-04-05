// Get the submit button element
const submitBtn = document.querySelector('.submit');

// Add event listener to the submit button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form input values
  const from = document.querySelector('input[placeholder="From"]').value;
  const to = document.querySelector('input[placeholder="To"]').value;
  const noOfTickets = document.querySelector('input[placeholder="No of Tickets"]').value;
  const departure = document.querySelector('input[placeholder="Depature"]').value;
  const arrival = document.querySelector('input[placeholder="Arrival"]').value;
  const nameAndDetails = document.querySelector('textarea[name="text"]').value;

  // Retrieve data from db.json using fetch API
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      // Add new data to the existing data
      const newData = {
        from: from,
        to: to,
        noOfTickets: noOfTickets,
        departure: departure,
        arrival: arrival,
        nameAndDetails: nameAndDetails
      };

      data.push(newData); // Add the new data to the existing data

      // Update the db.json file with the new data using fetch API and PATCH method
      fetch('db.json', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
});