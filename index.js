// Function to generate thank you messages
function writeCards(namesArray, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a given number
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage
  const names = ["Alice", "Bob", "Charlie"];
  const event = "birthday";
  const thankYouCards = writeCards(names, event);
  console.log(thankYouCards);
  
  countDown(5);