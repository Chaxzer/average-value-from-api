

function highestAverageServiceAndAmount(paymentString) {
  // Parse the string into a list of payments
  let payments = JSON.parse(paymentString);

  // Initialize an empty object to store the total amounts and counts for each service
  let serviceData = {};

  // Iterate over the payments
  for (let payment of payments) {
      let service = payment[0];
      let amount = payment[1];

      // If this service is not yet in the object, add it with the current amount and a count of 1
      if (!(service in serviceData)) {
          serviceData[service] = {total: amount, count: 1};
      } 
      // If this service is already in the object, add the current amount to its total and increment its count
      else {
          serviceData[service].total += amount;
          serviceData[service].count += 1;
      }
  }

  // Initialize variables to store the service with the highest average and its average amount
  let highestAverageService = null;
  let highestAverageAmount = 0;

  // Iterate over the services in the object
  for (let service in serviceData) {
      // Calculate the average amount for this service
      let averageAmount = serviceData[service].total / serviceData[service].count;

      // If this service's average is higher than the current highest, update the highest average service and amount
      if (averageAmount > highestAverageAmount) {
          highestAverageService = service;
          highestAverageAmount = averageAmount;
      }
  }

  // Return the service with the highest average amount and the average amount
  return [highestAverageService, highestAverageAmount];
}


// Test case
let paymentString = '[["Swiggy", 123],["Swiggy", 227],["Zomato", 103],["Zomato", 171],["Dunzo", 131],["Zomato", 122],["Swiggy", 181]]';

console.log(highestAverageServiceAndAmount(paymentString));  // Output: ["Swiggy", 177]

