let mainP = document.querySelector(".mainP");

function countdown() {
  // Set the target date and time (24 Jan 2024, 12:00)
  const targetDate = new Date('January 22, 2024 12:20:00').getTime();

  function updateCountdown() {
    // Get the current date and time
    const currentDate = new Date().getTime();

    // Calculate the remaining time in milliseconds
    const remainingTime = targetDate - currentDate;

    if (remainingTime > 0) {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // Display the countdown
      let finalTime = `Remaining time - ${days} days, ${hours} hour, ${minutes} minutes, ${seconds} seconds`;
      mainP.textContent = finalTime;
    } else {
      // Display a message when the countdown reaches zero
      mainP.textContent = "Expired";
      clearInterval(countdownInterval);
    }
  }

  // Initial call to display the countdown immediately
  updateCountdown();

  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Call the countdown function
countdown();
